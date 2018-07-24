const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', socket => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from: 'mike@test.com',
    text: "Hey what's up",
    createAt: 123
  });

  socket.emit('newMessage', {
    from: 'cat',
    text: 'Hey',
    createAt: 123
  });

  //   socket.on('createEmail', newEmail => {
  //     console.log('createEmail', newEmail);
  //   });

  socket.on('createMessage', message => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(3000, () => {
  console.log(`Server is up on port 3000 ${port}`);
});
