import React, { Component } from 'react';
import BlankFill from './BlankFill';
import BlankFills from './BlankFills';
import ExpenseTable from './ExpenseTable';
import CheckboxQuestion from './CheckboxQuestion';
import Step from './Step';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="stapleArea">Staple receipts to back here</p>

        <header className="pageTitle">
          <h1>Reimbursement Request for Eastlake 7th Ward</h1>
        </header>

        <Step number={1}>
          Answer the following questions.
        </Step>

        <section className="info">
          <BlankFills>
            <BlankFill type="half" spaceAfter={true}>Who is filling out this form?</BlankFill>
            <BlankFill type="half">Who should be reimbursed</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="whole">How would you explain the purpose of these expenses to a Church auditor?</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="half" spaceAfter={true}>What auxiliary is responsible for the expenses?</BlankFill>
            <BlankFill type="half">What auxiliary subcategory should be charged?</BlankFill>
          </BlankFills>

          <br className="clearFix" />
        </section>

        <Step number={2} style={{marginBottom: '14px'}}>
          Complete the table and then attach the <em className="emphasize">itemized receipts</em> to the area indicated above.
        </Step>

        <ExpenseTable rows={6} />

        <Step number={3}>
          Sign your name and obtain your auxiliary leader's signature.
        </Step>

        <section className="signatures signatures--group1">
          <BlankFills>
            <BlankFill type="twoThird" spaceAfter={true}>Requester's Signature</BlankFill>
            <BlankFill type="oneThird">Date</BlankFill>
          </BlankFills>
          <BlankFills>
            <BlankFill type="twoThird" spaceAfter={true}>Auxiliary Leader's Signature</BlankFill>
            <BlankFill type="oneThird">Date</BlankFill>
          </BlankFills>
        </section>

        <Step number={4}>
          Specify the time frame in which you need your reimbursement
        </Step>

        <section className="processingTime">
          <CheckboxQuestion>This is urgent. I need this reimbursement within the next 72 hours.</CheckboxQuestion>
          <CheckboxQuestion>I can wait the normal one to two weeks processing time.</CheckboxQuestion>
        </section>

        <Step number={5}>
          Hand request to a financial clerk for further processing.
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
