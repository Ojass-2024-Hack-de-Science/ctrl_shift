import User from "../model/User.js";
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
    const hashedpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      password: hashedpassword,
      number,
      email,
    });
    await newUser.save();
    const payload = {
      user: {
        id: newUser._id,
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

export const createBooking = async(req,res)=>{
  try {
    const { userId, driverId, pickupLocation, destination, fare, vehicleType } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const newBooking = new Booking({
      user: userId,
      driver: driverId,
      pickupLocation: pickupLocation,
      destination: destination,
      fare,
      vehicleType: vehicleType,
      status: 'pending'
    });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};