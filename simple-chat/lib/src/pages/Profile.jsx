import React, { useState } from "react";
import "../styles/Profile.css";

const Profile = () => {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState({
    name: "Cy",
    about: "Hello. I'm using Messenger.",
    phone: "+234 xxx xxx xxxx",
    links: "",
  });

  const editItem = (key) => {
    const value = prompt(`Edit ${key}`, data[key]);

    if (value !== null) {
      setData({ ...data, [key]: value });
    }
  };

  return (
    <div className="profile">
      <div className="top">
        <button className="back">←</button>
        <h2>Profile</h2>
      </div>

      <div className="pic">
        <div className="circle">👤</div>

        <p onClick={() => setOpen(true)}>Edit</p>
      </div>

      <div className="card">
        <div className="row" onClick={() => editItem("name")}>
          <label>Name</label>
          <h4>{data.name}</h4>
        </div>

        <div className="row" onClick={() => editItem("about")}>
          <label>About</label>
          <h4>{data.about}</h4>
        </div>

        <div className="row" onClick={() => editItem("phone")}>
          <label>Phone number</label>
          <h4>{data.phone}</h4>
        </div>

        <div className="row" onClick={() => editItem("links")}>
          <label>Links</label>
          <h4 className="green">
            {data.links ? data.links : "Add links"}
          </h4>
        </div>
      </div>

      {open && (
        <div className="popup">
          <div className="box">
            <div className="head">
              <h3>Edit profile picture</h3>
              <button onClick={() => setOpen(false)}>✕</button>
            </div>

            <div className="option">📷 Take photo</div>
            <div className="option">🖼 Choose photo</div>
            <div className="option">✨ Create AI image</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;