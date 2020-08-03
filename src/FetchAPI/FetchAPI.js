import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

export default function FetchAPI({ pushToApp }) {
  const [title, updateTitle] = useState("");

  function onChange(e) {
    let newTitle = e.target.value;
    updateTitle(newTitle);
  }
  function onSubmit(e) {
    e.preventDefault();
    fetch(
      `https://newsapi.org/v2/everything?q=${title}&apiKey=cb3eca11c40447f195e3df0439b2e73a`
    )
      .then((data) => data.json())
      .then((data) => {
        if (title) {
          pushToApp(data.articles);
        }
      });
  }
  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="standard-basic"
        label="Input topic"
        value={title}
        onChange={onChange}
      />
    </form>
  );
}
