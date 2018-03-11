import React, { Component, props } from "react";
import { StackNavigator, NavigationActions } from "react-navigation";
import HostList from "./HostList";
import moment from "moment";
import styles from "../../styles/detailScreenStyles";
import ShadowView from "react-native-shadow-view";
import * as bgColorStyle from "../../styles/Colors";
import {
  AppRegistry,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Platform,
  StatusBar
} from "react-native";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View
    style={[
      { height: Platform.OS === "ios" ? 20 : StatusBar.currentHeight },
      { backgroundColor }
    ]}
  >
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

class CalendarsDetails extends Component {
  static navigationOptions = {
    header: null
  };
  renderStatusBar() {
    return <MyStatusBar backgroundColor="#212733" barStyle="light-content" />;
  }

  constructor(props) {
    super(props);

    this.props.userList;
    this.userList = {};
    this.state = {
      items: {}
    };
  }

  /** Added Redux for the login Api */
  login = () => {
    const { goBack } = this.props.navigation;
    goBack();
  };

  render() {
    const { goBack } = this.props.navigation;
    var { params } = this.props.navigation.state;
    var dayText = moment(params.items.date).format("ddd");
    var datNum = moment(params.items.date).format("DD");
    var month = moment(params.items.date).format("MMM");
    var host_userId = params.items.host_userId;

    return (
      <View style={{ flex: 1 }}>
        {this.renderStatusBar()}
        <View
          style={[
            {
              height: 50,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: Platform.OS === "ios" ? 10 : 0,
              paddingBottom: Platform.OS === "ios" ? 10 : 0
            },
            { backgroundColor: "#212733" }
          ]}
        >
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity
              throttleTime={1200}
              underlayColor="white"
              style={{
                width: 35,
                height: 35,
                marginLeft: 10,
                justifyContent: "center"
              }}
              onPress={() => {
                goBack();
              }}
            >
              <Image
                style={{ width: 20, height: 20, padding: 10 }}
                source={require("../../images/back_icon.png")}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{ justifyContent: "center", alignItems: "center", flex: 2 }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "raleway-regular",
                fontSize: 14
              }}
            >
              Schedule Details
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flex: 0.5
            }}
          >
            <TouchableOpacity
              throttleTime={1200}
              underlayColor="white"
              style={{
                width: 35,
                height: 35,
                marginRight: 5,
                justifyContent: "center"
              }}
              onPress={() => {}}
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#212733" }}
        >
          <View style={styles.container}>
            <View style={styles.headerMain}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.headerBoxLeft}>
                  <Text style={styles.textDay}>{dayText}</Text>
                  <Text style={styles.textDate}>{datNum}</Text>
                  <Text style={styles.textMonth}>{month.toUpperCase()}</Text>
                </View>
                <View style={styles.boxDivider} />
                <View style={styles.headerBoxRight}>
                  <View style={styles.timebox}>
                    <Text style={styles.timeText}>{params.items.time}</Text>
                  </View>
                  <Text style={styles.meetingText}>{params.items.title}</Text>
                  <Text style={styles.roomText}>{params.items.confRoom}</Text>
                  <Text style={styles.companynameText}>
                    {params.items.companyName}, {params.items.company_location}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.listShadow}>
              <HostList list={params.items} />
            </View>
            <View />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default CalendarsDetails;
