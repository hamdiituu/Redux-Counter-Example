import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { sayiArt, sayiAzalt } from "../redux/actions";
class SayiArt extends React.Component {
  render() {
    return (
      <div style={{ flexDirection: "row" }}>
        <input
          type="button"
          onClick={e => {
            this.props.dispatch(sayiArt());
          }}
          value="Bir Arttır!"
        />

        <input
          type="button"
          onClick={e => {
            this.props.dispatch(sayiAzalt());
          }}
          value="Bir Azalt!"
        />
      </div>
    );
  }
}

function mapDispacthToProps(dispatch) {
  return {
    action: bindActionCreators(sayiArt, sayiAzalt, dispatch)
  };
}

export default connect(mapDispacthToProps)(SayiArt);
