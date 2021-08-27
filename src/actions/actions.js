
const dataRequested = () => {
    return {
        type: 'FETCH_DATA_REQUESTED',

    }
}

const dataLoaded = (data) => {
    return {
        type: 'FETCH_DATA_SUCCESS',
        payload: data
    };
};

const dataError = (error) => {
    return {
        type: 'FETCH_DATA_FAILURE',
        payload: error
    };
};

const setPage = (page) => {
    return {
        type: "SET_PAGE",
        payload: page,
    }
}


const setModalOpen = (id) => {
    return {
        type: "SET_MODAL_OPEN",
        payload: id,
    }
}

const setModalClose = () => {
    return {
        type: "SET_MODAL_CLOSE"
    }
}

const setFilter = (name,value) => {
    return {
        type: "SET_FILTER",
        payload: {
            name: name,
            value: value
        }
    }
}



const handleDataForFilters = (data) => {
    return {
        type: "HANDLE_DATA_FOR_FILTERS",
        payload: data
    }
}
const setCategory = (data) => {
    return {
        type: "SET_CATEGORY",
        payload: data
    }
}
const addToDo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: data
    }
}
const deleteToDo = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: id
    }
}
const chekedToDo = (id) => {
    return {
        type: 'CHEKED_TODO',
        payload: id
    }
}
const addSearch = (data) => {
    return {
        type: 'ADD_SEARCH',
        payload: data
    }
}


export { dataRequested, dataLoaded, dataError, setPage,setModalOpen,setModalClose, setFilter,handleDataForFilters,setCategory,addToDo,addSearch,deleteToDo,chekedToDo }