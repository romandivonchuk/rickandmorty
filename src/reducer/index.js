
const updateData = (state,action) => {
    if (state === undefined) {
        return {
            dataPages: [],
            loading: true,
            error: null,
        }
    }

    switch (action.type) {
        case 'FETCH_DATA_REQUESTED':
            return {
                dataPages: [],
                loading: true,
                error: null,

            }

        case 'FETCH_DATA_SUCCESS':
            return {
                dataPages: action.payload,
                loading: false,
                error: null,

            };

        case 'FETCH_DATA_FAILURE':
            return {
                dataPages: [],
                loading: false,
                error: action.payload,

            };

        

        default:
            return state.data;

    }   
}


const updatePage = (state,action) => {
    if (state === undefined) {
        return 1
    }

    switch (action.type) {
        case 'SET_PAGE':
            return action.payload
        case 'SET_FILTER':
            return 1
        default:
            return state.page;

    }   
}
const updateModal = (state,action) => {
    if (state === undefined) {
        return {
            open: false
        }
    }

    switch (action.type) {
        case 'SET_MODAL_OPEN':
            return {
                open: true,
                id: action.payload
            }
        case 'SET_MODAL_CLOSE':
            return {
                open: false,
                id: null
            }

        default:
            return state.modal;

    }   
}
const updateFilter = (state,action) => {
    if (state === undefined) {
        return {
            loading: true,
            name: "",
            value: "",
            data: {},
        }
    }

    switch (action.type) {
        case 'SET_FILTER':
            return {
                data: state.filter.data,
                name: action.payload.name,
                value: action.payload.value,
                loading: false,
            }
        case 'HANDLE_DATA_FOR_FILTERS':
            return {
                data: action.payload,
                name: "",
                value: "",
                loading: false,
            }
        case 'SET_CATEGORY':
            return {
                data: state.filter.data,
                name: "",
                value: "",
                loading: false,
            }
        
            
        default:
            return state.filter;

    }   
}

const updateCategory = (state,action) => {
    if (state === undefined) {
        return "Characters"
    }
    switch (action.type) {
        case 'SET_CATEGORY':
            return action.payload
   
        default:
            return state.category;

    }   
}

const updateToDo = (state,action) => {
    if (state === undefined) {
        return {
            data: [],
            dataForSearch: [],
        }
    }

    switch (action.type) {
        case 'ADD_TODO':
            return {
                data: [...state.todo.data, ...action.payload],
                dataForSearch: state.todo.dataForSearch,

            }
        case 'ADD_SEARCH':
            return {
                data: state.todo.data,
                dataForSearch: [...action.payload],

            }

        case 'DELETE_TODO':
            if (state.todo.data.length === 1) {
                return {
                    data: [],
                    dataForSearch: state.todo.dataForSearch,
    
                }
            } else {
                return {
                    data: [...state.todo.data.slice(0,action.payload),...state.todo.data.slice(action.payload+1)],
                    dataForSearch: state.todo.dataForSearch,
    
                }
            }
            
        case 'CHEKED_TODO':
            const item = state.todo.data[action.payload]
            if ( item.checked === undefined) {
                item.checked = true
            } else {
                item.checked = !item.checked
            }
            return {
                data: [...state.todo.data.slice(0,action.payload),item,...state.todo.data.slice(action.payload+1)],
                dataForSearch: state.todo.dataForSearch,

            }
   
        default:
            return state.todo;

    }   

}

const reducer = (state, action) => {


    return {
        category: updateCategory(state,action),
        data: updateData(state,action),
        page: updatePage(state,action),
        modal: updateModal(state,action),
        filter: updateFilter(state,action),
        todo: updateToDo(state,action),
    }
}

export default reducer