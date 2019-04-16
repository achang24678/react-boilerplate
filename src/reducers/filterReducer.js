

const filterDefaultState = {
    title: '',
    searchby: 'title' // by defrault set the option to title
}


export default (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TITLE_FILTER':
            return {
                ...state,
                title: action.title
            }
        case 'SET_SEARCHBY_TITLE':
            return {
                ...state,
                searchby: 'title'
            }
        case 'SET_SEARCHBY_AUTHOR':
            return {
                ...state,
                searchby: 'author'
            }
        default:
            return state;
    }
}