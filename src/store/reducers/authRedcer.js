const authState = {
  user: null,
  isAuth: false,
};

export default (state = authState, actions) => {
  const { type } = actions;

  switch (type) {
    default:
      return state;
  }
};
