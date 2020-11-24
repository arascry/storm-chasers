import React from 'react';
import Disclaimer from '../../components/Disclaimer/Disclaimer';
import Map from '../../components/Map/Map';
import MarkerInfo from '../../components/MarkerInfo/MarkerInfo';
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
                        <p id='Landing-Title'>STORM CHASE</p>
                        <div className='Map-Container'>
                            <Map />
                            <MarkerInfo />
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