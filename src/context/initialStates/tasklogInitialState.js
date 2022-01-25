const tasklogInitialState = {
  location: {},
  startAt: '',
  taskLog: [],
  cleaningTypeCount: {
    daily: 0,
    thorough: 0,
  },

  loading: false,
  error: null,
};

export default tasklogInitialState;
