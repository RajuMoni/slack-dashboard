import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { MyStyles } from './style'
import RefreshIcon from '@mui/icons-material/Refresh';
import moment from 'moment';
export default function Index() {
  const style = MyStyles();
  const [loading, setloading] = useState(true);

  const [events, setEvnents] = useState([]);
  const getEvents = async () => {
    try {
      setloading(true);
      let response = await axios.get("https://Slack.raju-moni.repl.co/getevents");
      let data = await response.data;
      data = data.reverse();
      setEvnents((prev) => [...data]);
      setloading(false);
    } catch (er) {
      console.log(er)
    }
  }
  useEffect(() => {
    getEvents();
  }, []);
  return <div >
    <h3>Events : <IconButton onClick={() => getEvents()}><RefreshIcon /></IconButton></h3>
    <div className={style.container}>
      {loading && <CircularProgress className={style.loader} color="success" />}
      {!loading && <div>{events.map((el, index) => {
        return (
          <div key={index}>
            <Card className={style.card}>
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {"Channel: " + el.event.channel ?? el.event.item.channel}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Event Type : " + el.event.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Team ID :  " + el.team_id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"User ID : " + el.event.user}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Username : " + el.user_name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Event Time : " + moment(el.event_time).format('LTS')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {"Text : " + el.text}
                </Typography>
              </CardContent>
            </Card>
          </div>
        );
      })}</div>}
      {!loading && events.length === 0 ? <h2>No Data</h2> : ""}
    </div>
  </div>;
}
