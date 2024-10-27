const express = require("express");
const User = require("../models/users");
const Customer = require("../models/customers"); 
const Seller = require("../models/sellers")
const { createtoken } = require("../config/tokensConfig");
const router = express.Router();

router.post("/register", async function (req, res) {
  const { name, lastName, email, password, typeUser, address, storeName, phoneNumber} = req.body;

  if (!email || !name || !lastName || !password || !typeUser) {
    return res.status(400).json({ error: "Incomplete data" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ error: "There is already an account associated with this email" });
    }

    const payload = {
      email,
      name,
      lastName,
      typeUser,
    };

    const token = createtoken(payload, "5d");


    const newUser = await User.create({
      email,
      name,
      last_name: lastName,
      password,
      token,
      type_user: typeUser,
      confirmed_account: true
    });


    if (typeUser === "client") {
      await Customer.create({
        user_id: newUser.id, 
        is_enabled: true, 
        address: address, 
        phone_number: phoneNumber, 
        payment_preference: null,
      });
    }
    if (typeUser === "seller") {
      await Seller.create({
        user_id: newUser.id,
        store_name: storeName,
        is_enabled: true, 
      })
    }


    const responsePayload = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
      last_name: newUser.last_name,
      type_user: newUser.type_user,
      confirmed_account: newUser.confirmed_account,
    };

    return res.status(201).json(responsePayload);

  } catch (err) {

    return res.status(500).json({ error: `Error during registration: ${err.message}` });
  }
});

module.exports = router;
