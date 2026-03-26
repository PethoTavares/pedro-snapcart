import http from 'node:http';

function handler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from SnapCart!');
}
export function createServer() {
    return http.createServer(handler);
}

const __filename = new URL(import.meta.url).pathname;
if (process.argv[1] === __filename) {
    createServer().listen(3000);
}