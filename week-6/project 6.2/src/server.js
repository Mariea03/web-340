const http = require('http');
const url = require('url');

let character = null;
let confirmed = false;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (req.method === 'POST' && pathname === '/create-character') {
        character = {
            class: query.class,
            gender: query.gender,
            fact: query.fact
        };
        confirmed = false;
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Character created');
    }

    else if (req.method === 'POST' && pathname === '/confirm-character') {
        if (character) {
            confirmed = true;
            res.writeHead(200, { 'Content-Type': 'text/plain'});
            res.end('Character confirmed');
        } else {
            res.writeHead(400);
            res.end('No character to confirm');
        }
    }

    else if (req.method === 'GET' && pathname === '/view-character') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ character, confirmed}));
    }

    else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});