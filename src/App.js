import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { useState } from 'react';

import './App.css';
import { Container } from 'react-bootstrap';

function App() {

    const [todo, setTodo] = useState([
        {
            id: 1,
            title: 'first todo',
            status: true
        },
        {
            id: 2,
            title: 'second todo',
            status: true
        },
        {
            id: 3,
            title: 'third todo',
            status: false
        },
        
    ])

    return (
        <Container>
            <Header></Header>
            <AddTodo setTodo={setTodo} todo={todo}></AddTodo>
            <TodoList todo={todo} setTodo={setTodo}></TodoList>
        </Container>
    );
}

export default App;
