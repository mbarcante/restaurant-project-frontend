import { FetchUser } from "./User";
export interface LoginPayload {
  email: string;
  password: string;
};
export interface RegisterPayload extends LoginPayload {
  username: string;
  firstName: string;
  lastName: string;
  admin?: boolean; 
};
export interface AuthResponse {
  token: string;
  user: FetchUser;
};
