const http = require("http");

function getMessage() {
    return "Hello from Node.js application!";
}

const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify({
        message: getMessage(),
        status: "healthy"
    }));
});

if (require.main === module) {
    server.listen(PORT, "0.0.0.0", () => {
        console.log(`Application listening on port ${PORT}`);
    });
}

module.exports = { getMessage };
