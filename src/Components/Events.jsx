import React, {useState, Fragment} from 'react'
import {use100vh} from 'react-div-100vh'

import { Paper, Badge, ThemeProvider, Container } from "@material-ui/core"

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import {format} from 'date-fns';
import { theme, useColorMode, Text } from "@chakra-ui/react"
import { createTheme } from '@material-ui/core/styles';

function Events() {

    const [selectedDate, handleDateChange] = useState(new Date());
    const [selectedDays, setSelectedDays] = useState([1, 2, 3])

    const vh = use100vh()

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    const handleMonthChange = async () => {
        // just select random days to simulate server side based data
        return new Promise(resolve => {
            setTimeout(() => {
            setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
            resolve();
            }, 1000);
        });
    };

    const { colorMode, toggleColorMode } = useColorMode()


    

    let colorTheme

    if(colorMode == 'dark'){
        colorTheme = {
            selectedBackground: "#222831",
            unselectedBackground: "#20252e",
            boxShadow: "2px 2px 10px rgb(0,118,220,0.32)"
        }
    } else if (colorMode == 'light'){
        colorTheme = {
            selectedBackground: "white",
            unselectedBackground: "#f8f8f8",
            boxShadow: "2px 2px 10px rgb(0,118,220,0.32)"
        }
    }

    const theme = createTheme({
        palette: {
          type: colorMode,
          primary:{
              main: colorMode === "dark" ? "#90CDF4" : "#3182CE"
          }, 
        },
    });
    
    return (
        <div style={{ height:vh-120, display: "flex", flexDirection:"column", width: "100%", alignItems: 'center', justifyContent: 'center'}}>
            <ThemeProvider theme={theme}>
                <p style={{fontWeight: "bold", fontSize: '24px', marginBottom: "5px"}}>Events</p>
                <Container style={{maxWidth: "375px"}}>
                    <Paper elevation={4} style={{width:"100%", margin: "0px auto"}}>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                format="MM/dd/yyyy"
                                value={selectedDate}
                                onChange={handleDateChange}
                                onMonthChange={handleMonthChange}

                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                variant="static"
                                autoOk
                                renderDay={(day, selectedDate, isInCurrentMonth, dayComponent) => {
                                    const isSelected = isInCurrentMonth && selectedDays.includes(day.getDate());
                          
                                    // You can also use our internal <Day /> component
                                    return <Badge badgeContent={isSelected ? "3" : undefined} color="secondary">{dayComponent}</Badge>;
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Paper>
                </Container>
                {selectedDays.includes(selectedDate.getDate()) ? 
                    (
                        <ul>
                            {[0, 1, 2].map((idx) => (
                                <li>Event {idx}</li>
                            ))}
                        </ul>
                    )
                    :
                    (
                        <p>No events for today</p>
                    )
                }
            </ThemeProvider>
        </div>
    )
}

export default Events
