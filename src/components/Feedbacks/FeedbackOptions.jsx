// import React, {Component} from 'react';

// import css from './Feedbacks.module.css';

// class FeedbackOptions extends Component {
//     render() {
//         const { options, onLeaveFeedback } = this.props;
//         const { onGoodFeedback, onNeutralFeedback, onBadFeedback } = onLeaveFeedback;
//         return (
//             <div className={css.containerButtons}>
//                 <p className={css.description}>Please leave feedback</p>
//                     <ul className={css.feedbackButtons}>
//                         <li>
//                             <button type="button" onClick={onGoodFeedback}>Good</button>
//                         </li>
//                         <li>
//                             <button type="button" onClick={onBadFeedback}>Neutral</button>
//                         </li>
//                         <li>
//                             <button type="button" onClick={onNeutralFeedback}>Bad</button>
//                         </li>
//                     </ul>
//             </div>
//         )
//     }
// }

// export default FeedbackOptions;