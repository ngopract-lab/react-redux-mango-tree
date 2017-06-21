import React from 'react';
import { connect } from 'react-redux';

import { ubahNamaAction } from '../actions';

const UserInfo = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        user name: { props.person.name }
      </p>
      <p>
        user email: { props.person.email }
      </p>
      <div>
        <input
          type="text"
          placeholder="ubah namamu disini!"
          onChange={(event) => props.ubahNama(event.target.value)}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    person: state.person,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    ubahNama: (newName) => dispatch(ubahNamaAction(newName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
