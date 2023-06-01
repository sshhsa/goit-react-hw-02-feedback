import React, { Component } from 'react';
import css from './Feedbacks.module.css';
import FeedbackOptions from './FeedbackOptions';

class Feedbacks extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = (type) => {
    this.setState((previousValue) => {
      return {
        [type]: previousValue[type] + 1
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const feedbackTotal = good + neutral + bad;
    return feedbackTotal;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const feedbackTotal = this.countTotalFeedback();
    const positiveFeedbackPercentage =
      feedbackTotal === 0 ? 0 : ((good / feedbackTotal) * 100).toFixed(0);
    return positiveFeedbackPercentage;
  }

  render() {
    const feedbackTotal = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />

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
            <span className={css.feedbackTotal}>Total: {feedbackTotal}</span>
          </li>
          <li>
            <span className={css.positiveFeedbacks}>
              Positive feedback: {positiveFeedbackPercentage}%
            </span>
          </li>
        </ul>
      </>
    );
  }
}

export default Feedbacks;
