export const addMovieToList = (movie: any) => {
    return {
        type: "ADD_MOVIE",
        movie: movie,
    }
}

export const removeMovieFromList = (movie: any) => {
    return {
        type: "REMOVE_MOVIE",
        movie: movie,
    }
}