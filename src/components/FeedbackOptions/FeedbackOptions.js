export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
        <div>
            {Object.keys(options).map(el => {
               return <button key={el} onClick={() => onLeaveFeedback(el)}>{el}</button>
            })}
        </div>
    );
};