export interface IFullUser {
  email: string;
  first_name: string;
  last_name: string;
  locale: string;
  password: string;
  password_confirmation: string;
}

export interface ILoggedUser {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  locale: string;
}
