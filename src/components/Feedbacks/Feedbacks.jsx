import React, {Component} from 'react';

import css from './Feedbacks.module.css';
// import FeedbackOptions from './FeedbackOptions';

class Feedbacks extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
        total: this.props.good + this.props.neutral + this.props.bad,
    };

    handleGoodFeedback = () => {
        this.setState((previousValue) => {
            return {
                good: previousValue.good + 1,
            }
        }, this.countTotalFeedback
        );
    }

    handleNeutralFeedback = () => {
        this.setState((previousValue) => {
            return {
                neutral: previousValue.neutral + 1,
            }
        }, this.countTotalFeedback
        );
    }

    handleBadFeedback = () => {
        this.setState((previousValue) => {
            return {
                bad: previousValue.bad + 1,
            }
        }, this.countTotalFeedback
        );
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        const feedbackTotal = good + neutral + bad;
        this.setState({
            total: feedbackTotal
        });
    }

    countPositiveFeedbackPercentage() {
        const { good, total } = this.state;
        const positiveFeedbackPercentage = total === 0 ? 0 : ((good / total) * 100).toFixed(0);
        return positiveFeedbackPercentage;
    }

    render() {
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                {/* <FeedbackOptions
                    options={{ good, neutral, bad }}
                    onLeaveFeedback={{
                        onGoodFeedback: this.handleGoodFeedback,
                        onNeutralFeedback: this.handleNeutralFeedback,
                        onBadFeedback: this.handleBadFeedback}}
                /> */}

                <div className={css.containerButtons}>
                    <p className={css.description}>Please leave feedback</p>
                        <ul className={css.feedbackButtons}>
                            <li>
                                <button type="button" onClick={this.handleGoodFeedback}>Good</button>
                            </li>
                            <li>
                                <button type="button" onClick={this.handleNeutralFeedback}>Neutral</button>
                            </li>
                            <li>
                                <button type="button" onClick={this.handleBadFeedback}>Bad</button>
                            </li>
                        </ul>
                </div>

                <p className={css.description}>Statistics</p>
                <ul className={css.feedbackValues}>
                    <li>
                        <span className={css.good}>Good: {this.state.good}</span>
                    </li>
                    <li>
                        <span className={css.neutral}>Neutral: {this.state.neutral}</span>
                    </li>
                    <li>
                        <span className={css.bad}>Bad: {this.state.bad}</span>
                    </li>
                    <li>
                        <span className={css.feedbackTotal}>Total: {this.state.total}</span>
                    </li>
                    <li>
                        {this.state.total === 0 ? (
                            <span className={css.positiveFeedbacks}>Positive feedback: 0%</span>)
                            :
                            (<span className={css.positiveFeedbacks}>Positive feedback: {positiveFeedbackPercentage}%</span>
                        )}
                    </li>
                </ul>
            </>
        )
    }
}

export default Feedbacks;