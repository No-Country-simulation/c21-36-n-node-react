const User = require("../models/users")
const {createtoken} = require("../config/tokensConfig")

class UserServices{

  static register(reqBody){
  if(
   !reqBody.email ||
   !reqBody.name ||
   !reqBody.lastName ||
   !reqBody.password ||
   !reqBody.typeUser 
  ) throw new Error("Incomplete data")
 
  const {
    name, lastName, email, password, typeUser
  } = reqBody;

  try {
      const user =  User.findOne({ where: { email } });
      if (user) {
        throw new Error("There is already an account associated with this email");
      };

      const payload = {
        email: email,
        name: name,
        lastName: lastName,
        typeUser: typeUser,
      };

      const token = createtoken(payload, "5d");
      return User.create({
        email, name, last_name: lastName, password, token, type_user: typeUser
      });
    } catch (err) {
      throw new Error(err);
    }


  }


}

module.exports = UserServices