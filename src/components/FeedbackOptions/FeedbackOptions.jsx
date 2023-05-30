import React from 'react';

import css from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
    static defaultProps = {
        initialValue: 0,
    }

    state = {
        value: this.props.initialValue
    };

    handleIncrement = () => {
        console.log('Added on 1');

        this.setState((previousValue) => {
            return {
                value: previousValue.value + 1,
            }
        });
    }

    handleDecrement = () => {
        console.log('Removed on 1');

        this.setState((previousValue) => {
            return {
                value: previousValue.value - 1,
            }
        });
    }

    render() {
        return (
            <div className={css.container}>
                <span className={css.value}>{this.state.value}</span>

                <div className={css.containerButtons}>
                    <button type="button" onClick={this.handleIncrement}>Add 1</button>
                    <button type="button" onClick={this.handleDecrement}>Remove 1</button>
                </div>
            </div>
        )
    }
}

export default FeedbackOptions;