import React from 'react';
import {useParams} from "react-router-dom";

const User = () => {
    const params = useParams();
  return (
    <p>Welcome to the User Page, {params.username}</p>
  );
};

export default User;