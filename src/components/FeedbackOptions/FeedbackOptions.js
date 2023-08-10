export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div>
            {options.map(el => {
               return <button key={el} onClick={() => onLeaveFeedback(el)}>{el}</button>
            })};
        </div>
    );
};