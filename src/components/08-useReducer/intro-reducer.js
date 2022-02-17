
const initialState = [{
    id:1,
    todo:'comprar pan',
    done: false
}];

const todoReducer = (state=initialState, action) => {
    if(action?.type == 'add'){
        return [...state, action.payload];
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "comer pan",
  done: false,
};

const addTodo = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer(todos, addTodo);

console.log(todos);