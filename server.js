import http from 'node:http'

const PORT = 8080

const server = http.createServer((req, res) => {
    res.end('Hello from the server')

    console.log(req.url)
})

server.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
})