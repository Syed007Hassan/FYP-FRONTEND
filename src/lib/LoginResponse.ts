export interface LoginResponse {
  success: boolean;
  data: {
    jwt: string;
  };
}
