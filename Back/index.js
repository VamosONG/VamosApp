const server = require("./src/server");
const { conn } = require('./src/dataBase');


const port = process.env.PORT || 3001;

conn.sync({ force: true }).then(() => {
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})
}).catch(error => console.error(error))

//hola
