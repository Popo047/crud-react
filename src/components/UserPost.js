import React from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

function UserPost(props) {
  const postLists = useSelector((state) => state.crud.posts);

  const postList = postLists.data.filter(
    (pId) => pId.user_id.toString() === props.id
  );

  console.log(postLists);
  console.log("PostList", postList);
  return (
    <>
      <div>
        {postList ? (
          <ul>
            {postList.map((post) => (
              <Card key={post.id} name={post.title} email={post.body} />
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default UserPost;
