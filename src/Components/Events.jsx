import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { use100vh } from "react-div-100vh";
import dayjs from "dayjs";
import "../Styles/Calendar.css";
import {
  Box,
  Text,
  useColorMode,
  CircularProgress,
  VStack,
  Stack,
  HStack,
  Title,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { setDate } from "date-fns/esm";
import useMedia from "../Hooks/useMedia";
import calen from "../Assets/Calendarimg.jpg";
import { getCalendar } from "../API/api";
const dateFns = require("date-fns");

const Events = () => {
  const vh = use100vh();
  const [loading, setLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startDay, setStartDay] = useState("royal");
  const [cali, setCalendar] = useState([]);

  useEffect(() => {
    console.log("getting calendar")
    getCalendar().then((result) => {
      console.log(result.data) 
      setCalendar(result.data)
      console.log("img"+cali.calendar_img)
      setLoading(false)
    })
}, [])
  const mobile = useMedia(["(max-width: 450px)"], [true]);
  return !loading ? (
    <div
      style={{
        height: vh,
        display: "flex",
        flexDirection: "column",
        width: "100%",
        overflow: "auto" // Add this line to make the container scrollable
      }}
    >
      <div style={{ display: "flex", width: "100%", justifyContent: "center", marginBottom: "25vh",}}>
        <img className="shadow" src={cali.calendar_img} />
      </div>
    </div>
  ) : (
    <div
      style={{
        height: vh - 250,
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress
        isIndeterminate
        size={mobile ? window.innerWidth * 0.5 : 150}
        thickness={2.5}
      />
    </div>
  );
};

export default Events;
