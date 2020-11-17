export interface IFullUser {
  email: string;
  first_name: string;
  last_name: string;
  locale: string;
  password: string;
  password_confirmation: string;
}

export interface IUserCredentials {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  locale: string;
}

export interface IEmailAndPassword {
  email: string;
  password: string;
}

export interface IRequestCredentials {
  token: string;
  client: string;
  uid: string;
}
