const getStoredReadList = () => {
    const getReadList = localStorage.getItem('read-list');
    if (getReadList) {
        const storedList = JSON.parse(getReadList);
        return storedList;
    }
    else{
        return [];
    }
}
const addToStoredReadList = (id) =>{
    const storedReadList = getStoredReadList()
    if (storedReadList.includes(id)) {
        alert('This book already exists')
    }
    else{
        // push the id on storedReadList 
        storedReadList.push(id)

        // conacet the sotoredReadList
        const storedReadListStr= JSON.stringify(storedReadList)

        // set value on localStorege 
        localStorage.setItem('read-list', storedReadListStr)
    }
}
export{addToStoredReadList,getStoredReadList}
