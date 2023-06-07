import React, { useEffect, useState } from "react";

import { Row, Col, Button, ButtonGroup } from "react-bootstrap";
import './TodoList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faTrash, faPen, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

function TodoList({ todo, setTodo }) {

    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [filtered, setFiltered] = useState(todo);

    useEffect(() => {
        setFiltered(todo)
    }, [todo]);

    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }

    function editTodo(id, title) {
        setEdit(id);
        setValue(title);
    }

    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        });
        setTodo(newTodo);
    }

    function saveTodo(id) {
        let newTodo = [...todo].map(item => {
            if (item.id === id) {
                item.title = value;
            }
            return item;
        })
        setTodo(newTodo);
        setEdit(null);
    }

    function todoFilter(status) {
        if (status === 'all') {
            setFiltered(todo);
        } else {
            let newTodo = [...todo].filter(item => item.status === status);
            setFiltered(newTodo);
        }
    }

    return (
        <div>
            <Row>
                <Col className="btnGroup">
                    <ButtonGroup  aria-label="Basic example" className="btns">
                        <Button onClick={() => todoFilter('all')}>Все</Button>
                        <Button onClick={() => todoFilter(true)}>Открытые</Button>
                        <Button onClick={() => todoFilter(false)}>Закрытые</Button>
                    </ButtonGroup>
                </Col>
            </Row>

            {
                filtered.map((item, i) => {
                    return (
                        <div key={item.id} className="listItems">
                            {
                                edit === item.id ?
                                    <div>
                                        <input value={value} onChange={(e) => setValue(e.target.value)} />
                                    </div>
                                    :
                                    <div className={!item.status ? 'close' : ''}>{item.title}</div>
                            }

                            {
                                edit === item.id ?
                                    <div>
                                        <Button size="sm" onClick={() => saveTodo(item.id)}><FontAwesomeIcon icon={faSave} /></Button>
                                    </div>
                                    :
                                    <div>
                                        <Button size="sm" onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></Button>
                                        <Button size="sm" className="btnOne" onClick={() => editTodo(item.id, item.title)}><FontAwesomeIcon icon={faPen} /></Button>
                                        <Button size="sm" className="btnOne" onClick={() => statusTodo(item.id)}>
                                            {
                                                item.status ? <FontAwesomeIcon icon={faLockOpen} /> : <FontAwesomeIcon icon={faLock} />
                                            }
                                        </Button>
                                    </div>
                            }
                        </div>
                    )
                })
            }
        </div >
    )
}

export default TodoList;