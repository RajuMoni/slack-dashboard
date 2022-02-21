import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { MyStyles } from './style';
import { Button } from '@mui/material';
import axios from 'axios';
const { REACT_APP_BOT_TOKEN } = process.env;
// Post message
// Message reaction
// Share message
// App home event
// App uninstalled event
// Oauth flow
// Slash command(edited) 

const Index = () => {
  const [channelId, setChannelId] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [blockMessage, setBlockMessage] = useState([]);
  /**
   * post message using web api slack 
   * required scopes in the app
   * 
   * Bot tokens:
   * chat:write
   * 
   * User tokens:
   * chat:write
   * chat:write:user
   * chat:write:bot
   * 
   * @param {*} e 
   */
  const submitHandle = async (e) => {
    let formData = new FormData();
    formData.append('token', REACT_APP_BOT_TOKEN);
    formData.append('channel', channelId);
    formData.append('text', messageTitle);
    console.log("FormData : ", formData);
    if (formData) {
      axios.post('https://slack.com/api/chat.postMessage', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    }

  }

  const style = MyStyles();
  return (<>
    <h3>POST MESSAGE</h3>
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        className={style.textField}
        id="outlined-required"
        label="Channel/User ID"
        placeholder="Channel ID / User ID"
        value={channelId}
        onChange={(e) => setChannelId(e.target.value)}
        fullWidth
      />
      <TextField
        className={style.textField}
        required
        id="outlined-required"
        label="Text Title"
        placeholder="Title"
        value={messageTitle}
        onChange={(e) => setMessageTitle(e.target.value)}
        fullWidth
      />
      <TextareaAutosize
        className={style.formTextArea}
        aria-label="minimum height"
        minRows={10}
        value={blockMessage}
        onChange={(e) => setBlockMessage(e.target.value)}
        placeholder="One of these arguments is required to describe the content of the message. If attachments or blocks are included, text will be used as fallback text for notifications only."
      />
      <Button className={style.btn} variant="contained">Reset</Button>
      <Button className={style.btn} onClick={() => submitHandle()} variant="contained">Send Message </Button>

    </Box>
  </>);
}

export default Index;
