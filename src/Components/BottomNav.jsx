import React from "react";

import useMedia from "../Hooks/useMedia";

import { theme, useColorMode, Text, Center, useTheme } from "@chakra-ui/react";
import RestaurantOutlinedIcon from "@material-ui/icons/RestaurantOutlined";

const BottomNav = (props) => {
  const mobile = useMedia(
    ["(min-width: 750px)", "(max-width: 750px)"],
    [false, true]
  );
  const { colorMode, toggleColorMode } = useColorMode();

  const theme = useTheme();

  let colorTheme;

  if (colorMode == "dark") {
    colorTheme = {
      selectedBackground: "#54617a",
      unselectedBackground: "#3a4354",
    };
  } else if (colorMode == "light") {
    colorTheme = {
      selectedBackground: "white",
      unselectedBackground: "#f8f8f8",
    };
  }
  // colorTheme = {
  //   selectedBackground: theme.semanticTokens.colors.accent,
  //   unselectedBackground: theme.semanticTokens.colors.bg,
  // };

  const iconStyle = { 
    fontSize: "20px", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center" 
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "fixed",
        bottom: "30px",
        marginTop: "20px",
        zIndex: "1",
      }}
    >
      <div
        className="shadow"
        style={{
          display: "flex",
          zIndex: 4,
          borderRadius: "10px",
        }}
      >
        <div
          onClick={() => {
            props.setView("food");
          }}
          className={ props.view == "food" ? "selected" : "component" }
          style={{
            boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
            width: mobile ? "70px" : "80px",
            height: "45px",
            display: "flex",
            borderRadius: "10px 0px 0px 10px",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <RestaurantOutlinedIcon style={{ fontSize: "20px" }} />
        </div>
        <div
          onClick={() => {
            props.setView("schedule");
          }}
          className={ props.view == "schedule" ? "selected" : "component" }
          style={{
            width: mobile ? "70px" : "80px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: props.view == "schedule" ? colorTheme.boxShadow : "none",
            boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
            cursor: "pointer",
          }}
        >
          {/* <UnorderedListOutlined style={{ fontSize: "20px" }} /> */}
          <Center><i class="bi bi-list" style={{fontSize: "25px", display: "flex", justifyContent: "center", alignItems: "center"}}></i></Center>
        </div>
        <div
          onClick={() => {
            props.setView("clock");
          }}
          className={ props.view == "clock" ? "selected" : "component" }
          style={{
            width: mobile ? "70px" : "80px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow: props.view == "clock" ? colorTheme.boxShadow : "none",
            boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
            cursor: "pointer",
          }}
        >
          {/* <ClockCircleOutlined style={{ fontSize: "20px" }} /> */}
          <Center><i class="bi bi-clock" style={iconStyle}></i></Center>
        </div>
        <div
          onClick={() => {
            props.setView("schoolend");
          }}
          className={ props.view == "schoolend" ? "selected" : "component" }
          style={{
            width: mobile ? "70px" : "80px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // boxShadow:
            //   props.view == "schoolend" ? colorTheme.boxShadow : "none",
            boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
            cursor: "pointer",
          }}
        >
          {/* <ClockCircleOutlined style={{ fontSize: "20px" }} /> */}
          <Center><i class="bi bi-hourglass-split" style={iconStyle}></i></Center>
        </div>
        <div
          onClick={() => {
            props.setView("events");
          }}
          className={ props.view == "events" ? "selected" : "component" }
          style={{
            width: mobile ? "70px" : "80px",
            height: "45px",
            display: "flex",
            borderRadius: "0px 10px 10px 0px",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: props.view == "events" ? colorTheme.boxShadow : "none",
            boxShadow: "inset 0 1px hsla(0,0%,100%,.05)",
            cursor: "pointer",
          }}
        >
          {/* <CalendarOutlined style={{ fontSize: "20px" }} /> */}
          <Center><i class="bi bi-calendar" style={iconStyle}></i></Center>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
