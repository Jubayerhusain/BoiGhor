import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getStoredReadList } from "../../utility/localStore";
import Book from './../Book/Book';

function ListedBooks() {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        // console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList);

    }, []);
    return (
        <div>
            <h1 className="font-bold text-gray-700 text-5xl text-center my-28 border-b-2 border-dashed py-3 w-11/12 mx-auto">Listed Books</h1>
            <div className="w-11/12 mx-auto my-14">
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Read Books: {readList.length}</h2>
                        {readList.length > 0 ? (
                            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                                {readList.map(book => (
                                    <Book book={book}></Book>
                                ))}
                            </ul>
                        ) : (
                            <p>No books read yet.</p>
                        )}
                    </TabPanel>
                    <TabPanel>
                        <h2>Wishlist Books</h2>
                        <p>Any content for Wishlist Books</p>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
}

export default ListedBooks;
