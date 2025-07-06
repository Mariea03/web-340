const http = require('http');

describe('Character Creation API', () => {
    const makeRequest = (options, postData) =>
        new Promise((resolve, reject) => {
            const req = http.request(options, res => {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve({ statusCode: res.statusCode, data}));
            });
            req.on('error', reject);
            if(postData) req.write(postData);
            req.end();
        });

        test('POST /create-character should create a character', async () => {
            const options = {
                hostname: 'localhost',
                port:3000,
                path: '/create-character?class=Warrior&gender=Male&fact=Brave+and+bold',
                method: 'POST'
            };
            const res = await makeRequest(options);
            expect(res.statusCode).toBe(200);
            expect(res.data).toContain('Character created');
        });

        test('POST /confirm-character should confirm the character', async ()=> {
            const options = {
                hostname: 'localhost',
                port: 3000,
                path: '/confirm-character',
                method: 'POST'
            };    
            const res = await makeRequest(options);
            expect(res.statusCode).toBe(200);
            expect(res.data).toContain('Character confirmed');
        });    

        test('GET / view-character should return the created character', async () => {
            const options = {
                hostname: 'localhost',
                port: 3000,
                path: '/view-character',
                method: 'GET'
            };
            const res = await makeRequest(options);
            expect(res.statusCode).toBe(200);
            expect(res.data).toContain('class');
            expect(res.data).toContain('gender');
            expect(res.data).toContain('fact');
        });
});