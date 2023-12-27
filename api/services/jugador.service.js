const bcrypt = require('bcrypt')

function altaPersonaje (data) {
  const hashedPassword = bcrypt.hashSync(data.password, parseInt(8))
  data = {...data, password: hashedPassword}
  //falta guardar la informacion en la base de datos
  console.log(data);
}

module.exports = {
  altaPersonaje
}