export type SignUpBody = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export type SignUpResponseError = {
  message: string;
  details?: string[];
};

export type LoginBody = {
  email: string;
  password: string;
};

export type RefreshToken = {
  refreshToken: string;
};

export type AccessToken = {
  accessToken: string;
};
