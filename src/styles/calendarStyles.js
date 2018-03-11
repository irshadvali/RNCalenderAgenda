import { StyleSheet } from "react-native";
const DEVICE_WIDTH = Dimensions.get("window").width;
import Dimensions from "Dimensions";

const calendarStyles = StyleSheet.create({
  headerMain: {
    width: DEVICE_WIDTH - 30,

    backgroundColor: "#2f3543",
    borderRadius: 3,

    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 15
  },
  roomText: {
    fontFamily: "raleway-regular",
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
    textAlign: "left",
    marginTop: 3
  },
  item: {
    backgroundColor: "#2F3543",
    flex: 1,
    borderRadius: 3,
    marginLeft: 0,
    marginRight: 15,
    marginTop: 0,
    marginBottom: 0,
    padding: 15
  },
  emptyDate: {
    flex: 1,
    paddingTop: 25
  },
  titletext: {
    fontFamily: "raleway-semibold",
    fontSize: 12,
    color: "#333333",
    marginTop: 3
  },
  headerBoxLeft: {
    flex: 8,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center"
  },
  headerBoxRight: {
    flex: 2,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    justifyContent: "center"
  },
  boxDivider: {
    flex: 0.05,
    backgroundColor: "#e6e6e6",
    marginTop: 10,
    marginBottom: 10
  },
  timeText: {
    fontFamily: "raleway-bold",
    fontSize: 12,
    color: "white",
    textAlign: "left",
    backgroundColor: "#8566C2",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4
  },
  meetingText: {
    fontFamily: "raleway-bold",
    fontSize: 16,
    color: "white",
    textAlign: "left",
    marginTop: 5
  },
  timebox: {
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  avtarContainer: {
    flex: 2.5,
    justifyContent: "center",
    alignItems: "center"
  },

  noMeetingText: {
    fontFamily: "raleway-regular",
    fontSize: 12,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#2f3543",
    color: "rgba(255,255,255,0.2)",
    textAlign: "left",
    marginRight: 15,
    padding: 15
  },
  circleView: {
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 75,
    marginBottom: 20,
    backgroundColor: "#4dcba8"
  },
  ImageStyle: {
    width: 15,
    height: 15
  }
});

export default calendarStyles;
