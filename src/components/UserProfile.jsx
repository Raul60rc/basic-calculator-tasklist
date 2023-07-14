import React, { useState } from "react";

const UserProfile = ({ name = "John Doe", age = 25, image }) => {
  const [userAge, setUserAge] = useState(age);

  const Increment = () => {
    setUserAge(userAge + 1);
  };

  const Decrement = () => {
    setUserAge(userAge - 1);
  };

  return (
    <div>
      <img src={image} alt="User Image" />
      <h2>{name}</h2>
      <p>{userAge}</p>
      <button onClick={() => Increment()}>+</button>
      <button onClick={() => Decrement()}>-</button>
    </div>
  );
};

export default UserProfile;
