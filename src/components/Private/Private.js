import React from "react";
import { getUserInfo } from "./../../ducks/users";
import { connect } from "react-redux";

class Private extends React.Component {
  componentDidMount() {
    this.props.getUserInfo();
  }
  bankBalance() {
    return "$" + Math.floor((Math.random() *1000) * 1000) + ".00";
  }

  render() {
    const { user } = this.props;
    const userDataJSX = user.display_name ? (
      <div>
        <img src={user.img} />
        <p>Account Holder: {user.display_name}</p>
        <p>Account ID: {user.auth_id}</p>
        <p>Balance: {this.bankBalance()}</p>
        <a href="http://localhost:3002/auth/logout">
          <button>Logout</button>
        </a>
      </div>
    ) : (
      <p>Re-Directing...</p>
    );

    return (
      <div>
        <h1>Community Bank</h1>
        <hr />
        <h4>Account Information:</h4>
        {userDataJSX}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUserInfo })(Private);
