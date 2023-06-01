import React, { Component } from 'react';

import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
// import Section from './Section';

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

                <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={feedbackTotal}
                    positivePercentage={positiveFeedbackPercentage}
                    />
        </>
    );
  }
}

export default Feedbacks;
