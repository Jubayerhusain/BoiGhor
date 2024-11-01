
import { useEffect, useState } from 'react';
import Book from './../Book/Book';
function Books() {
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch(`./booksData.json`)
        .then(res => res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <h1 className='text-6xl text-center text-gray-700 font-bold my-2'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-y-14 my-24'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    )
}

export default Books;
