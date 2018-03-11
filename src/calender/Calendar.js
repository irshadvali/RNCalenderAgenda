import React, { Component } from "react";
import Header from "../Header";
import moment from "moment";
import styles from "../styles/calendarStyles";
import detailScreenStyles from "../styles/detailScreenStyles";

import * as bgColor from "../styles/Colors";
import { Agenda } from "./src/index";
// import _ from "lodash";
// import Icon from "react-native-vector-icons/FontAwesome";
import {
  Text,
  View,
  NetInfo,
  Alert,
  TouchableHighlight,
  StyleSheet,
  Platform,
  Button,
  Image,
  AsyncStorage,
  StatusBar
} from "react-native";
import {
  Assets,
  Constants,
  Colors,
  Typography,
  AvatarHelper,
  Avatar,
  TouchableOpacity
} from "react-native-ui-lib";
// import { changeNetworkStatus } from "../../actions/network.action";
import { connect } from "react-redux";
// import SnackBar from "react-native-custom-snackbar";
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
class Calendars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      userId: "",
      first_name: "",
      last_name: "",
      email_id: "",
      contact_number: "",
      image_url: "",
      user_creation_date: "",
      user_flag: "",
      password: ""
    };
    this.object = {
      color: ["#FF5733", "#FFBD33", "#DBFF33", "#75FF33", "#33FF57", "#33FFBD"]
    };
  }

  // static propTypes = {
  //   onPress: React.PropTypes.func,
  //   level: React.PropTypes.number
  // };

  onClose(data) {
    // data = {type, title, message, action}
    // action means how the alert was closed.
    // returns: automatic, programmatic, tap, pan or cancel
  }
  onError = error => {
    if (error) {
      this.dropdown.alertWithType("error", "Error", error);
    }
  };

  static navigationOptions = {
    header: null
  };

  componentWillMount() {
    this.getResult().done();
    //  this.props.dispatch(fetchCalanderList());
  }

  //listener for internet connection
  componentDidMount() {
    // NetInfo.addEventListener("connectionChange", this._handleConnectionChange);
    // NetInfo.isConnected.fetch().done(isConnected => {
    //   this._handleConnectionChange;
    // });
  }

  //remove the internet listener
  componentWillUnmount() {
    //   NetInfo.removeEventListener("change", this._handleConnectionChange);
  }

  //handle the action when the internet connetion changes
  _handleConnectionChange = isConnected => {
    const { dispatch, actionQueue } = this.props;
    // this.props.dispatch(connectionState({ status: isConnected }));
    //this.props.dispatch(changeNetworkStatus(info));
    this.handleNetworkChange(isConnected);
    if (typeof actionQueue != "undefined") {
      if (isConnected != "NONE" && actionQueue.length > 0) {
        actionQueue.forEach(url => {
          data = { url };
          //this.props.dispatch(bookRoomCallByUrl(data));
        });
      }
    }
  };

  handleNetworkChange = info => {
    //this.props.dispatch(changeNetworkStatus(info));
  };

  async getResult() {
    let response = await AsyncStorage.getItem("loginResult");
    let listOfTasks = (await JSON.parse(response)) || [];
    res = listOfTasks;
    this.setState({ userId: res.user_id });
    this.setState({ first_name: res.first_name });
    this.setState({ last_name: res.last_name });
    this.setState({ email_id: res.email_id });
    this.setState({ contact_number: res.contact_number });
    this.setState({ image_url: res.image_url });
    this.setState({ user_creation_date: res.user_creation_date });
    this.setState({ user_flag: res.user_flag });
    this.setState({ password: res.password });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.calanderRoomResults !== this.props.calanderRoomResults) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  formatDate(date) {
    var monthNames = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    var dayNames = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
      "31"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    let data = year + "-" + monthNames[monthIndex] + "-" + dayNames[day - 1];
    return data.toString();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.isConnected !== this.props.isConnected &&
      !nextProps.isConnected
    ) {
      this.refs.myReffernce.show("Your Offline...");
    } else {
      // this.refs.myReffernce.show("Your in Online...");
    }
    // this.props.dispatch(fetchCalanderList());
  }

  renderStatusBar() {
    return <MyStatusBar backgroundColor="#212733" barStyle="light-content" />;
  }

  render() {
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
          <View
            style={{
              flex: 0.5,

              alignContent: "flex-start",
              marginLeft: 5
            }}
          />
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
              Schedule
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              flex: 0.5,
              marginLeft: 10
            }}
          >
   
          </View>
        </View>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.__loadMeetings.bind(this)}
          selected={this.formatDate(new Date())}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          pastScrollRange={30}
          futureScrollRange={30}
        />

      </View>
    );
  }

  __loadMeetings(day) {
    console.log(day.dateString);
    if (typeof this.state.items[day.dateString] == "undefined") {
      const isAvailable = () => {
        const timeout = new Promise((resolve, reject) => {
          setTimeout(reject, 5000, "Request timed out");
        });
        const request = fetch("https://api.myjson.com/bins/14vicz");
        return Promise.race([timeout, request])
          .then(response => response.json())
          .then(responseJson => {
            let parseObject = responseJson["body"];
            let array = [];
            var now = moment(day.dateString);
            var days = moment(now).daysInMonth();
            for (let j = 0; j < parseObject.length; j++) {
              const reserved = parseObject[j]["reserved"];
              const room_name = parseObject[j]["room_name"];
              const room_id = parseObject[j]["room_id"];
              const company_name = parseObject[j]["company_name"];
              const company_location = parseObject[j]["company_location"];

              if (
                parseObject[j]["reserved"] != undefined &&
                reserved.length != 0
              ) {
                for (let k = 0; k < reserved.length; k++) {
                  const booking_date_string = reserved[k]["booking_date"];
                  const host_name = reserved[k]["host_name"];
                  const host_userId = reserved[k]["host_userId"];
                  var userFlag = "2";
                  if (this.state.userId === host_userId) {
                    userFlag = "1";
                  } else {
                    userFlag = "2";
                  }
                  console.log(
                    "Host id check " + this.state.userId + "===" + host_userId
                  );
                  var booking_date = moment(booking_date_string);
                  var parse_format_date = booking_date
                    .utc()
                    .format("YYYY-MM-DD");
                  var key = parse_format_date.toString();
                  var startTime, endTime;
                  startTime = moment(reserved[k]["start_time"], ["HH:mm"])
                    .format("hh:mm a")
                    .toUpperCase();

                  endTime = moment(reserved[k]["end_time"], ["HH:mm"])
                    .format("hh:mm a")
                    .toUpperCase();
                  var time = startTime + " to " + endTime;
                  const booking_title = reserved[k]["booking_title"];
                  const guest_list = reserved[k]["guest_list"];
                  const bookingType = reserved[k]["booking_type"];
                  var guestLength = guest_list.length;
                  const bookId = reserved[k]["booking_id"];
                  var guest_list_string = [];
                  guest_list.forEach(function(list) {
                    guest_list_string.push(list);
                  });
                  const toBeInserted = {
                    name: host_name,
                    host_userId: host_userId,
                    date: key,
                    index: j,
                    title: booking_title,
                    confRoom: room_name,
                    confRoomId: room_id,
                    bookingId: bookId,
                    time: time,
                    bookingType: bookingType,
                    companyName: company_name,
                    company_location: company_location,
                    subtitle: guestLength,
                    userList: guest_list_string,
                    userFlag: userFlag,
                    height: Math.max(100, Math.floor(Math.random() * 150))
                  };

                  if (typeof this.state.items[key] == "undefined") {
                    this.state.items[key] = [];
                    this.state.items[key].push(toBeInserted);
                  }
                  let flagIndicator = false;
                  const length = this.state.items[key].length;
                  for (
                    let uniqueIndex = 0;
                    uniqueIndex < length;
                    uniqueIndex++
                  ) {
                    console.log(this.state.items[key][uniqueIndex].bookingId);
                    if (
                      this.state.items[key][uniqueIndex].bookingId === bookId
                    ) {
                      flagIndicator = false;
                      break;
                    } else {
                      flagIndicator = true;
                    }
                  }
                  if (flagIndicator == true) {
                    this.state.items[key].push(toBeInserted);
                  }
                }
              }
            }

            for (let index = 0; index <= days + 10; index++) {
              var check = moment(day.dateString);

              var month1 = check.format("MM");
              var day1 = check.format("D");
              var year1 = check.format("YYYY");
              let date1 = "";

              if (1 <= index && index <= 9) {
                date1 = moment(check)
                  .add(index, "days")
                  .format("YYYY-MM-DD");
              } else {
                date1 = moment(check)
                  .add(index, "days")
                  .format("YYYY-MM-DD");
              }
              if (typeof this.state.items[date1] == "undefined")
                this.state.items[date1] = [];
            }
            const newItems = {};
            Object.keys(this.state.items).forEach(key => {
              newItems[key] = this.state.items[key];
            });
            this.setState({
              items: newItems
            });
          })
          .catch(error =>
            this.refs.myReffernce.show("Server not reachable...")
          );
      };

      isAvailable();
    }
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time, i);
        if (!this.state.items[strTime[1]]) {
          this.state.items[strTime[1]] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime[1]].push({
              name:
                Math.floor(strTime[0].getHours() / 12) +
                i +
                ":" +
                strTime[0].getMinutes() +
                " AM" +
                " - " +
                Math.floor(strTime[0].getHours() / 12) +
                i +
                ":" +
                parseInt(strTime[0].getMinutes(), 15) +
                " AM",
              index: j,
              height: Math.max(100, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  _onPressButton(item) {
    // var { navigate } = this.props.navigation;
    // navigate("CalendarsDetails", { items: item });
  }

  getBookedicon(flag) {
    dispalyImage = require("../images/Contact.png");
    if (flag == 1) {
      dispalyImage = require("../images/Contact.png");
    } else {
      dispalyImage = require("../images/Contact.png");
    }
    return dispalyImage;
  }
  renderItem(item) {
    const colorString = this.object.color[item.index];
    const initials = AvatarHelper.getInitials(item.name);

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        throttleTime={1000}
        onPress={this._onPressButton.bind(this, item)}
        underlayColor="white"
      >
        <View style={[styles.item]}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <View style={{ flex: 6, justifyContent: "center" }}>
              <View style={detailScreenStyles.timebox}>
                <Text style={detailScreenStyles.timeText}>{item.time}</Text>
              </View>
              <Text style={styles.meetingText}>{item.title}</Text>
              <Text style={styles.roomText}>
                {item.name} & {item.subtitle + " others"}
              </Text>
            </View>

            <TouchableOpacity activeOpacity={0.7} throttleTime={2000}>
              <View style={[styles.circleView]}>
                <Image
                  style={styles.ImageStyle}
                  source={this.getBookedicon(item.bookingType)}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text style={styles.noMeetingText}>No Class</Text>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time, i) {
    const date = new Date(time);
    var multiple = [date, date.toISOString().split("T")[0]];
    return multiple;
  }
}



export default Calendars;
