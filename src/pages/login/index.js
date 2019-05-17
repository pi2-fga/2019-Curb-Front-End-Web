import React        from "react";
import PropTypes    from 'prop-types';
import './style.less'



export default class Login extends React.Component {
    _pageName = "login";

    // -------------------------------------------------------------------------//
    // React lifecycle functions
    // -------------------------------------------------------------------------//

    constructor(props) {
        super(props);

        this.state = {
            name: 'Iolanne',
        };
    }


    // -------------------------------------------------------------------------//
    // Requests
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Event Handlers
    // -------------------------------------------------------------------------//

/*     handleClick = () => {
        this.setState({
            name: this.state.name === 'Iolanne' ? 'Thiago' : 'Iolanne'
        }, () => {
            console.log(this.state.name)
        })
    } */

    // -------------------------------------------------------------------------//
    // Other functions
    // -------------------------------------------------------------------------//


    // -------------------------------------------------------------------------//
    // Rendering
    // -------------------------------------------------------------------------//

    render() {
        return (
            <div className	= {this._pageName} onClick = { () => { this.handleClick() } }>
				{this.state.name ? this.state.name : 'Sem nome' }
            </div>
        );
    }
}

// Component props and default prop values
Login.propTypes = {
    text         : PropTypes.string

};

Login.defaultProps = {
    text         : "Sample component"
};
