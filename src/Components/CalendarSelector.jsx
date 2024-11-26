import React, { useState } from "react";
import { Box, HStack, Text } from "@chakra-ui/react";

const CalendarSelector = () => {
    const [ calendars, setCalendars ] = useState([['button1', 'img1'], ['button2', 'img2'], ['button3', 'img3']]);
    const [ selectedCalendar, setSelectedCalendar ] = useState(calendars[0][1]);
    const handleCalendarChange = (calendar) => {
        setSelectedCalendar(calendar);
    }
    
    return (
        <Box width={"80%"} margin={"auto"}>
            <Box display={"flex"} flexDirection={"row"}> 
                {calendars.map((calendar, index) => (
                    <Box 
                        className={calendar[1] === selectedCalendar ? "component selected" : "component"}
                        borderRadius={"10px 10px 0 0"} 
                        key={calendar[0]}
                        cursor={"pointer"}
                        width={"100%"}
                        onClick={() => handleCalendarChange(calendar[1])}
                    >
                        <Text padding={"5px"}>{calendar[0]}</Text>
                    </Box>
                ))}
            </Box>
            <Box className="component selected" position={"relative"}> {/* instead of mapping, add a button handler that will display the selected calendar */}
                {selectedCalendar}
            </Box>
        </Box>
    );
};

export default CalendarSelector;