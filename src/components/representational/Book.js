import React from 'react';
import '../../stylesheets/Book.css';
import { withRouter } from 'react-router-dom';

const Book = (props) => {
    return (
        <div className="Book" onClick={props.selectedBookHandler} >
            <h3 >Book: {props.bookName} </h3>
            <h3>Writer: {props.writer} </h3>



        </div>

    );
}
export default withRouter(Book);