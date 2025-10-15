import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeInsert, BeforeUpdate} from "typeorm";
import { Comentario } from "./Comentario";
import bcrypt from "bcrypt"

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  email: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  senha: string;

  @OneToMany(() => Comentario, (Comentario) => Comentario.user)
  comentario!: Comentario;

  private originalPassword: string;

  constructor(name: string, email: string, senha: string) {
    this.name = name;
    this.email = email;
    this.senha = senha;
    this.originalPassword = senha;
  }
  @AfterLoad()
  setOriginalPassword() {
    this.originalPassword = this.senha;
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.senha !== this.originalPassword) {
      const salt = await bcrypt.genSalt(10);
      this.senha = await bcrypt.hash(this.senha, salt);
    }
  }
}
