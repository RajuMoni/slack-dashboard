import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { MyStyles } from './style'
import RefreshIcon from '@mui/icons-material/Refresh';
export default function Index() {
  const style = MyStyles();
  const [loading, setloading] = useState(true);

  const [slashCommand, setSlashCommands] = useState([]);
  const events = async () => {
    try {
      setloading(true);
      let response = await axios.get("https://Slack.raju-moni.repl.co/getslash");
      let data = await response.data;
      data = data.map((e) => {
        return JSON.parse(e);
      })
      data = data.reverse();
      setSlashCommands((prev) => [...data]);
      setloading(false);
    } catch (er) {
      console.log(er)
    }
  }

  useEffect(() => {
    events();
  }, []);
  return <div >
    <h1>Slash Commands: <IconButton onClick={()=>events()}><RefreshIcon/></IconButton></h1>
    <div className={style.container}>
      {loading && <CircularProgress className={style.loader} color="success" />}
      {!loading && <div>{slashCommand.map((el, index) => {
        return (<div key={index}>
          <Card className={style.card}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {el.channel_name + " : " +el.channel_id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"Worksplace : "+el.team_domain}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"Team ID :  "+el.team_id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"User ID : "+el.user_id}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"Username : "+el.user_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"Command : "+el.command}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {"Text : "+el.text}
              </Typography>
            </CardContent>
          </Card>
        </div>);
      })}</div>}
      {!loading && slashCommand.length === 0 ?<h2>No Data</h2>:""}
   </div>
  </div>;
}
