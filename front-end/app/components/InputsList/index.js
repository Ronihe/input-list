import React from 'react';
import PropTypes from 'prop-types';
import Table from 'rc-table';

import List from '../List';
import LoadingIndicator from '../LoadingIndicator';

function InputsList({ loading, error, inputs }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <p>Something went wrong, please try again! </p>
    );
    return <List component={ErrorComponent} />;
  }

  if (inputs !== false) {
    const modifiedInputs = inputs.map(input => {
      // eslint-disable-next-line prefer-destructuring
      const styledDate = input.date_posted.split('T')[0];
      // eslint-disable-next-line no-param-reassign
      input.date_posted = styledDate;
      return input;
    });

    const columns = [
      {
        title: 'Posting_Date',
        dataIndex: 'date_posted',
        key: 'date',
        width: 1000,
      },
      {
        title: 'Input',
        dataIndex: 'input',
        key: 'input',
        width: 1500,
      },
    ];
    return <Table columns={columns} data={modifiedInputs} rowKey="id" />;
  }

  return null;
}

InputsList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  inputs: PropTypes.any,
};

export default InputsList;
