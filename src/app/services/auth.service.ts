import { Injectable } from '@angular/core';
import {
	Auth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut
} from '@angular/fire/auth';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	public currentUser?: any;
	public isAuthenticated = false;
	constructor(private auth: Auth) {}

	async register({ email, password }) {
		try {
			const user = await createUserWithEmailAndPassword(this.auth, email, password);
			this.currentUser = user.user;
			this.isAuthenticated = true;
			return user;
		} catch (e) {
			return null;
		}
	}

	async login({ email, password }) {
		try {
			const user = await signInWithEmailAndPassword(this.auth, email, password);
			this.currentUser = user.user;
			sessionStorage.setItem('userLogged', this.currentUser.email);
			sessionStorage.setItem('userId', this.currentUser.uid);
			this.isAuthenticated = true;
			return user;
		} catch (e) {
			return null;
		}
	}

	logout() {
		sessionStorage.clear();
		this.isAuthenticated = false;
		return signOut(this.auth);
	}

}
