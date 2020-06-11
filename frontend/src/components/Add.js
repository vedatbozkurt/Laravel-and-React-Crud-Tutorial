/*
* @Author: @vedatbozkurt
* @Date:   2020-05-28 02:20:14
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-29 01:51:34
*/
import React, { useState } from "react";
import axios from 'axios';
import { Link, useHistory} from "react-router-dom";

const Add = () => {

  let history = useHistory();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");

  const handleName = e => {
    let name = e.target.value;
    setName(name);
};

const handleAuthor = e => {
    let author = e.target.value;
    setAuthor(author);
};


const addBook = () => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('author', author);

    let uri = 'http://127.0.0.1:8000/api/book/add';
    axios.post(uri, formData)
    .then((response) => {
      console.log(response.data)
      history.push("/");
  })
    .catch(error => {
      alert(error)
  });
}

return (
    <div className="ArticleContainer">
    <div className="row justify-content-center p-5">
    <div className="col-lg-4 col-md-4 col-sm-8">
    <div className="card border-0 shadow">
    <div className="card-body">
    <h3 className="card-title text-center">Add New Book</h3>
    <fieldset>
    <div className="form-group">
    <label> Name </label>
    <input
    type="text"
    className="form-control form-control-sm"
    onChange={handleName}
    />
    </div>
    <div className="form-group">
    <label> Author </label>
    <input
    type="text"
    className="form-control form-control-sm"
    onChange={handleAuthor}
    />
    </div>
    <button onClick={addBook} className="btn btn-primary btn-sm btn-block">
    Submit
    </button>
    </fieldset>
    </div>
    </div>
    </div>
    </div>
    </div>
    )
}

export default Add;
