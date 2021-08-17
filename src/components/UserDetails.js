import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Card from "../UI/Card";
import NewPost from "./NewPost";
import UserPost from "./UserPost";

function UserDetails() {
  const { id } = useParams();
  const userDetails = useSelector((state) => state.crud.users);

  const loading = useSelector((state) => state.crud.loading);

  const userDetail = userDetails.data.find((ud) => ud.id == id);

  console.log(id);

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
          <NewPost id={id} />
        </>
      )}
    </div>
  );
}

export default UserDetails;
