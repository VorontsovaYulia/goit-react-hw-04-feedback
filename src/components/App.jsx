import { Statistics } from "./Statistics/Statistics";
import { GlobalStyle } from "./GlobalStyle";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100)
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ?
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Number.isNaN(countPositiveFeedbackPercentage()) ? 0 : countPositiveFeedbackPercentage()} /> :
          <Notification message="There is no feedback" />}
      </Section>
      <GlobalStyle />
    </>
  );
};







