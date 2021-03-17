export const getGamesCount = (state) => {
    return state.homePage.games?.length
}

export const getCurrentPage = (state) => {
    return state.homePage.currentPage
}

export const getGames = (page = 1) => (state) => {
    return state.homePage.games?.slice((page-1) * 10, (page-1) * 10 + 10)
}