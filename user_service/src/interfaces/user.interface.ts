export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  isVerified: boolean;
  roles: JSON;
  createTime: number;
}
