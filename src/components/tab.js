//Doc urls
//https://react-bootstrap.github.io/components/tabs/ дотор CustomTabLayout гэсэн Tab ашигласан


import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

import { TabLeft } from './tab-left';

import { TabBody } from './tab-body';


export class Tab extends Component {

    render() {

        return (
            <ReactBootStrap.Tab.Container id="left-tabs-example">
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col sm={2} md={2} ld={2} xl={2}>
                        <ReactBootStrap.Nav variant="pills" className="flex-column list-group">
                            <TabLeft></TabLeft>
                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col sm={10} md={10} ld={10} xl={10}>
                        <ReactBootStrap.Tab.Content>
                            <TabBody />
                        </ReactBootStrap.Tab.Content>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Tab.Container>
        )
    }
}