import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

import { TabArray } from './tab-array';

export class TabLeft extends Component {

    render() {

        return (
            TabArray.map((itemTab) =>
                <ReactBootStrap.Nav.Item>
                    <ReactBootStrap.Nav.Link className="list-group-item list-group-item-action" eventKey={itemTab.eventKey}>{itemTab.name}</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav.Item>
            )
        )
    }
}