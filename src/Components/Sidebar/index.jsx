import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AppBar from "../Navbar"
import PostMessage from "../../pages/PostMessage"
import Events from "../../pages/Events"
import Slash from "../../pages/Slash"
import Calender from "../../pages/Calender"
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useStyles } from './style';
const drawerWidth = 240;

export default function ClippedDrawer({ options }) {
    let cuurentPath = window.location.pathname.substring(1);
    const [activeTab, setActiveTab] = React.useState(cuurentPath.length === 0 ? options[0].url : cuurentPath);
    const styles = useStyles();
    const onClickHandler = (url) => {
        setActiveTab(url);
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    backgroundColor: "#005f73",
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#e8e8e4", },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', padding: "10px 10px 10px 0px" }}>
                    <List>
                        {options.map(({ url, text }, index) => (
                            <Link to={`/${url}`} className={`${styles.btn}`} key={index}>
                                <ListItem onClick={() => onClickHandler(url)} className={`${activeTab === url ? styles.active : ""}`} button key={text} sx={{
                                    color: "#005f73", p: "10px", borderTopRightRadius: "90px !important",
                                    borderBottomRightRadius: "90px !important",
                                }} >
                                    <ListItemText primary={text} style={{ textTransform: "capitalize", paddingLeft: "15px" }} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer >
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<PostMessage />} />
                    <Route path="/postmessage" element={<PostMessage />} />
                    <Route path="/slash" element={<Slash />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/calender" element={<Calender />} />
                </Routes>
            </Box>
        </Box >
    );
}
