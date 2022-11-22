const initialState = {
  user: null,
  // selectedProfileId: null,
  // userProfile: null,
  // brandAppIds: [],
  // brandAppDictionary: {},
  // brandAppNetworkDictionary: {},
  // networkProjectMap: {},
  // organizationIds: [],
  // organizationDictionary: {},
  // profileIds: [],
  // profileDictionary: {},
  // createSubscription: null,
  // subscriptionIds: [],
  // subscriptionDictionary: {},
  loggedIn: localStorage.getItem("token") ? true : false,
  firstAuthValidationDone: false,
  redirect: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "AddAuth":
      // console.log(' set auth state called',action)
      return {
        ...state,
        ...action.payload,
      };

    case "SET_AUTH_USER":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
      };

    case "REMOVE_AUTH_USER":
      return initialState;

    case "SET_FIRST_AUTH_STATE":
      return {
        ...state,
        user: action.user,
        loggedIn: action.loggedIn,
        firstAuthValidationDone: true,
      };
    default:
      return state;
  }
};
