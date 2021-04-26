import React, { Component } from 'react';

import * as ReactBootStrap from "react-bootstrap";

import { TabArray } from './tab-array';

import { TabBodySeeker } from './tab-body-seeker';
import { TabBodyEducation } from './tab-body-education';
import { TabBodyProfessional } from './tab-body-professional';
import { TabBodyLanguage } from './tab-body-language';
import { TabBodyExperience } from './tab-body-experience';
import { TabBodyAfflatus } from './tab-body-afflatus';
import { TabBodyComputer } from './tab-body-computer';
import { TabBodyFamily } from './tab-body-family';
import { TabBodyAbout } from './tab-body-about';
import { TabBodyOther } from './tab-body-other';

export class TabBody extends Component {

    render() {

        var result = TabArray.map((itemTab) => {
            var resultFunction = (
                <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                    <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                        default
                    </form>
                </ReactBootStrap.Tab.Pane>
            )
            switch (itemTab.eventKey) {
                case "#step-1": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodySeeker />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-2": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyEducation />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-3": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyProfessional />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-4": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyLanguage />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-5": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyExperience />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-6": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyAfflatus />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-7": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyComputer />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-8": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyFamily />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-9": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyAbout />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                case "#step-10": {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                <TabBodyOther />
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
                default: {
                    resultFunction = (
                        <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
                            <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
                                {itemTab.name}
                            </form>
                        </ReactBootStrap.Tab.Pane>
                    )
                } break;
            }
            return resultFunction
        })

        return result

        // return (
        //     TabArray.map((itemTab) =>
        //         <ReactBootStrap.Tab.Pane eventKey={itemTab.eventKey}>
        //             <form action={itemTab.action} method="post" enctype="multipart/form-data" data-name="Form Builder" data-model_name="">
        //                 {itemTab.name}
        //             </form>
        //         </ReactBootStrap.Tab.Pane>
        //     )
        // )

    }
}