import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../UI/Card";
import UserPost from "./UserPost";

function UserDetails(props) {
  const { id } = useParams();
  const userDetails = useSelector((state) => state.crud.users);

  const loading = useSelector((state) => state.crud.loading);

  const userDetail = userDetails.data.find((ud) => ud.id.toString() === id);

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
          <br />
          <UserPost id={id} />
        </>
      )}
    </div>
  );
}

export default UserDetails;
