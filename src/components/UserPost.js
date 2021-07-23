import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crudActions, getPostData } from "../store/crudSlice";
import Card from "../UI/Card";

function UserPost(props) {
  const postLists = useSelector((state) => state.crud.posts);
  const loading = useSelector((state) => state.crud.loading);

  const postList = postLists.data.filter((pId) => pId.user_id == props.id);
  console.log(props.id);
  console.log(postLists);
  console.log("PostList", postList);
  return (
    <>
      <div>
        {postList ? (
          <ul>
            {postList.map((post) => (
              <li>{post.title}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default UserPost;
