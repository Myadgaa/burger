import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

export class TabBodyFamily extends Component {

    render() {

        return (
            <form class="" action="">
                <div class="card">
                    <div class="card-header">
                        <h2>8. Family</h2>
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
                                    <th scope="col">Familiar</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Organization</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Birthday</th>
                                    <th scope="col">Mobile</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="hidden" name="seeker" value="1" />
                                        <select class="custom-select form-control" name="familiar">
                                            <option value="grandfather">Grandfather</option>
                                            <option value="grandmother">Grandmother</option>
                                            <option value="father">Father</option>
                                            <option value="mother">Mother</option>
                                            <option value="brother">Brother</option>
                                            <option value="sister">Sister</option>
                                            <option value="younger_brother">Younger brother</option>
                                            <option value="younger_sister">Younger sister</option>
                                            <option value="husband">Husband</option>
                                            <option value="wife">Wife</option>
                                            <option value="boy_friend">Boy friend</option>
                                            <option value="girl_friend">Girl friend</option>
                                            <option value="friend">Friend</option>
                                            <option value="son">Son</option>
                                            <option value="daughter">Daughter</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="last_name" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="first_name" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="organization" />
                                    </td>
                                    <td>
                                        <input type="text" class="form-control" name="position" />
                                    </td>
                                    <td>
                                        <input type="date" class="form-control" name="birthday" />
                                    </td>
                                    <td>
                                        <input type="number" class="form-control" name="mobile" />
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