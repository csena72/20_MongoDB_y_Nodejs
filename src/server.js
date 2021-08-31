const express = require("express");
var exphbs = require('express-handlebars');
const routes = require("./routes/routes");
const compression = require("compression");
const cors = require("cors");

const router = express.Router();
const app = express();

const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);
const path = require('path')

app.use(express.urlencoded({extended: true}));

app.use(express.json());
app.use(cors());
app.use(compression());

app.use(routes(router));

app.engine('handlebars', exphbs());

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(__dirname + '/public'));


let productosWs = []; // Traer con la api de productos
let mensajes = []; // Traer con la api de mensajes

io.on('connection', (socket) => {

  socket.emit('mensajes', { mensajes: mensajes })

  socket.on('nuevo-mensaje', (nuevoMensaje) => {    
    let elNuevoMensaje = {
      mensaje: nuevoMensaje.mensaje,
      hora: nuevoMensaje.hora,
      email: nuevoMensaje.email
    }
    mensajes.push(elNuevoMensaje)
    io.sockets.emit('recibir nuevoMensaje', [elNuevoMensaje])
  })

  io.sockets.emit('productosWs', productosWs);

  socket.on('producto-nuevo', data => {
    productosWs.push(data);
  })

});

module.exports = app;