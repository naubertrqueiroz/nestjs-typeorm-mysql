import { Role } from '../enums/role.enum';
import { UpdatePutUserDTO } from '../user/dto/update-put-user.dto';

export const updatePutUserDTO: UpdatePutUserDTO = {
  birthAt: '1997-01-01',
  email: 'platton@gmail.com',
  name: 'Platão',
  password: '123546',
  role: Role.User,
};
