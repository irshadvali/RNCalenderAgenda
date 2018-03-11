import React, { Component } from "react";
import usernameImg from "../../images/box.png";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../styles/hostListStyles";
import {
  ListView,
  Image,
  Alert,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import {
  ListItem,
  Text,
  Avatar,
  Badge,
  ThemeManager,
  AvatarHelper
} from "react-native-ui-lib"; //eslint-disable-line

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

var guest_list_string;
class HostList extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    guest_list_string = [];

    props.list.userList.forEach(function(list, index) {
      var guest_data = {};
      guest_data["userName"] = list.name;
      guest_data["email"] = list.name + "@xelpmoc.in";
      guest_data["key"] = index;
      guest_list_string.push(guest_data);
    });

    this.state = {
      dataSource: ds.cloneWithRows(guest_list_string),
      hostName: props.list.name,
      listcount: []
    };
  }

  renderRow(row, id) {
    const color = row.isSelected;

    const initials = AvatarHelper.getInitials(row.userName);

    return (
      <TouchableWithoutFeedback>
        <View style={styles.slideInputWrapper}>
          <View style={styles.circleView}>
            <Text style={{ color: "white" }}> {initials} </Text>
          </View>
          <View style={styles.listItemText}>
            <Text style={styles.nameLabel}>{row.userName}</Text>
            <Text style={styles.emailLabel}>{row.email}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  //to rempove list devider for the last item
  _renderSeparator(sectionID, rowID) {
    let isLastRow = rowID == guest_list_string.length - 1;
    if (isLastRow) {
      return null;
    }
    return <View key={`${sectionID}-${rowID}`} style={styles.listDivider} />;
  }

  render() {
    return (
      <View style={styles.listViewContainer}>
        <View style={styles.page}>
          <View style={styles.subPage}>
            <Text style={styles.hostTitle}>Hosted By</Text>
            <Text style={styles.hostName}>{this.state.hostName}</Text>
          </View>
        </View>
        <ListView
          renderSeparator={this._renderSeparator.bind(this)}
          dataSource={this.state.dataSource}
          renderRow={(row, sectionId, rowId) => this.renderRow(row, rowId)}
        />
      </View>
    );
  }
}

export default HostList;
