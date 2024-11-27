import React, { useEffect, useState } from "react";
import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Image } from "@chakra-ui/react";
import { getCalendar2 } from "../API/api"; // Assuming this fetches the data from the API

const CalendarSelector = () => {
    const [calendars, setCalendars] = useState([]);
    const [selectedCalendarIndex, setSelectedCalendarIndex] = useState(0); // Keep track of the active tab index

    // Async function to fetch calendars
    useEffect(() => {
        const fetchCalendars = async () => {
            try {
                const response = await getCalendar2();

                console.log("API Response:", response); // Log the full response to inspect it

                // Access the data array from the response object
                const data = response.data; // This should contain the actual array of calendars

                // Ensure the response contains an array in the `data` property
                if (Array.isArray(data)) {
                    setCalendars(data);
                } else {
                    console.error("Expected an array inside the response data but received:", data);
                }
            } catch (error) {
                console.error("Error fetching calendars:", error);
            }
        };

        fetchCalendars();
    }, []);

    useEffect(() => {
        console.log("Calendars state:", calendars); // Log the calendars state whenever it changes
    }, [calendars]);

    return (
        <Box width={"80%"} margin={"auto"}>
            <Tabs 
                isLazy 
                variant="enclosed" 
                index={selectedCalendarIndex}
                onChange={(index) => setSelectedCalendarIndex(index)} // Update active tab when a tab is clicked
            >
                <TabList>
                    {/* Dynamically generate tabs using _id as the tab name */}
                    {calendars.map((calendar) => (
                        <Tab key={calendar._id} _selected={{ color: "white", bg: "blue.500" }}>
                            {calendar.name} {/* Tab label is the calendar's _id */}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {/* Dynamically generate tab panels with corresponding imgUrl */}
                    {calendars.map((calendar) => (
                        <TabPanel key={calendar._id}>
                            <Image 
                                src={calendar.imgUrl} 
                                alt={`Calendar ${calendar._id}`} 
                                width="100%" 
                                borderRadius="10px 10px 0 0"
                            />
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default CalendarSelector;
