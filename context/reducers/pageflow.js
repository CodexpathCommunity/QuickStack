export function pageflow(state, action) {
  switch (action.type) {
    case "SET_NAV":
      return { ...state, openNav: action.payload };
    default:
      return state;
  }
}
