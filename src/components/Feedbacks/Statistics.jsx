import React from 'react';

import css from './Feedbacks.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className={css.containerValues}>
            <p className={css.description}>Statistics</p>
            <ul className={css.feedbackValues}>
                <li>
                    <span className={css.good}>Good: {good}</span>
                </li>
                <li>
                    <span className={css.neutral}>Neutral: {neutral}</span>
                </li>
                <li>
                    <span className={css.bad}>Bad: {bad}</span>
                </li>
                <li>
                    <span className={css.feedbackTotal}>Total: {total}</span>
                </li>
                <li>
                    <span className={css.positiveFeedbacks}>
                    Positive feedback: {positivePercentage}%
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Statistics;