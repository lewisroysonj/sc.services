export interface IUser {
  id: number;
  fullName: string;
  email: string;
  password: string;
  isActive: boolean;
  isVerified: boolean;
  roles: Roles;
  createTime: number;
}

export type Roles = 'ROLE_USER' | 'ROLE_ADMIN'