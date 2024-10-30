import React from 'react'
import { Box, Typography, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatBox = () => {
    const chatData = [
        { id: 1, sender: 'user1', text: "Hey there! How’s it going?" },
        { id: 2, sender: 'user2', text: "All good here, thanks! How about you?" },
        { id: 3, sender: 'user1', text: "Doing well! Working on a new project right now." },
        { id: 4, sender: 'user2', text: "Sounds interesting! Tell me more about it." }
      ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // height: '100vh',
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      {/* Messages container */}
      <Box
        sx={{
          flexGrow: 1,
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          overflowY: 'auto',
        }}
      >
        {chatData.map((message) => (
          <Box
            key={message.id}
            sx={{
              alignSelf: message.sender === 'user1' ? 'flex-start' : 'flex-end',
              maxWidth: '70%',
              padding: 1,
              backgroundColor: message.sender === 'user1' ? '#d1e7dd' : '#cfe2ff',
              borderRadius: 2,
            }}
          >
            <Typography variant="body2" color="text.primary">
              {message.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Input container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 1,
          borderTop: '1px solid #ddd',
          backgroundColor: '#fff',
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 2,
            },
          }}
        />
        <IconButton color="primary">
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default ChatBox
