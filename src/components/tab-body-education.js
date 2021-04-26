import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class TabBodyEducation extends Component {

    render() {

        return (
            <form class="" action="">
                <div class="card">
                    <div class="card-header">
                        <h2>2. Education</h2>
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
                                    <th>University</th>
                                    <th scope="col" minWidth="200">Major</th>
                                    <th scope="col" minWidth="200">Start date</th>
                                    <th scope="col">End date</th>
                                    <th scope="col">Degree</th>
                                    <th scope="col">Certificate</th>
                                    <th scope="col">GPA</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>МУБИС</td>
                                    <td>Нягтлан</td>
                                    <td>2016</td>
                                    <td>2020</td>
                                    <td>Бакалавр</td>
                                    <td>T20120382</td>
                                    <td>3.2</td>
                                    <td><button type="button" class="btn btn-danger">&times;</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="hidden" name="seeker" value="1" />
                                        <input type="text" class="form-control" name="university" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="major" />
                                    </td>
                                    <td>
                                        <input type="date" class="form-control" name="start_date" />
                                    </td>
                                    <td>
                                        <input type="date" class="form-control" name="end_date" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="degree" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="certificate" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="gpa" />
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger">&times;</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="8">
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