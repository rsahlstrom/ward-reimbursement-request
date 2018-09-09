import React, { Component } from 'react';
import BlankFill from './BlankFill';
import BlankFills from './BlankFills';
import CheckboxQuestion from './CheckboxQuestion';
import Step from './Step';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="stapleArea">Staple receipts to back here</p>

        <header className="pageTitle">
          <h1>Fast Offering Request for Eastlake 7th Ward</h1>
        </header>

        <Step number={1}>
          Answer the following questions.
        </Step>

        <section className="info">
          <BlankFills>
            <BlankFill type="half" spaceAfter={true}>Who is receiving fast offering assistance?</BlankFill>
            <BlankFill type="half">Who is filling out this form?</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="whole">How would you explain the purpose of this expense to a Church auditor?</BlankFill>
          </BlankFills>

          <br className="clearFix" />
        </section>

        <Step number={2}>
          What fast offering subcategory should the expense use?
        </Step>

        <section className="fastOfferingCategories">
          <CheckboxQuestion>Food</CheckboxQuestion>
          <CheckboxQuestion>Housing</CheckboxQuestion>
          <CheckboxQuestion>Medical</CheckboxQuestion>
          <CheckboxQuestion>Other</CheckboxQuestion>
          <CheckboxQuestion>Utilities</CheckboxQuestion>
        </section>

        <Step number={3}>
          Explain the expense being paid and then attach the <em className="emphasize">itemized receipts</em> to the area indicated above.
        </Step>

        <section className="info">
          <BlankFills>
            <BlankFill type="whole">Who should the check be made out to?</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="half" spaceAfter={true}>How much is the expense for?</BlankFill>
            <BlankFill type="half">How much of that amount should be paid?</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="half" spaceAfter={true}>Is there an associated account number you can provide?</BlankFill>
            <BlankFill type="half">Is there an applicable date range for the expense?</BlankFill>
          </BlankFills>

          <br className="clearFix" />
        </section>

        <Step number={4}>
          Sign as the clerk and obtain the bishop's signature
        </Step>

        <section className="signatures">
          <BlankFills>
            <BlankFill type="twoThird" spaceAfter={true}>Clerk's Signature</BlankFill>
            <BlankFill type="oneThird">Date</BlankFill>
          </BlankFills>
          <BlankFills>
            <BlankFill type="twoThird" spaceAfter={true}>Bishop's Signature</BlankFill>
            <BlankFill type="oneThird">Date</BlankFill>
          </BlankFills>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
