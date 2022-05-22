import {Router} from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import { User } from './users.entity'
import { UserRepository } from './users.repository'

export const userRoutes = Router()

//Get Users
userRoutes.get('/', async (req, res) => {
  const userRepository = getRepository(User);
  const userList = await userRepository.find();

  res.json(userList);
});

//Get User by id
userRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;

  const userRepository = getCustomRepository(UserRepository);
  const userFoundById = await userRepository.getById(id);
  res.json(userFoundById);
});

//Create
userRoutes.post("/", async (req, res) => {
    const newUser : User = new User(req.body)
    console.log(newUser)
    res.send(await newUser.save())
})

//Update
userRoutes.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, username, email, password } = req.body;

  const userRepository = getCustomRepository(UserRepository);

  const userFoundById = await userRepository.getById(id);
  if(!userFoundById) {
    return res.status(404).json({ message: "User not found" });
  }

  if(name) { userFoundById.name = name }
  if(username) { userFoundById.username = username }
  if(email) { userFoundById.email = email }
  if(password) { userFoundById.password = password }

  res.send(await userFoundById.save())
})

//Delete
userRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const userRepository = getRepository(UserRepository);
  await userRepository.delete(id);
  res.status(204).send("");
})
