import React from "react";
import { connect } from "react-redux";
class Sayac extends React.Component {
  render() {
    return (
      <div>
        <h2> Sayaç Değeri : </h2>
        <h3>{this.props.sayac}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    sayac: state.sayacReducer
  };
}

export default connect(mapStateToProps)(Sayac);
