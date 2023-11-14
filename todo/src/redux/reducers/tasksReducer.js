import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  tasks: [],
  filter: 'all',
  search: '',
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case actionTypes.TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case actionTypes.SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case actionTypes.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default tasksReducer;
