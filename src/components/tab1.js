
import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class Tab1 extends Component {

    render() {
        return (
            <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                <div role="tabpanel" class="tab-pane fade show active" aria-labelledby="id-step-1" id="step-1">
                    <form action="/json/seeker/workplace" method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="job.seeker">
                        <div class="card">
                            <div class="card-header">
                                <h2>1. Seeker</h2>
                            </div>
                            <div class="card-body">
                                <ReactBootStrap.ProgressBar>
                                    <ReactBootStrap.ProgressBar striped variant="success" now={35} key={1} animated now={45} />
                                </ReactBootStrap.ProgressBar>
                                <br />
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
                                    <button type="submit" class="btn btn-primary float-right">2<i class="fa fa-angle-double-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}