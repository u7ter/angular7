import {Role} from './role';

export class User {
  id: number;
  username: string;
  password: string;
  image: string;
  token: string;
  role: Role;
}
