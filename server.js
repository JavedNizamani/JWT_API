const http = require('http');                                  // creating server to run api
const app = require('./app');
const PORT = process.env.PORT;
const server = http.createServer(app);
require('./utils/db.tables');
 

    server.listen(PORT,()=>{
        console.log(`Server Running at PORT: ${PORT}`);
    })