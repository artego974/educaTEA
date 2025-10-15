import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import bcrypt from "bcrypt";
import { User } from "../models/User";

const UserRepo = AppDataSource.getRepository(User);

export class UserController {
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const numericId = Number(id);

    if (!id || isNaN(numericId)) {
      res.status(400).json({ mensagem: "ID inválido ou ausente." });
      return;
    }

    try {
      const user = await UserRepo.findOneBy({ id: numericId });
      if (!user) {
        res.status(404).json({ mensagem: "Usuário não encontrado!" });
        return;
      }
      res.status(200).json(user);
      return;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      res.status(500).json({ mensagem: "Erro ao buscar usuário." });
      return;
    }
  }

  async list(req: Request, res: Response) {
    try {
      const users = await UserRepo.find();
      return res.status(200).json(users);
    } catch (error) {
      console.error("Erro ao listar usuários:", error);
      return res.status(500).json({ mensagem: "Erro ao listar usuários." });
    }
  }

  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    if (name == "" || password == "" || email == "") {
      res.status(400).json({ messagem: "Preencha todos os campos!" });
      return;
    } else {
      const newUser = new User(name, email, password);
      const user = UserRepo.create(newUser);
      await UserRepo.save(user);
      res.status(201).json(user);
      return;
    }
  }

  async loginUser(req: Request, res: Response) {
    const { email, password } = req.body;

    // Verifica se os campos foram preenchidos
    if (!email || !password) {
     res.status(400).json({ message: "Email e senha são necessarios." });
     return;
    }

    try {
      // Busca o usuário no banco pelo email
      const user = await UserRepo.findOneBy({ email });

      if (!user) {
         res.status(401).json({ message: "Usuário não encontrado." });
         return;
      }

      // Compara a senha informada com o hash do banco
      const isPasswordValid = await bcrypt.compare(password, user.senha);

      if (!isPasswordValid) {
         res.status(401).json({ message: "Senha inválida." });
         return;
      }

      // Remove a senha do retorno
      const { senha: _, ...userWithoutPassword } = user;

      // Retorna apenas os dados do usuário
       res.status(200).json({message: "Login realizado com sucesso.",user: userWithoutPassword,});
       return;
    } catch (error) {
      console.error("Erro ao logar usuário:", error);
       res.status(500).json({ message: "Erro interno do servidor." });
       return;
    }
  }
}
