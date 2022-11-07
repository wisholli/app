const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";

let initialState = {
  data: [
    // {
    //   id: 1,
    //   avatarUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU",
    //   followed: true,
    //   name: "Dmitry",
    //   location: {
    //     country: "Ukraine",
    //     city: "Kiev",
    //   },
    //   status: "I like play football",
    // },
    // {
    //   id: 2,
    //   avatarUrl:
    //     "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
    //   followed: false,
    //   name: "Artem",
    //   location: {
    //     country: "USA",
    //     city: "California",
    //   },
    //   status: "Are you ok?",
    // },
    // {
    //   id: 3,
    //   avatarUrl:
    //     "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    //   followed: true,
    //   name: "Tanya",
    //   location: {
    //     country: "Ukraine",
    //     city: "Sumy",
    //   },
    //   status: "I'm boss",
    // },
    // {
    //   id: 4,
    //   avatarUrl:
    //     "https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg",
    //   followed: true,
    //   name: "Lukas",
    //   location: {
    //     country: "Germany",
    //     city: "Berlin",
    //   },
    //   status: "I like hot girl",
    // },
  ],
};

const findUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        data: state.data.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, data: [...state.data, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => {
  return { type: SET_USERS, users };
};
export default findUsersReducer;
