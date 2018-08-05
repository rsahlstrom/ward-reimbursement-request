import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <p className="stapleArea">Staple receipts to back here</p>

        <header className="pageTitle">
          <h1>Reimbursement Request for Eastlake 7th Ward</h1>
        </header>

        <div className="step"><span className="step__number">1</span>Answer the following questions.</div>

        <section className="info">
          <div className="blankFillWrapper">
            <div className="blankFill blankFill--submitting blankFill--marginRight">
              <div className="blankFill__type">Who is filling out this form?</div>
            </div>
            <div className="blankFill blankFill--reimbursing">
              <div className="blankFill__type">Who should be reimbursed?</div>
            </div>
          </div>

          <div className="blankFillWrapper">
            <div className="blankFill blankFill--purpose">
              <div className="blankFill__type">How would you explain the purpose of these expenses to a Church auditor?</div>
            </div>
          </div>

          <div className="blankFillWrapper">
            <div className="blankFill blankFill--auxiliary blankFill--marginRight">
              <div className="blankFill__type">What auxiliary is responsible for the expenses?</div>
            </div>
            <div className="blankFill blankFill--subcategory">
              <div className="blankFill__type">What auxiliary subcategory should be charged?</div>
            </div>
          </div>
          <br className="clearFix" />
        </section>

        <div className="step" style={{marginBottom: '14px'}}><span className="step__number">2</span>Fill out the table correctly and then attach the <em className="emphasize">itemized receipts</em> to the area indicated above.</div>

        <table className="receipts">
          <thead>
            <tr>
              <th className="receipts__vendor">Where did the expense happen?</th>
              <th className="receipts__total">What's the total on the receipt?</th>
              <th className="receipts__reimbursement">How much should be reimbursed?</th>
              <th className="receipts__tax">How much of that is tax?</th>
              <th className="receipts__pretax">What's the amount minus that tax?</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th colspan="2" className="receipts__totals">What's the sum of the values in each column?</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
          <tbody>
            <tr className="receipt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt receipt--alt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt receipt--alt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt receipt--alt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="receipt receipt--alt">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>


        <div className="step"><span className="step__number">3</span>Sign your name and obtain your auxiliary leader's signature.</div>

        <section className="signatures signatures--group1">
          <div className="blankFillWrapper">
            <div className="blankFill blankFill--signature blankFill--marginRight">
              <div className="blankFill__type">Requester's Signature</div>
            </div>
            <div className="blankFill blankFill--date blankFill--marginRight">
              <div className="blankFill__type">Date</div>
            </div>
          </div>
          <div className="blankFillWrapper">
            <div className="blankFill blankFill--signature blankFill--marginRight">
              <div className="blankFill__type">Auxiliary Leader's Signature</div>
            </div>
            <div className="blankFill blankFill--date">
              <div className="blankFill__type">Date</div>
            </div>
          </div>
        </section>

        <div className="step"><span className="step__number">4</span>Hand request to a financial clerk for further processing.</div>

        <section className="signatures">
          <div className="blankFillWrapper">
            <div className="blankFill blankFill--signature blankFill--marginRight">
              <div className="blankFill__type">Clerk's Signature</div>
            </div>
            <div className="blankFill blankFill--date blankFill--marginRight">
              <div className="blankFill__type">Date</div>
            </div>
          </div>
          <div className="blankFillWrapper">
            <div className="blankFill blankFill--signature blankFill--marginRight">
              <div className="blankFill__type">Bishop's Signature</div>
            </div>
            <div className="blankFill blankFill--date">
              <div className="blankFill__type">Date</div>
            </div>
          </div>
        </section>

        <footer className="notes">
          <p className="note">*** Itemized receipts required. Credit card receipts and statements not acceptable. If you've lost your receipts, contact your clerk for instructions. ***</p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
