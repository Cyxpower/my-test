const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const chatMessages = [];

wss.on('connection', (ws) => {
    console.log('客户端已连接');

    chatMessages.forEach((message) => {
        ws.send(message.toString());
    });

    ws.on('message', (message) => {
        console.log(`服务器接收到了信息: ${message}`);
        chatMessages.push(message.toString());

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
});
