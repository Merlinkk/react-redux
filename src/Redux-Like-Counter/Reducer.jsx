export default function reducer(state, action){
    switch (action.type){
        case 'INCREMENT_LIKE':
            return {likes: state.likes + 1}
        case 'DECREMENT_LIKE':
            return {likes: state.likes - 1}
        default:
            return state
    }
}