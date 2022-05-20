import { userInfo } from "os";
import { EntityRepository, getRepository, Repository } from "typeorm";
import { User } from "./users.entity";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async getById(id) {
    const userFoundById = await this.findOne({
      where: { id }
    });
    return userFoundById;
  }

  async findByEmail(email: string) {
    const res = await this.findOne({ where:{ email: email } });
    return res;
  }

  async createUser(user: User) {
    const res = await user.save();;
    return res;
  }
}
