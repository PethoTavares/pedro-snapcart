import http from 'node:http';

function handler(req, res) {
    if (req.url === '/api/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok' }));
        return;
    }
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