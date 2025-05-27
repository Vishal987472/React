import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "./githubSlice";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.github.user);
  console.log(user);
  const loading = useSelector((state) => state.github.loading);
  const error = useSelector((state) => state.github.error);
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <p>Loading followers...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-gray-800 text-center">
      <h2 className="text-2xl font-bold">User Information</h2>
      {user && (
        <div className="flex flex-col items-center justify-center bg-gray-300 p-6 rounded-lg shadow-md">
          <h3>Username : {user.login}</h3>
          <h3>Name : {user.name}</h3>
          <p>Followers : {user.follower}</p>
          <p>Following : {user.following}</p>
          <p>Public Repos : {user.public_repos}</p>
          <img
            src={user.avatar_url}
            alt={user.name}
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}></img>
        </div>
      )}
    </div>
  );
};

export default User;
