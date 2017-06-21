import React from 'react';
import { connect } from 'react-redux';

const AgeSection = (props) => {
  return (
    <div style={{ fontSize: 20, margin: 30 }}>
      Age: { props.age }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    age: state.tree.age,
  };
}

export default connect(mapStateToProps, null)(AgeSection);
