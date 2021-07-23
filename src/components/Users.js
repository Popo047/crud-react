import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { crudActions } from "../store/crudSlice";

function Users() {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Users</h1>
    </>
  );
}

export default Users;
