import React from 'react';
import Disclaimer from '../../components/Disclaimer/Disclaimer';

export default class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            disclaimerAccepted: false
        }
    }

    render() {
        return (
            <div>
                {this.state.disclaimerAccepted ?
                    (<div> Landing Page </div>) :
                    (<Disclaimer />)
                }
            </div>
        );
    }
}