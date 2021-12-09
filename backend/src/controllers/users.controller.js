const usersController = {};

const User = require("../models/User");


usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
  };

usersController.getUserById = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  };

usersController.createUser = async (req, res) => {
    const { name, userName } = req.body;
    const newUser = new User({
      name,
      userName
    });
    await newUser.save();
  
    res.json({ message: "User saved" });
  };

usersController.updateUser = async (req, res) => {
  const { name, userName } = req.body;
  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
        name,
        userName
    }
  );

  res.json({ message: "User Updated" });
};

usersController.deleteUser = async (req, res) => {
    const user = await User.findOneAndDelete({ _id: req.params.id });
  
    res.json({ message: "User deleted" });
  };


module.exports = usersController;