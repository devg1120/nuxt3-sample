const bcrypt = require('bcrypt')

if (process.argv.length != 3) {
    
   console.log("node passhash.js <text-password>")
   console.log("")
   process.exit(0);

}

password = process.argv[2]


const hash_password =  bcrypt.hashSync(password, 10)

console.log(hash_password)


