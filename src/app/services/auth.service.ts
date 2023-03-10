import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly auth: AngularFireAuth) {}

  createUser(email: string, password: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => console.log(res));
  }
}
