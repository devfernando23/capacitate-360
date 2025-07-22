import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarios = [
    { email: 'admin@capacitate.com', password: 'flavio123' },
    { email: 'instructor@capacitate.com', password: 'pedro456' },
    { email: 'alumno@capacitate.com', password: 'salvador789' }
  ];

  private isLogged = false;

  login(email: string, password: string): boolean {
    const usuarioValido = this.usuarios.find(
      u => u.email === email && u.password === password
    );
    this.isLogged = !!usuarioValido;
    return this.isLogged;
  }

  logout(): void {
    this.isLogged = false;
  }

  isAuthenticated(): boolean {
    return this.isLogged;
  }
}
