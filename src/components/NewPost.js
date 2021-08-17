import React, { useRef } from "react";
import PropTypes from "prop-types";

function NewPost(props) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  NewPost.propTypes = {
    id: PropTypes.number,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // const enteredId = false;
    // const enteredUserId = userIdRef.current.value;
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descriptionRef.current.value;

    const data = {
      user_id: props.id,
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
            "Bearer 3af7ae82ee050c05e004e19dc2524dc828de06c52d61fc0bed9cddc3ba1d9213",
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
