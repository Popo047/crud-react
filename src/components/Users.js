import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../store/crudSlice";
import { NavLink } from "react-router-dom";

function Users() {
  const dispatch = useDispatch();
  const fetchedData = useSelector((state) => state.crud.users);
  if (!fetchedData.data) {
    dispatch(getData());
  }
  console.log(fetchedData);
  return (
    <>
      <ul>
        {fetchedData.data ? (
          fetchedData.data.map((data) => (
            <li>
              <NavLink to={`/userdetails/${data.id}`}>{data.name}</NavLink>
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
