import React from "react";

const Avatar = ({ src, alt = "User avatar", size = 40 }) => {
  return (
    <div className="avatar-container" style={{ width: size, height: size }}>
      <img src={src} alt={alt} className="avatar-image" />
    </div>
  );
};

export default Avatar;
