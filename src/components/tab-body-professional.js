import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class TabBodyProfessional extends Component {

    render() {

        return (
            <form class="" action="">
                <div class="card">
                    <div class="card-header">
                        <h2>3. Professional</h2>
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
                        <table class="table table-bordered table-striped">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Course</th>
                                    <th scope="col">Speciality</th>
                                    <th scope="col">Start date</th>
                                    <th scope="col">End date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Эхлэл академи</td>
                                    <td>Javascript</td>
                                    <td>2020-01-25</td>
                                    <td>2020-07-25</td>
                                    <td><button type="button" class="btn btn-danger">&times;</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="hidden" name="seeker" value="1" />
                                        <input type="text" class="form-control" name="course" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="specialty" />
                                    </td>
                                    <td>
                                        <input type="date" class="form-control" name="date_start" />
                                    </td>
                                    <td>
                                        <input type="date" class="form-control" name="date_end" />
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger">&times;</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <a href="#" class="card-link">Add line</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div class="card-footer">
                            <button type="button" class="btn btn-warning float-left"><i class="fa fa-angle-double-left"></i> 1</button>
                            <button type="submit" class="btn btn-primary float-right">2<i class="fa fa-angle-double-right"></i></button>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}