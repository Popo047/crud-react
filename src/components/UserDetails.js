import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Card from "../UI/Card";
import UserPost from "./UserPost";

function UserDetails(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const userDetails = useSelector((state) => state.crud.users);
  console.log({
    id,
    userDetails,
  });
  const loading = useSelector((state) => state.crud.loading);

  const userDetail = userDetails.data.find((ud) => ud.id == id);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Card
            name={userDetail.name}
            email={userDetail.email}
            gender={userDetail.gender}
            status={userDetail.status}
          />
          <UserPost id={id} />
        </>
      )}
    </div>
  );
}

export default UserDetails;
