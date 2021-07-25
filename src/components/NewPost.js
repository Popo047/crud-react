import React, { useRef } from "react";

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
  return (
    <>
      <form
        action=""
        onSubmit={submitHandler}
        className="container"
        style={{ maxWidth: "500px" }}
      >
        <div className="control">
          <input className="input" type="number" ref={idRef} />
        </div>
        <label htmlFor="" className="label">
          USER_ID
        </label>
        <div className="control">
          <input type="number" className="input" ref={userIdRef} />
        </div>
        <label htmlFor="" className="label">
          Title{" "}
        </label>
        <div className="control">
          <input type="text" className="input" ref={titleRef} />
        </div>
        <label htmlFor="" className="label">
          Post Description
        </label>
        <div className="control">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="textarea"
            ref={descriptionRef}
          ></textarea>{" "}
        </div>
        <br />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default NewPost;
