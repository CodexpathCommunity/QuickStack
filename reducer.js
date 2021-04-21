export const initialState = {
  openNav: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        openNav: action.navState,
      };

    default:
      return state;
  }
};

export default reducer;
