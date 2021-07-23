import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudActions } from "../store/crudSlice";

function UserPost(props) {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.crud.posts);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/posts")
      .then((response) => response.json())
      .then((data) => dispatch(crudActions.storePosts(data)));
  }, []);

  console.log(props.id);
  console.log(postList);
  return <div></div>;
}

export default UserPost;
