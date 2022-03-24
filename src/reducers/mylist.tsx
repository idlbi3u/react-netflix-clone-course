interface ListAction {
    type: string;
    movie: any;
}

const myListReducer = (state: any[] = JSON.parse(localStorage.getItem('myList') || "[]"), action: ListAction) => 
{
    switch (action.type) {
        case "ADD_MOVIE":
            state = [...state, action.movie];
            localStorage.setItem("myList", JSON.stringify(state));
            return state;
        case "REMOVE_MOVIE":
            state = state.filter((movie: any) => movie.id !== action.movie.id);
            localStorage.setItem("myList", JSON.stringify(state));
            return state;
        
    }
    return state;
}

export default myListReducer;