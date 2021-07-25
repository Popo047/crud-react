import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData, getPostData } from "../store/crudSlice";
import { NavLink } from "react-router-dom";

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
              <NavLink to={`/userdetails/${data.id}`}>{data.name}</NavLink>

              <a href={`mailto:${data.email}`}>
                <span className="icon">
                  <i className="fas fa-home"></i>
                </span>
              </a>
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
