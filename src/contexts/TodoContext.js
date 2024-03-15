import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    //properties
    {
      id: 1,
      todo: "Todo mssg",
      completed: false,
    }, //similarly our further todos will get added in this array as an object
  ],

  addTodo: (todo) => {}, //only defining functions here, its functionality will be defined later in some other file
  //this func will get executed as soon as we will pass the todo defined above in todos array in he function

 updateTodo:(id,todo)=>{},
 deleteTodo:(id)=>{},
 toggleComplete:(id)=>{}

});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
