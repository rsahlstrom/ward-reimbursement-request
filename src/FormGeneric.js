import React, { Component } from 'react';
import BlankFill from './BlankFill';
import BlankFills from './BlankFills';
import ExpenseTable from './ExpenseTable';
import CheckboxQuestion from './CheckboxQuestion';
import Step from './Step';
import QRCode from 'qrcode.react';
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
            <BlankFill type="half">Who should be reimbursed?</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="whole">How would you explain the purpose of these expenses to a Church auditor?</BlankFill>
          </BlankFills>

          <BlankFills>
            <BlankFill type="half" spaceAfter={true}>What auxiliary is responsible for the expenses? (One auxiliary per form)</BlankFill>
            <BlankFill type="half">What auxiliary subcategory should be charged?</BlankFill>
          </BlankFills>

          <br className="clearFix" />
        </section>

        <Step number={2} style={{ marginBottom: '14px' }} lines={2}>
          Complete the table and then attach the <em className="emphasize">itemized receipts</em> to the area indicated above.<br />
          <span className="step__extraLine">Credit card receipts are <em className="emphasize">not acceptable</em>.</span>
        </Step>

        <ExpenseTable rows={8} />

        <Step number={3}>
          Specify how you would like to receive your reimbursement.
        </Step>

        <section className="processingTime" style={{ marginBottom: '24px' }}>
          <CheckboxQuestion>
            Electronic transfer (<strong>preferred</strong>). Scan QR Code or visit https://lds.org/donations/#/settings to setup.
            <QRCode value="https://lds.org/donations/#/settings" size={80} style={{"float": "right", "position": "relative", "top": "-20px"}} />
          </CheckboxQuestion>
          <CheckboxQuestion>Printed check. Normal processing time is one to two weeks.</CheckboxQuestion>
        </section>

        <Step number={4}>
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

        <Step number={5}>
          Hand request to a financial clerk for further processing.
        </Step>
      </React.Fragment>
    );
  }
}

export default App;
