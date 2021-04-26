
import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class Breadcrumb extends Component {

    render() {
        const arrayBrCrLi = [
            {
                href: "#/home"
                , name: "Home"
            }
            , {
                href: "#/home/library"
                , name: "Library"
            }
            , {
                href: "#/home/library/data"
                , name: "Data"
            }
            , {
                href: "#/home/library/data/value"
                , name: "Value"
            }
        ];

        const BreadcrumbLi = (
            arrayBrCrLi.map((itemBrCrLi) =>
                <li class="breadcrumb-item">
                    <a href={itemBrCrLi.href}>
                        {itemBrCrLi.name}
                    </a>
                </li>
            )
        );

        var result = (
            <div className="mt-4">
                <ReactBootStrap.Nav aria-label="breadcrumb" class="mb-4">
                    <ol class="breadcrumb">
                        {BreadcrumbLi}
                    </ol>
                </ReactBootStrap.Nav>
            </div>
        )
        return result
    }
}