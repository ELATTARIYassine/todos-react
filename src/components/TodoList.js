import React from 'react';
import Todo from './Todo';

const Todolist = ({todos, setTodos, filteredTodos}) => {
    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => {
                    return <Todo todos={todos} setTodos={setTodos} key={todo.id} todo={todo} />
                })}
            </ul>
        </div>
     );
}
 
export default Todolist;