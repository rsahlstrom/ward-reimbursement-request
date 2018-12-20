import React from 'react';

const ExpenseTable = (props) => {
  let rows = [];
  for (let rowNum = 0; rowNum < props.rows; rowNum++) {
    let alt = (rowNum % 2 === 0) ? '' : 'receipt--alt'
    rows.push(
      <tr className={`receipt ${alt}`} key={`row${rowNum}`}>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    );
  }

  return (
    <table className="receipts">
      <thead>
        <tr>
          <th className="receipts__vendor">Who was paid?</th>
          <th className="receipts__total">What's the total on the receipt?</th>
          <th className="receipts__reimbursement">How much should be reimbursed?</th>
          <th className="receipts__tax">How much of that is tax?</th>
          <th className="receipts__pretax">What's the amount minus the tax?</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th colSpan="2" className="receipts__totals">What's the sum of the values in each column?</th>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ExpenseTable;
