import React from 'react';
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import Map from '../../components/Map/Map';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Landing.css';

export default class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            disclaimerAccepted: false,
            loggedIn: false
        }
    }

    handleEnterClick = () => {
        this.setState({ disclaimerAccepted: true });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.disclaimerAccepted ?
                    (<div className='Landing-Container'>
                        <NavBar />
                            <div className="content-container">
                                <h1 className="header">Landing Page</h1>
                                <Map />
                            </div>
                        <Footer />
                    </div>) :
                    (<Disclaimer
                        handleEnterClick={this.handleEnterClick}
                    />)
                }
            </React.Fragment>
        );
    }
}