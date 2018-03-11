import { StyleSheet } from "react-native";
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
import Dimensions from "Dimensions";

const detailScreenStyles = StyleSheet.create({
  container: {
    paddingBottom: 15
  },
  headerMain: {
    width: DEVICE_WIDTH - 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2f3543",
    borderRadius: 3,
    // shadowColor: "#1E242F",
    // shadowOffset: { width: 1, height: 1 },
    // shadowRadius: 5,
    // shadowOpacity: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    padding: 15
  },
  headerBoxLeft: {
    flex: 2,
    justifyContent: "center"
  },
  headerBoxRight: {
    flex: 7.8,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    justifyContent: "center"
  },
  boxDivider: {
    flex: 0.05,
    backgroundColor: "rgba(255,255,255,0.1)"
  },
  textDay: {
    fontFamily: "raleway-regular",
    fontSize: 12,
    color: "white",
    textAlign: "center"
  },
  textDate: {
    fontFamily: "raleway-regular",
    fontSize: 28,
    color: "#4dcba8",
    textAlign: "center"
  },
  textMonth: {
    fontFamily: "raleway-bold",
    fontSize: 14,
    color: "white",
    textAlign: "center"
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
    paddingBottom: 4,
    borderRadius: 2
  },
  timebox: {
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  meetingText: {
    fontFamily: "raleway-bold",
    fontSize: 18,
    color: "white",
    textAlign: "left",
    marginTop: 5
  },
  roomText: {
    fontFamily: "raleway-regular",
    fontSize: 14,
    color: "white",
    textAlign: "left",
    marginTop: 3
  },
  companynameText: {
    fontFamily: "raleway-regular",
    fontSize: 12,
    color: "rgba(255,255,255,0.6)",
    textAlign: "left",
    marginTop: 3
  },
  listShadow: {
    width: DEVICE_WIDTH - 30,
    backgroundColor: "#2f3543",
    borderRadius: 3,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    padding: 15
  },
  loading: {
    flex: 1,
    backgroundColor: "#212733",
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  deleteIcon: {
    width: 20,
    height: 20,
    padding: 5
  }
});

export default detailScreenStyles;
