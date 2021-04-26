import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class TabBodyOther extends Component {

    render() {

        return (
            <div class="card">
                <div class="card-header">
                    <h2>10. Other</h2>
                </div>
                <div class="card-body">
                    <ReactBootStrap.ProgressBar>
                        <ReactBootStrap.ProgressBar striped variant="success" now={35} key={1} animated now={45} />
                    </ReactBootStrap.ProgressBar><br />
                    <div class="alert alert-warning alert-dismissible fade show mb-4" role="alert">
                        <h4 class="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example
                        text
                        is going to run a bit longer so that you can see how spacing within an alert
                        works with this kind of content.
                                            </p>
                        <hr />
                        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep
                        things
                        nice and tidy.
                                            </p>
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="false">&times;</span>
                        </button>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-warning float-left"><i class="fa fa-angle-double-left"></i> 1</button>
                    </div>
                </div>
            </div>
        )
    }
}