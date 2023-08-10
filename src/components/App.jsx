import { Statistics } from "./Statistics/Statistics";
import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
    
  handleClick = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad 
  };

  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good/this.countTotalFeedback())*100)
  };
    
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleClick}/>
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? 
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={Number.isNaN(this.countPositiveFeedbackPercentage()) ? 0 : this.countPositiveFeedbackPercentage()} /> :
          <Notification message="There is no feedback"/>}  
        </Section>
        <GlobalStyle />
      </>
    );
  };
};



