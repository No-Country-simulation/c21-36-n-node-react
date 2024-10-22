const { UserServices } = require("../services/userServices.js");

class UserControllers{
  static register(req, res ){
    UserServices.register(req.body).then((user)=>{
      const payload = {
        id: user.id,
        email: user.email,
        name: user.name,
        last_name: user.last_name,
        type_user: user.type_user,
        confirmed_account: user.confirmed_account,
      }
       return res.status(201).send(payload);
    })
    .catch((err) => res.status(409).send(err.message));
    } 
  }


module.exports = UserControllers