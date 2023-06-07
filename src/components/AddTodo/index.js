import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import { Row, Col, Button, Form } from "react-bootstrap";
import './AddTodoForm.css'

function AddTodo({ setTodo, todo }) {

    const [value, setValue] = useState('');

    function saveTodo() {
        if (value) {
            setTodo(
                [...todo, {
                    id: uuid(),
                    title: value,
                    status: true
                }]
            )
        }
        setValue("");
    }

    return (
        <Row>
            <Col className="addTodoForm">
                <Form.Control  type="text" placeholder="Добавьте заметку" value={value} onChange={(e) => setValue(e.target.value)} />
                <Button className="btnForm" onClick={saveTodo}>Добавить</Button>
            </Col>
        </Row>
    )
}

export default AddTodo;