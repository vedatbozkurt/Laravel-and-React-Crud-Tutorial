/*
* @Author: @vedatbozkurt
* @Date:   2020-05-28 02:20:24
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-29 02:02:17
*/
import React, { useState, useEffect  } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const Edit = () => {
    let { id } = useParams();
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

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    getBook(id);
    console.log('des')
}, []);

  const getBook = () => {
    axios.get(`http://127.0.0.1:8000/api/book/edit/${id}`)
    .then((response) => {
        setName(response.data.name)
        setAuthor(response.data.author)
    });
}

const editBook = () => {
    let formData = new FormData();
    formData.append('name', name);
    formData.append('author', author);
    let uri = `http://127.0.0.1:8000/api/book/update/${id}`;
    console.log(uri);
    axios.post(uri, formData)
    .then((response) => {
        console.log('success')
        history.push("/");
    });
    console.log('post edildi')
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
    value={name}
    />
    </div>
    <div className="form-group">
    <label> Author </label>
    <input
    type="text"
    className="form-control form-control-sm"
    onChange={handleAuthor}
    value={author}
    />
    </div>
    <button onClick={editBook} className="btn btn-primary btn-sm btn-block">
    Submit
    </button>
    </fieldset>

    </div>
    </div>
    </div>
    </div>
    </div>
    )
};

export default Edit;
