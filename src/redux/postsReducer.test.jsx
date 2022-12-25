import postsReducer, { addPost } from "./postsReducer";

test("new post text", () => {
  // test data
  let initialState = {
    data: [
      { id: 1, message: "Hi" },
      { id: 2, message: "I like it" },
      { id: 3, message: "Bad food" },
      { id: 4, message: "Good staf" },
      { id: 5, message: "50/50" },
    ],
  };
  let action = addPost("hihihihi");
  // action
  let newState = postsReducer(initialState, action);
  // expectation
  expect(newState.data[5].message).toBe("hihihihi");
});
