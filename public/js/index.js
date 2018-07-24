var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');

  //   socket.emit('createEmail', {
  //     to: 'jen@example.com',
  //     text: 'This is andrew'
  //   });

  socket.emit('createMessage', {
    from: 'alice',
    text: 'Sup'
  });
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', message => {
  console.log('New message', message);
});
