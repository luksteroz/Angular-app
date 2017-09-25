export interface AuthServiceInterface {
  isAuthenticated(): void;
  logIn (loginData): void;
  logOut (): void;
}
