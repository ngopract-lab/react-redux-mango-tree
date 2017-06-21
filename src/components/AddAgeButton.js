import React from 'react';
import { connect } from 'react-redux';

import { tambahAction } from '../actions';

const AddAgeButton = (props) => {
  return (
    <button
      onClick={props.tambahUmur}
      style={{ padding: 20, fontSize: 20 }}>
      Tambah Umur
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    tambahUmur: () => dispatch(tambahAction()),
  };
}

export default connect(null, mapDispatchToProps)(AddAgeButton);
