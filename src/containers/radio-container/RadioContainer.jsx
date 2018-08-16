import React, { Component } from 'react';

import RadioComponent from './../../components/radio/RadioComponent.jsx';
import DuplicateRadioComponent from './../../components/duplicate-radio/DuplicateRadioComponent.jsx';

class RadioContainer extends Component {

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-12">
                        <RadioComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h2>Duplicating state in child component</h2>
                        <div className="row">
                            <div className="col-md-12">
                                <DuplicateRadioComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RadioContainer;