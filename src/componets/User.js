import React from "react";

const User = ({ item }) => {
  const {
    cell,
    picture: { thumbnail },
    name: { first, last }
  } = item;

  return (
    <div style= {{display:"flex"}}>
      <div>
        <img src={thumbnail}></img>
      </div>
      <div>
        <p>{first + " " + last}</p>
        <p>{cell}</p>
      </div>
    </div>
  );
};

export default User;
