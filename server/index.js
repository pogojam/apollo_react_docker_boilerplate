require("./services/jobs");
require("./services/aws/Aws_Config");
const app = require("express")();
const apolloServer = require("./services/apollo/Apollo_Service");
const server = require("http").Server(app);
const io = require("socket.io")(server);
const ss = require("socket.io-stream");
const { apolloUploadExpress } = require("apollo-upload-server");

const connections = [];
const port = process.env.PORT ? process.env.PORT : 4000;

app.use(apolloUploadExpress());
//
// Add routes here
// app.use("/", videoRoutes);
//
apolloServer.applyMiddleware({ app });
io.on("connect", (socket) => {
  const stream = ss(socket);
  connections.push(socket.id);
  // Pull in sockets like the example below
  //All sockets should be kept inside the sockets folder
  // videoSockets(socket, stream, database);
  console.log("Connected sockets " + connections.length);
});

server.listen(port, () => console.log("server up on port " + port));
