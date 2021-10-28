import React from "react";

import { editUser } from "../actions/action";

import { connect } from 'react-redux';

class User extends React.Component {
    constructor(props){
        super(props);
    }

    editUser = (userName, event) =>   {
        var newName =  event.target.value;
        var action = editUser({
            name: newName
          });
        this.props.dispatch(action);
        console.log(this.props.user);
      }

    render(){
        const user = this.props.user;
        console.log(user);
        return (<div>
            <input type="text" onChange={this.editUser.bind(null, user.name)} value={user.name} />
        </div>)
    }
}

const mapStateToProps = function(state) {
    console.log(state)
    return {
      user: state.user
    }
  }

  export default connect(mapStateToProps)(User);