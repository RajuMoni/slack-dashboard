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
import ReactionEvents from "../../pages/ReactionEvents"
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import { useStyles } from './style';
const drawerWidth = 240;

export default function ClippedDrawer({ options }) {
    const styles = useStyles();
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
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: "#e8e8e4",},
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {options.map(({ url, text }, index) => (
                            <Link to={`/${url}`} className={styles.btn} key={index}>
                                <ListItem button key={text} sx={{ color:"#005f73",p: "10px" }}>
                                    <ListItemText primary={text} sx={{ textTransform: "uppercase" }} />
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Routes>
                    <Route path="/postmessage" element={<PostMessage />} />
                    <Route path="/slash" element={<Slash />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/reactionevents" element={<ReactionEvents />} />
                </Routes>
            </Box>
        </Box>
    );
}
