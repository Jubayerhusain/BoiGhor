const getStoredReadList = () => {
    const getReadList = localStorage.getItem('read-list');
    if (getReadList) {
        return JSON.parse(getReadList);
    } else {
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedReadList = getStoredReadList();
    if (!storedReadList.includes(id)) {
        storedReadList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedReadList));
    } else {
        alert('This book already exists');
    }
};

const removeBookFromList = (bid) => {
    const storedReadList = getStoredReadList();
    const updatedList = storedReadList.filter(id => id !== bid);
    localStorage.setItem('read-list', JSON.stringify(updatedList));
};

export { addToStoredReadList, getStoredReadList, removeBookFromList };
