const http = require('http');

const requestListener = (request, response) => {
	response.write('Hello,students(ite)\n');
	response.end();
	// response.end('Hello from different World\n');
}

const server = http.createServer(requestListener);

const confirmationCallback = () => {
	console.log('Server is running...');
}

server.listen(9000, confirmationCallback);