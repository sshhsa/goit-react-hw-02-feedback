import React from 'react';

import css from './Feedbacks.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className={css.containerButtons}>
            <p className={css.description}>Please leave feedback</p>
            <ul className={css.feedbackButtons}>
                {options.map((option) => (
                    <li key={option}>
                        <button type="button" onClick={() => onLeaveFeedback(option)}>
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeedbackOptions;