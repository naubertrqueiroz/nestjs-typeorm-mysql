import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  birthAt: '1997-01-01',
  email: 'platton@gmail.com',
  name: 'Platão',
  password: '123546',
  role: Role.User,
};
