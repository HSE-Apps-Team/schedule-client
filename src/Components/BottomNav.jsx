import React from 'react'

import useMedia from '../Hooks/useMedia'

import { CalendarOutlined, ClockCircleOutlined, UnorderedListOutlined, PlayCircleOutlined} from '@ant-design/icons';
import { theme, useColorMode, Text } from "@chakra-ui/react"
import FastfoodOutlinedIcon from '@material-ui/icons/FastfoodOutlined'
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Paper, ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

const BottomNav = (props) => {
    const mobile = useMedia(['(min-width: 750px)', '(max-width: 750px)'], [false, true])
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
          background: {
            default: colorTheme.selectedBackground
          },
          primary:{
              main: colorMode === "dark" ? "#90CDF4" : "#3182CE"
          }, 
        },
      });

      
    const [value, setValue] = React.useState('clock');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.setView(newValue)
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", position: 'fixed', bottom: '25px', marginTop: "20px", zIndex: "1"}}>
            <ThemeProvider theme={theme}>
                <Paper elevation={4}>
                    <BottomNavigation value={value} onChange={handleChange}>
                        <BottomNavigationAction label="Food" value="food" icon={<FastfoodOutlinedIcon />} />
                        <BottomNavigationAction label="Periods" value="schedule" icon={<ListOutlinedIcon />} />
                        <BottomNavigationAction label="Clock" value="clock" icon={<AccessTimeOutlinedIcon />} />
                        <BottomNavigationAction label="News" value="news" icon={<PlayCircleOutlineOutlinedIcon />} />
                        <BottomNavigationAction label="Events" value="events" icon={<EventOutlinedIcon />} />
                    </BottomNavigation>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default BottomNav
