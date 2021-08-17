import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "../UI/Card";

function UserPost(props) {
  const [posts, setPosts] = useState([]);
  UserPost.propTypes = {
    id: PropTypes.number,
  };

  useEffect(
    () =>
      fetch(`https://gorest.co.in/public/v1/users/${props.id}/posts`)
        .then((response) => response.json())
        .then((data) => setPosts(data.data)),
    []
  );

  console.log("Posts:", posts);

  // const postLists = useSelector((state) => state.crud.posts);

  // const postList = postLists.data.filter((pId) => pId.user_id == props.id);
  return (
    <>
      <div>
        {posts ? (
          <ul>
            {posts.map((post) => (
              <Card key={post.id} name={post.title} gender={post.body} />
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default UserPost;
