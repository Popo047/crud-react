import React, { useRef } from "react";
import { useSelector } from "react-redux";

function NewPost(props) {
  const idRef = useRef();
  const userIdRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = (e) => {
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
    // props.onAddPost(data);
  };
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
