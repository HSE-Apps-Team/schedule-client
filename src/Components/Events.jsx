import React, {useState, Fragment} from 'react'
import {use100vh} from 'react-div-100vh'

import { Paper, Badge, ThemeProvider } from "@material-ui/core"

import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

import {format} from 'date-fns';
import { theme, useColorMode, Text } from "@chakra-ui/react"
import { createTheme } from '@material-ui/core/styles';

function Events() {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const vh = use100vh()

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(format(date, 'MM/dd/yyyy'))
    };

    const { colorMode, toggleColorMode } = useColorMode()


    const selectedDays = [1, 4, 6, 8, 12, 20, 30]

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
                <Paper elevation={4}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            variant="static"
                            autoOk
                            orientation="landscape"
                        />
                    </MuiPickersUtilsProvider>
                </Paper>
            </ThemeProvider>
            <br></br>
            <p>Still under construction. Enjoy this nice calendar for now!</p>
        </div>
    )
}

export default Events
