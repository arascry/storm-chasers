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
                        <h1>Landing Page</h1>
                        <Map />
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