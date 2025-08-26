const EventEmitter=require('events');
const myEmitter=new EventEmitter();

myEmitter.on('orderPlaced',(orderID)=>{
    console.log(`order received. Order ID: ${orderID}`);
});

myEmitter.on('orderShipping',(orderID,shippmentID)=>{
    console.log(`order ${orderID} has been shipped with shippment ID: ${shippmentID}`)

});

myEmitter.on('orderDelivered',(orderID)=>{
    console.log(`order ${orderID} Delivered to customer.`)


});

myEmitter.emit('orderPlaced',12345);
myEmitter.emit('orderShipping',12345,'SHIP789');
myEmitter.emit('orderDelivered',12345);



function logOrderCancel(orderID){
    console.log(`Order ${orderID} has been cancelled`);
}

myEmitter.on('orderCancelled',logOrderCancel);
myEmitter.emit('orderCancelld',12345);

myEmitter.off('orederCancelled',logOrderCancel);
myEmitter.emit('orderCancelld',12345);



