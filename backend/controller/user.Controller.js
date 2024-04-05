import User from "../models/User.mjs";
import bcrypt from "bcrypt";
import dontenv from "dotenv";
dontenv.config();
export const userRegister = async (req, res) => {
  try {
    const { email, number, name, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    user = await User.findOne({ number });
    if (user) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }
    const salt = bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      password: hashedpassword,
      number,
      email,
    });
    await newUser.save();
    const payload = {
      user: {
        id: user._id,
      },
    };
    const token = jwt.sign(payload, process.env.MONGO_URI);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(400).json({ err: "Wrong Password" });
    const payload = {
      user: {
        id: user._id,
      },
    };
    const token = jwt.sign(payload, process.env.MONGO_URI);
    res.status(200).json({token});
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
