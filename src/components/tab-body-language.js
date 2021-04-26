import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class TabBodyLanguage extends Component {

    render() {

        return (
            <form class="" action="">
                <div class="card">
                    <div class="card-header">
                        <h2>4. Language</h2>
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Understand</th>
                                    <th scope="col">Speak</th>
                                    <th scope="col">Read</th>
                                    <th scope="col">Write</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Солонго</td>
                                    <td>Дунд</td>
                                    <td>Сайн</td>
                                    <td>Дунд</td>
                                    <td>Дунд</td>
                                    <td><button type="button" class="btn btn-danger">&times;</button></td>
                                </tr>
                                <tr>
                                    <td>
                                        <input type="hidden" name="seeker" value="1" />
                                        <input type="text" class="form-control" name="name" />
                                    </td>
                                    <td>
                                        <input type="range" class="form-control-range" name="understand" />
                                    </td>
                                    <td>
                                        <input type="range" class="form-control-range" name="speak" />
                                    </td>
                                    <td>
                                        <input type="range" class="form-control-range" name="read_ability" />
                                    </td>
                                    <td>
                                        <input type="range" class="form-control-range" name="write_ability" />
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger">&times;</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="6">
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