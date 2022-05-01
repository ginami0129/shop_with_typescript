export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IToken {
  id: string;
}
