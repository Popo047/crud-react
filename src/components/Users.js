import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, getPostData } from "../store/crudSlice";
import { NavLink } from "react-router-dom";
import Card from "../UI/Card";

function Users() {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.crud.users);
  if (!fetchedData.data) {
    dispatch(getUserData());
    dispatch(getPostData());
  }

  return (
    <>
      <h1>UserLists</h1>
      <ul>
        {fetchedData.data ? (
          fetchedData.data.map((data) => (
            <li key={data.id}>
              <NavLink to={`/userdetails/${data.id}`}>
                <Card name={data.name} email={data.email}></Card>
              </NavLink>
            </li>
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </>
  );
}

export default Users;
