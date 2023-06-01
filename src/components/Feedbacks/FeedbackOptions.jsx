import React from 'react';

import css from './Feedbacks.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={css.feedbackButtons}>
            {options.map((option) => (
                <li key={option}>
                    <button type="button" className={css.buttonOption} onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default FeedbackOptions;