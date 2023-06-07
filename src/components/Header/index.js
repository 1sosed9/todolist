import React from "react";

import "./Header.css";
import { Row, Col } from "react-bootstrap";

function Header() {
    return (
        <Row>
            <Col>
                <div className="header">Todo list</div>
            </Col>
        </Row>
    )
}

export default Header;