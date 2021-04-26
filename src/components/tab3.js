import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

import { BrowserRouter as Router, Link } from 'react-router-dom';


export class Tab extends Component {

    render() {

        const arrayTab = [
            {
                href: "#step-1"
                , name: "1. Seeker"
            }
            , {
                href: "#step-2"
                , name: "2. Education"
            }
            , {
                href: "#step-3"
                , name: "3. Professional"
            }
            , {
                href: "#step-4"
                , name: "4. Language"
            }
            , {
                href: "#step-5"
                , name: "5. Experience"
            }
            , {
                href: "#step-6"
                , name: "6. Afflatus"
            }
            , {
                href: "#step-7"
                , name: "7. Computer"
            }
            , {
                href: "#step-8"
                , name: "8. Family"
            }
            , {
                href: "#step-9"
                , name: "9. About"
            }
            , {
                href: "#step-10"
                , name: "10. Other"
            }
        ];

        const TabLeft = (
            arrayTab.map((itemTab) =>
                <a data-toggle="list" role="tab" class="list-group-item list-group-item-action" defaultActiveKey={itemTab.key} href={itemTab.href}>{itemTab.name}</a>
            )
        );

        const TabBody = (
            arrayTab.map((itemTab) =>
                <div role="tabpanel" class="tab-pane fade show active" aria-labelledby="id-step-1" id="step-1" key="#step-1">
                    <form action="/json/seeker/workplace" method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="job.seeker">
                        tab body ...
                    </form>
                </div>
            )
        );

        var result = (
            <div className="mt-4">
                <div class="row">
                    <div class="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                        <div class="list-group" id="list-tab" role="tablist">
                            {TabLeft}
                        </div>
                    </div>
                    <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
                        {TabBody}
                        <div role="tabpanel" class="tab-pane fade show active" aria-labelledby="id-step-1" id="step-1" key="#step-1">
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
                                        <div class="form-group row">
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="working-area">working area</label>
                                            <div class="input-group col-10 col-sm-10 col-xl-10 col-md-10 col-lg-10 col-form-label mb-3">
                                                <div class="input-group-prepend">
                                                    <label class="input-group-text" for="input-gender"><i class="fa fa-venus-mars icon"></i></label>
                                                </div>
                                                <select class="custom-select form-control is-valid" id="input-gender" name="working-area">
                                                    {/* <option t-foreach="workplace" t-as="item" t-att-value="item.id"><t t-esc="item.working_area" /></option> */}
                                                    <option value="менежир">Менежир</option>
                                                    <option value="ахлах_программист">Ахлах программист</option>
                                                    <option value="нягтлан_бодогч">Нягтлан бодогч</option>
                                                    <option value="вэб_хөгжүүлэгч">Вэб хөгжүүлэгч</option>
                                                    <option value="андройд_хөгжүүлэгч">Андройд хөгжүүлэгч</option>
                                                </select>
                                            </div>
                                            <div class="valid-feedback">good at</div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1"
                                                for="name-first">First name
                                            </label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="first-name"><i class="fa fa-user icon"></i></span>
                                                </div>
                                                <input type="text" class="form-control is-valid" id="name-first" name="name-first" placeholder="Өөрийн нэр"></input>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-last">Last name</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="last-name"><i class="fa fa-user icon"></i></span>
                                                </div>
                                                <input type="text" class="form-control is-valid" id="name-last" name="name-last" placeholder="Овог"></input>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-first">Sure name</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="sure-name"><i class="fa fa-user icon"></i></span>
                                                </div>
                                                <input type="text" class="form-control is-valid" id="name-sure" name="name-sure" placeholder="Ургийн овог"></input>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">Choose file</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">
                                                        <span class="oi oi-basket"></span><i class="fa fa-image icon"></i>
                                                    </span>
                                                </div>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="inputGroupFile1"></input>
                                                    <label class="custom-file-label" for="inputGroupFile1">Choose file</label>
                                                </div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">Province birth</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="province-birth"><i class="fa fa-calendar icon"></i></span>
                                                </div>
                                                <input type="text" class="form-control is-valid" id="birth-province" name="birth-province" placeholder=""></input>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">District birth</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="District-birth"><i class="fa fa-calendar icon"></i></span>
                                                </div>
                                                <input type="text" class="form-control is-valid" id="birth-District" name="birth-district" placeholder=""></input>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">Gender</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-3 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="input-gender"><i class="fa fa-venus-mars icon"></i></label>
                                                    </div>
                                                    <select class="custom-select form-control is-valid" id="input-gender" name="gender">
                                                        {/* <!--
                                                        <option selected="">Хүйс...</option>
                                                        --> */}
                                                        <option value="female">Female</option>
                                                        <option value="male">Male</option>
                                                    </select>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">Mobile</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-default"><i class="fa fa-phone icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" aria-label="Mobile" name="mobile" aria-describedby="inputGroup-sizing-default" placeholder="Утасны дугаараа оруулна уу.."></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">Address</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-address"><i class="fa fa-address-book-o icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" name="address" placeholder="Apartment, studio, or floor" aria-label="Address" aria-describedby="inputGroup-sizing-address"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="name-sure">Nationality</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-nationality"><i class="fa fa-flag icon"></i></span>
                                                    </div>
                                                    <select class="custom-select form-control is-valid" name="nationality">
                                                        <option value="халх">Халх</option>
                                                        <option value="казак">Казах</option>
                                                        <option value="буриад">Буриад</option>
                                                        <option value="дөрвөд">Дөрвөд</option>
                                                        <option value="буриад">Барга</option>
                                                        <option value="баяд">Баяд</option>
                                                        <option value="дархад">Дархад</option>
                                                        <option value="дарьганга">Дарьганга</option>
                                                        <option value="захчин">Захчин</option>
                                                        <option value="монгор">Монгор</option>
                                                        <option value="мянгад">Мянгад</option>
                                                        <option value="өөлд">Өөлд</option>
                                                        <option value="торгууд">Торгууд</option>
                                                        <option value="урианхай">Урианхай</option>
                                                        <option value="үзэмчин">Үзэмчин</option>
                                                        <option value="хамниган">Хамниган</option>
                                                        <option value="хотгойд">Хотгойд</option>
                                                        <option value="хотон">Хотон</option>
                                                        <option value="цахар">Цахар</option>
                                                        <option value="цаатан">Цаатан</option>
                                                    </select>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-addon">email</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-envelope icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" name="email" placeholder="Email" aria-label="Email" aria-describedby="basic-addon"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-contact">Contact name</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-contact name"><i class="fa fa-address-book-o icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" placeholder="contact name" name="contact-name" aria-label="contact name" aria-describedby="inputGroup-sizing-basic-contact"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-mobile">Contact mobile</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-contact mobile"><i class="fa fa-phone-square icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" placeholder="contact mobile" name="contact-mobile" aria-label="contact mobile" aria-describedby="inputGroup-sizing-contact mobile"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-marry">Marry</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-marry"><i class="fa fa-users icon"></i></span>
                                                    </div>
                                                    <input type="radio" class="form-control is-valid" name="marry" value="married" aria-label="marry" aria-describedby="inputGroup-sizing-marry"></input>
                                                    <input type="radio" class="form-control is-valid" name="marry" value="not_married" aria-label="marry" aria-describedby="inputGroup-sizing-marry"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-mobile">Military</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-check"></span>
                                                    </div>
                                                    <input type="checkbox" class="form-control is-valid" name="military" aria-label="check" aria-describedby="inputGroup-sizing-check"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-license">Driver license</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-4">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-contact license"><i class="fa fa-drivers-license-o icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" name="driver-license" aria-label="driver license" aria-describedby="inputGroup-sizing-contact name"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-license">Driver type</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="inputGroupSelect02"><i class="fa fa-car icon"></i></label>
                                                    </div>
                                                    <select class="custom-select from-control is-valid" id="inputGroupSelect02">
                                                        <option selected="">Choose...</option>
                                                        <option value="1">A</option>
                                                        <option value="2">B</option>
                                                    </select>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-license">Driver year</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-driver-year"><i class="fa fa-calendar icon"></i></span>
                                                    </div>
                                                    <input type="number" class="form-control is-valid" name="driver-year" aria-label="driver year" aria-describedby="inputGroup-sizing-contact year"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-mobile">Facebook</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="basic-addon3"><i class="fa fa-facebook icon"></i></span>
                                                    </div>
                                                    <input type="text" class="form-control is-valid" name="facebook" placeholder="@facebook.com" id="basic-url" aria-describedby="basic-addon3"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-mobile">Salary</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-salary"><i class="fa fa-money icon"></i></span>
                                                    </div>
                                                    <input type="number" class="form-control is-valid" name="salary" aria-label="salary" aria-describedby="inputGroup-sizing-salary"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-mobile">Salary want</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-salary-want"><i class="fa fa-money icon"></i></span>
                                                    </div>
                                                    <input type="number" class="form-control is-valid" name="salary-want" aria-label="salary-want" aria-describedby="inputGroup-sizing-salary-want"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1"
                                                for="basic-mobile">Work year
                                            </label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-salary-year"><i class="fa fa-calendar icon"></i></span>
                                                    </div>
                                                    <input type="number" class="form-control is-valid" name="work-year" aria-label="work-year" aria-describedby="inputGroup-sizing-work-year"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                            <label class="col-2 col-sm-2 col-xl-2 col-md-2 col-lg-2 col-form-label mb-1" for="basic-mobile">Check</label>
                                            <div class="col-10 col-sm-10 col-xl-10 mb-1 input-group">
                                                <div class="input-group mb-3">
                                                    <div class="input-gr oup-prepend">
                                                        <span class="input-group-text" id="inputGroup-sizing-check"></span>
                                                    </div>
                                                    <input type="checkbox" class="form-control is-valid" name="check" aria-label="check" aria-describedby="inputGroup-sizing-check"></input>
                                                </div>
                                                <div class="valid-feedback">good at</div>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            {/* <button type="button" class="btn btn-warning float-left"><i class="fa fa-angle-double-left"></i> 1</button> */}
                                            <button type="submit" class="btn btn-primary float-right">2<i class="fa fa-angle-double-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        return result
    }
}