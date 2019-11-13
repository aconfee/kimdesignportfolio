import React, { Component } from 'react';
import './projectHeader.component.css';

class ProjectHeader extends Component {

    constructor(props) {
        super(props);

        this.state = { showBackground: false };
      }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll = (event) => {    
        this.setState({
          showBackground: window.scrollY > 20
        });
    };

    render() {
        return (
            <div id='project-header-container' style={ {backgroundColor: this.state.showBackground ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"} }>
                <div id="home">
                    <a href="/">
                        <img src="https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Back button." />
                    </a>
                </div>
                <div></div>
                <div className="link-container">
                    <div>
                        <a href="/">
                            <div>WORK</div>
                        </a>
                    </div>
                    <div>
                        <a href="/contact">
                            <div>CONTACT</div>
                        </a>
                    </div>
                    <div>
                        <a href="http://bit.ly/2oGL1Ru">
                            <div>RESUME</div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
};

export default ProjectHeader;
