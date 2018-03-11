
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import styles from "./styles/HeaderStyles";

class Header extends Component {
  render() {
    if (this.props.children.length > 3) {
      throw new Error("Can not add more than 3 childrens");
    }
    return (
      <View
        style={[
          styles.headerContainer,
          { backgroundColor: this.props.backgroundColor }
        ]}
      >
        {this.props.children}
      </View>
    );
  }
}

Header.propTypes = {
  backgroundColor: PropTypes.string
};

Header.defaultProps = {
  backgroundColor: "black"
};

class LeftHeaderElem extends Component {
  render() {
    if (this.props.children.length > 3) {
      throw new Error("Can not add more than 3 childrens");
    }
    return <View style={styles.leftContainer}>{this.props.children}</View>;
  }
}

class CenterHeaderElem extends Component {
  render() {
    if (this.props.children > 1) {
      throw new Error("Can not add more than 1 childrens");
    }
    return <View style={styles.centerContainer}>{this.props.children}</View>;
  }
}

class RightHeaderElem extends Component {
  render() {
    if (this.props.children > 3) {
      throw new Error("Can not add more than 3 childrens");
    }
    return <View style={styles.rightContainer}>{this.props.children}</View>;
  }
}

Header.LeftHeaderElem = LeftHeaderElem;
Header.CenterHeaderElem = CenterHeaderElem;
Header.RightHeaderElem = RightHeaderElem;

export default Header;

