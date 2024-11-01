import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getStoredReadList, removeBookFromList } from "../../utility/localStore";
import ReadBook from './../ReadBook/ReadBook';

function ListedBooks() {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);
    }, [allBooks]);

    const handleDelete = (id) => {
        const updateBookList = readList.filter(book => book.bookId !== id);
        setReadList(updateBookList);
        removeBookFromList(id);
    };

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
                        <h2 className="font-bold text-gray-700 text-4xl my-14">Read Books: {readList.length}</h2>
                        {readList.length > 0 ? (
                            <ul className="space-y-5 mt-10">
                                {readList.map(book => (
                                    <ReadBook key={book.bookId} book={book} onDelete={() => handleDelete(book.bookId)} />
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
