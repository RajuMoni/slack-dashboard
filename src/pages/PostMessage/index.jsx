import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { MyStyles } from './style';
import { Button, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, Switch } from '@mui/material';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { display } from '@mui/system';
const { REACT_APP_BOT_TOKEN } = process.env;
// Post message
// Message reaction
// Share message
// App home event
// App uninstalled event
// Oauth flow
// Slash command(edited) 

const Index = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [channelId, setChannelId] = useState("");
  const [messageTitle, setMessageTitle] = useState("");
  const [blockMessage, setBlockMessage] = useState([]);
  const [channels, setChannels] = useState([]);
  const [useBlock, setUseBlock] = useState(false);

  const getChannelId = async () => {
    let response = await axios.get("https://Slack.raju-moni.repl.co/getdatas");
    let ch = await response.data;
    setChannels((prev) => [...ch]);
  }

  useEffect(() => {
    getChannelId();
  }, []);
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
    if (useBlock) {
      formData.append('blocks', blockMessage);
    }
    if (formData) {
      axios.post('https://slack.com/api/chat.postMessage', formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then((res) => {
          if (res.data.ok) {
            enqueueSnackbar('Message Send', {
              variant: 'success',
              autoHideDuration: 3000,
              action, preventDuplicate: true,
            });
            // resetHandler();
          } else {

            enqueueSnackbar(res.data.error, {
              variant: 'error',
              autoHideDuration: 3000,
              action, preventDuplicate: true,
            });
          }
          console.log(res);
        }).catch((err) => {
          console.log(err);
        });
    }
  }
  // customized
  const action = key => (
    <>
      <Button onClick={() => { closeSnackbar(key) }} sx={{ color: "white" }}>
        Dismiss
      </Button>
    </>
  );

  const resetHandler = () => {
    setChannelId("");
    setMessageTitle("");
    setBlockMessage("");
  }

  const style = MyStyles();
  return (<>
    <h3>POST MESSAGE</h3>
    <Box
      className={style.form}
      component="form"
      noValidate
      autoComplete="off"
    ><FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Channel/User ID</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Channel/User ID"
          value={channelId}
          onChange={(e) => setChannelId(e.target.value)}
        >
          {channels.map((e, index) => {
            return <MenuItem value={e.id} key={e.id} defaultChecked>{e.name}</MenuItem>
          })}
        </Select>
      </FormControl>
      <FormGroup className={style.formGroup}>
        <TextField
          className={style.textField}
          required
          id="outlined-required"
          placeholder="Title"
          label="Text Title"
          value={messageTitle}
          onChange={(e) => setMessageTitle(e.target.value)}
          fullWidth
        />
      </FormGroup>
      <FormGroup className={style.formGroup}>
        <FormControlLabel control={<Switch value={useBlock} onChange={(e) => {
          setUseBlock(e.target.checked)
        }} />} label="Use Block" />
      </FormGroup>
      {useBlock && <TextareaAutosize
        className={style.formTextArea}
        aria-label="minimum height"
        minRows={10}
        value={blockMessage}
        onChange={(e) => setBlockMessage(e.target.value)}
        placeholder="One of these arguments is required to describe the content of the message. If attachments or blocks are included, text will be used as fallback text for notifications only."
      />}
      <Button className={style.btn} onClick={() => resetHandler()} variant="contained">Reset</Button>
      <Button className={style.btn} onClick={() => submitHandle()} variant="contained">Send Message <KeyboardDoubleArrowRightIcon /></Button>

    </Box>
  </>);
}

export default Index;
