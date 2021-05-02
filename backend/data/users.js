import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@bluamoeba.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Hammad',
    email: 'hammad@bluamoeba.com',
    password: bcrypt.hashSync('123456', 10),
  },

  {
    name: 'mohammad',
    email: 'mohammad@bluamoeba.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
