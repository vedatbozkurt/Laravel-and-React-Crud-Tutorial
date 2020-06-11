/*
* @Author: @vedatbozkurt
* @Date:   2020-05-28 02:20:46
* @Last Modified by:   @vedatbozkurt
* @Last Modified time: 2020-05-29 03:01:54
*/

import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount = () => {
    this.getBooks();
  };

  getBooks = () => {
    axios.get('http://127.0.0.1:8000/api/books')
    .then(res => {
      console.log(res.data)
      this.setState({
        books: res.data
      })
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  deleteBook(bookid) {
    axios.delete(`http://127.0.0.1:8000/api/book/delete/${bookid}`)
    .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className="ArticleContainer">
      <div className="row justify-content-center p-5">
                <div className="col-lg-8 col-md-8 col-sm-8">
      <table className="table">
      <thead>
      <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      </tr>
      </thead>
      <tbody>
      {
        this.state.books.length === 0 ?
        <tr><td>Loading Books...</td></tr>
        :
        this.state.books.map((book, index) => (
          <tr key={index}>
          <td>{book.id}. {book.name}</td>
          <td>{book.author}...</td>
          <td><button onClick={() => this.deleteBook(book.id)} className='btn btn-outline-warning'>Delete</button>
          <Link to={`edit/${book.id}`} className="btn btn-outline-primary">Edit</Link></td>
          </tr>

          ))
      }
      </tbody>
      </table>

      </div>
      </div>
      </div>
      );
  }
}

export default List;
