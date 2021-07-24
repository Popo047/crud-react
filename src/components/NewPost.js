import React, { useRef } from "react";
import { useSelector } from "react-redux";

function NewPost(props) {
  const idRef = useRef();
  const userIdRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const enteredId = idRef.current.value;
    const enteredUserId = userIdRef.current.value;
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descriptionRef.current.value;

    const data = {
      id: enteredId,
      user_id: enteredUserId,
      title: enteredTitle,
      body: enteredDesc,
    };
    const response = await fetch(
      `https://gorest.co.in/public/v1/users/${data.user_id}/posts`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 991f16ee2a02e95b9579c9167b32a435016cfd16ed7a0fc07149fe64a47c12d7",
        },
      }
    );
    const dataa = await response.json();
    console.log(dataa);
  };
  console.log(props);
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Enter ID</label>
        <input type="number" ref={idRef} />
        <label htmlFor="">U_ID</label>
        <input type="number" ref={userIdRef} />
        <label htmlFor="">Title </label>
        <input type="text" ref={titleRef} />
        <label htmlFor="">Post Description</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          ref={descriptionRef}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default NewPost;
