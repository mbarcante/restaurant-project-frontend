import { FetchUser } from "./User";
export interface LoginPayload {
  email: string;
  password: string;
};
export interface RegisterPayload extends LoginPayload {
  username: string;
  firt_name: string;
  last_name: string;
  admin?: boolean; 
};
export interface AuthResponse {
  token: string;
  user: FetchUser;
};
