import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Platão',
    email: 'platton@gmail.com',
    birthAt: new Date('1997-01-01'),
    id: 1,
    password: '$2b$10$tXOZqHpB9lP8oykftx3ctuQW50qQYwvNuE7De8q59NhI0P9dccYEe',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Socrates',
    email: 'socrates@gmail.com',
    birthAt: new Date('1997-01-01'),
    id: 2,
    password: '$2b$10$tXOZqHpB9lP8oykftx3ctuQW50qQYwvNuE7De8q59NhI0P9dccYEe',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: 'Epicteto',
    email: 'epicteto@gmail.com',
    birthAt: new Date('1997-01-01'),
    id: 3,
    password: '$2b$10$tXOZqHpB9lP8oykftx3ctuQW50qQYwvNuE7De8q59NhI0P9dccYEe',
    role: Role.Admin,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
