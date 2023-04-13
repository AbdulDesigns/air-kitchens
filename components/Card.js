import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Styles from "../constants/styles";
import IconTab from "./IconTab";
import DATA from "../store/_dummy_data";
import { Ionicons } from "@expo/vector-icons";
import Button from "./Button";

const Card = () => {
  //date Generator
  let date = new Date().toLocaleString();

  return (
    // {main card container}
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={style.mainContainer}>
        <View style={style.topDetails}>
          <View style={style.inTopDetailsContainer}>
            <View style={style.genericTextContainer}>
              <Text style={style.genericHeadText}>Order Id</Text>
              <Text style={style.genericDetailText}>#749823748</Text>
            </View>
            <View style={style.genericTextContainer}>
              <Text style={style.genericHeadText}>Aggregator</Text>
              <Text style={style.genericDetailText}>Zomato</Text>
            </View>
          </View>
          <View style={style.inTopDetailsContainer}>
            <View style={style.genericTextContainer}>
              <Text style={style.genericHeadText}>Brand</Text>
              <Text style={style.genericDetailText}>Bowl 99</Text>
            </View>
            <View style={style.genericTextContainer}>
              <Text style={style.genericHeadText}>Oder Date</Text>
              <Text style={style.genericDetailText}>{date}</Text>
            </View>
          </View>
        </View>
        <View style={style.btmDetails}>
          <View style={style.itemDetailsContainer}>
            {DATA.map((cur) => {
              return (
                <View key={cur.id}>
                  <IconTab item={cur.item} quantity={cur.quantity} />
                  <View style={style.dash}></View>
                </View>
              );
            })}
          </View>
          {/* Rider Details */}
          <View>
            <View>
              {/* Name & Number */}
              <View style={style.riderDetailsContainer}>
                <View style={style.riderDetails}>
                  <Text
                    style={{ fontSize: 14, fontWeight: "800", lineHeight: 20 }}
                  >
                    Sachin Kesari
                  </Text>
                  <Text
                    style={{ fontSize: 14, fontWeight: "400", lineHeight: 20 }}
                  >
                    +91 8974365899
                  </Text>
                </View>
                <View style={style.iconContainer}>
                  <View style={style.icon}>
                    <Ionicons name="call" size={20} color={"white"} />
                  </View>
                  <View style={style.icon}>
                    <Ionicons name="location" size={20} color={"white"} />
                  </View>
                </View>
              </View>
              <View style={style.btnContainer}>
                <Button label={"Continue"} customStyle={style.btn} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;

//card styling
const style = StyleSheet.create({
  mainContainer: {
    minWidth: 328,
    backgroundColor: Styles.COLORS.light,
    borderRadius: Styles.RADIUS.Medium,
    overflow: "hidden",
  },
  topDetails: {
    minHeight: 104,
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
    backgroundColor: Styles.COLORS[900],
  },
  btmDetails: {
    width: 328,
    padding: 20,
  },
  inTopDetailsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 8,
    flex: 1,
  },
  genericTextContainer: {
    minWidth: 138,
    height: 34,
  },
  genericHeadText: {
    fontSize: Styles.FONT_SIZE.xs,
    color: "gray",
    lineHeight: 16,
  },
  genericDetailText: {
    fontSize: Styles.FONT_SIZE.xs,
    color: Styles.COLORS.white,
    lineHeight: 16,
  },
  dash: {
    width: "100%",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Styles.COLORS.graySubtle,
    borderStyle: "dashed",
    height: 1,
  },
  itemDetailsContainer: {
    paddingBottom: 18,
  },
  riderDetailsContainer: {
    alignItems: "center",
    flexDirection: "row",
    minWidth: 288,
    paddingBottom: 18,
  },
  riderDetails: {
    minWidth: 208,
    alignItems: "flex-start",
  },
  icon: {
    backgroundColor: Styles.COLORS[500],
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  iconContainer: {
    flexDirection: "row",
    gap: 8,
  },
  btnContainer: {
    width: "100%",
  },
  btn: {
    width: "100%",
  },
});
