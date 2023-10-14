import React, {Component} from 'react';

class Button extends Component {
    render()
    {
        return (
            <button id="toggle" className={this.props.isActive ? 'button hide' : 'button'} onClick={this.props.showForm}>
                Schrijf een review
            </button>
        );
    }
}

export default Button;
