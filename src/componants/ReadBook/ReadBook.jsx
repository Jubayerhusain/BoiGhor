function ReadBook({ book, onDelete }) {
    const { image, bookName, author, category } = book;

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete "${bookName}"?`)) {
            onDelete();
        }
    };

    return (
        <div className="border-2 p-8 rounded-2xl flex justify-between items-center">
            <div>
                <div className="flex space-x-3">
                    <img className="w-[150px] h-[200px] rounded-xl" src={image} alt={bookName} />
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-700">{bookName}</h1>
                        <h1 className="text-lg font-semibold text-gray-700">{author}</h1>
                        <p className="text-sm font-semibold text-gray-700">{category}</p>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={handleDelete} className="btn btn-error" aria-label={`Delete ${bookName}`}>Delete</button>
            </div>
        </div>
    );
}

export default ReadBook;
