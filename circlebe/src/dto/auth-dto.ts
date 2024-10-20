export interface LoginDto {
  username: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  fullname: string;
  password: string;
  username?: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  password: string;
}

export interface UpdateUserDto {
  username?: string;
  email?: string;
  password?: string;
}
