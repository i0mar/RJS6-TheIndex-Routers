import React, {Component} from 'react';
import BookTable from './BookTable';
import SearchBar from "./SearchBar";

class BookList extends Component {
    state = {
        filteredBooks: this.props.books
    };

    filterBooks = query => {
        let filteredBooks = this.props.books.filter(book => book.title.toUpperCase().includes(query.toUpperCase()));
        this.setState({filteredBooks: filteredBooks});
    };

    componentDidUpdate(prevProps) {
        if(prevProps.books != this.props.books)
            this.setState({filteredBooks: this.props.books});
    };

    render() {
        console.log(this.props.books);
        
        return (
            <div>
                <SearchBar onChange={this.filterBooks} />
                <BookTable books={this.state.filteredBooks}/>
            </div>
        );
    };
}

export default BookList;