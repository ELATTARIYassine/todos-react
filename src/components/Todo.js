import React from 'react';

const Todo = ({todo, setTodos, todos}) => {
    
    const deleteHandler = () => {
        console.log(todos);
        console.log(todo);
        setTodos(todos.filter(item => item.id !== todo.id));
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }
    return (
        <div className={todo.completed ? 'todo completed' : 'todo'}>
            <li className="todo-item">{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;