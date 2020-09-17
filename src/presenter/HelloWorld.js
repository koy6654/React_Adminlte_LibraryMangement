import React from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';



export default function HelloWorldPresenter() {
    return (
        <Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="llo World">
            <Row>
                <Col xs={6}>
                    <Box title="My first box" type="primary" closable collapsable footer={<Button type="primary" text="primary Button" />}>
                        HiHiHi
                </Box>
                </Col>
                <Col xs={6}>
                    <Box title="Another box">
                        Content goes here
                </Box>
                </Col>
            </Row>

            <div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    oiewjriowejtoijwriotjiroejtioerjtjoerjtoierjitoertoierjitojeroit
            </div>

        </Content>
    );

}



