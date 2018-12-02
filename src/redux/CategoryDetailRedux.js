export const initialState = {
  favorites: [],
}

export const onToggleFavorite = categoryId => ({
  type: "ON_TOGGLE_FAVORITE",
  categoryId,
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_TOGGLE_FAVORITE":
      return {
        ...state,
        favorites:
          state.favorites.indexOf(action.categoryId) > -1
            ? state.favorites.filter(favorite => favorite !== action.categoryId)
            : [...state.favorites, action.categoryId],
      }
    default:
      return state
  }
}