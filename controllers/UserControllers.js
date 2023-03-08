import {
  getAllUsers,
  getOneUser, // צריך לטפל בזה
  addUser,
  deleteUser,
} from "../services/UserServices.js";
import { uesrsAllowedUpdates } from "../data/data.js";

export const addUserAuthController = async (req, res) => {
  const { username, password, email, lastname, firstname } = req.body;

  bcrypt.hash(password, 10).then((hash) => {
    UserModel.create({
      userName: username,
      password: hash,
      firstName: firstname,
      lastName: lastname,
      email: email,
    })
      .then(() => {
        res.json("User Registered");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
};

export const LoginUserAuthController = async (req, res) =>  { // working - checking if username exist in DB
  const { username, password } = req.body;

  const user = await UserModel.findOne({ userName: username });
  if (!user) res.status(400).json({ error: "User doesnt exist" }); // first checking if the user exist

    const dbPassword = user.password
    console.log(dbPassword, password)
    bcrypt.compare(password, dbPassword).then((match)=>{
      if (!match){
        res.status(400).json({error : "Wrong Username and Password combo !"}) // if user exist and password wrong
        console.log("wrong combo")
      } else {

        const accessToken = createTokens(user) // creating token
        console.log('Token'+' '+ accessToken)

        res.cookie("access-token", accessToken, { 
          maxAge: 60 * 60 * 24 * 30 * 1000,
          httpOnly: true,
          

        });

        res.json("Logged In" +" "+ "Token" +" "+accessToken); // if username & password are good
        

      } 
 
    }) 


}

export const getAllUsersController = async (req, res) => {
  try {
    const allUsers = await getAllUsers();

    res.status(200).send(allUsers);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};

export const addUserController = async (req, res) => {
  try {
    const user = req.body;

    const newUser = await addUser({ ...user });
    res.status(200).send(newUser);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
};
export const deleteUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletetUser = await deleteUser(id);
    if (!deletetUser) {
      res.status(404).send({ message: "no such User with the specified id" });
    }
    res.status(200).send(deletetUser);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e + `NO USER with this ID` });
  }
};
export const getOneUserController = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getOneUser(id);
    if (!user) {
      res.status(404).send({ message: "NO USER with this ID" });
    }
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e + `NO USER with this ID` });
  }
};

export const updateUserController = async (req, res) => {
  const updates = Object.keys(req.body);
  const isValidOperation = updates.every((update) =>
    uesrsAllowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.status(400).send({ message: "Invalid updates" });
  }

  try {
    const { id } = req.params;
    const user = await getOneUser(id);
    if (!user) {
      res.status(404).send({ message: "user does not exist" });
    }
    updates.forEach((update) => (user[update] = req.body[update]));
    await user.save();
    res.status(200).send(user);
  } catch (e) {
    console.log(e); 
    res.status(500).send({ message: e });
  }
};
     