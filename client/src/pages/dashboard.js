import React from "react";
import "./dashboard.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import Map from "../components/map";
import "../icons/Gemini_Generated_Image_y4t1jly4t1jly4t1.jpg";
export const Dashboard = () => {
  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require("../icons/placeholder.png"),
    iconSize: [38, 38], // size of the icon
  });

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };
  const markers = [
    {
      geocode: [22.777, 86.1441],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3",
    },
  ];

  return (
    <div className="dbmain-container">
      <div className="dbleft-container">
        <div className="dbleft-box">
          <div className="dbimage-container">
            <img src={require("../icons/Gemini_Generated_Image_y4t1jly4t1jly4t1.jpg")} alt=""/>
          </div>
          <form>
            <div>
              <input
                className="dbinputbox"
                type="text"
                placeholder="Enter Your Car Type"
                name="cartype"
                required
              />
              <input
                className="dbinputbox"
                type="text"
                placeholder="Current Location"
                name="username"
                required
              />
            </div>
            <button className="dbsubmit" type="submit">
              Book
            </button>
          </form>
        </div>
      </div>
      <div className="dbright-container">
        <Map />
      </div>
    </div>
  );
};
