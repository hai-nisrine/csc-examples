import { createServer } from "http";
const PORT = process.env.PORT;

const users = [
    { id : 1, name: "Alice" },
    { id : 2, name: "Bob" },
    { id : 3, name: "Charlie" }
];


const server = createServer((req, res) => {
    if (req.url === 'api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }

});

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});