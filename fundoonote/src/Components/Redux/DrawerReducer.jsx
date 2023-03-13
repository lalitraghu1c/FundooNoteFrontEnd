const initalDrawerState = {
    label: 'Keep'
}
export const DrawerReducer = (state = initalDrawerState, action) => {
    console.log("Action coming in Reducer", action)
    switch (action.type) {
        case "Notes":
            return { ...state, title: "Keep" };
        case "Remainder":
            return { ...state, title: "Remainder" };
        case "Edit":
            return { ...state, title: "Edit" };
        case "Archive":
            return { ...state, title: "Archive" };
        case "Trash":
            return { ...state, title: "Trash" };
        default:
            return { ...state, title: "Keep" };
    }
}