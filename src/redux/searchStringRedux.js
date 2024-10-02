export const updateSearchString = (payload) => ({type: UPDATE_SEARCH, payload});

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCH = createActionName('UPDATE_SEARCH');

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case UPDATE_SEARCH:
        return action.payload
      default:
        return statePart;
    }
  }

export default searchStringReducer;