import React from 'react';
import { Content, Row, Col, Box, Button } from 'adminlte-2-react';

export default function HomePresenter() {
    return (
        <Content title="HomePresenter" subTitle="This is HomePresenter to see" browserTitle="HomePresenter">
            <Row>
                <Col xs={6}>
                    <Box>
                        HomePresenter BoxOne
                    </Box>
                </Col>
                <Col xs={6}>
                    <Box>
                        HomePresenter BoxTwo
                    </Box>
                </Col>
            </Row>
        </Content>
    );
}