import React from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';



export default function HelloWorldPresenter2() {
    return (
        <Content title="This is Hello World V two">
            <Row>
                <Col xs={6}>
                    <Box title="My first box" type="primary" closable collapsable footer={<Button type="primary" text="primary Button" />}>
                        HelloWorld2 is Comming
                </Box>
                </Col>
                <Col xs={6}>
                    <Box title="Another box">
                        Content goes here
                </Box>
                </Col>
            </Row>
        </Content>
    );

}



