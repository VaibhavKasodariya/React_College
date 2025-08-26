const EventEmitter = require('events'); // Use require instead of 'request'
const myEmitter = new EventEmitter();

myEmitter.on('great', () => {
    console.log('Hello There:');
});

myEmitter.emit('great');