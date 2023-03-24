import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CryptosUser, User } from '../interfaces/User.interface';
import { CryptoMoneda } from '../interfaces/Crypto.interface';
import { Wallet } from '../interfaces/wallet';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService {
  constructor(private http: HttpClient) {}

  // Método que devuelve un observable con todos los cómics
  getUserLog(username: string, password: string): Observable<User> {
    // Hacemos una petición GET a la URL del servidor local
    return this.http.get<User>(
      'http://localhost:8532/bros/login/' + username + '/' + password
    );
  }

  InsertUser(user: any): Observable<User> {
    return this.http.post<User>('http://localhost:8532/bros/add', user);
  }

  getTable(user_id: string): Observable<CryptosUser[]> {
    // Hacemos una petición GET a la URL del servidor local
    return this.http.get<CryptosUser[]>(
      'http://localhost:8532/bros/getTable/' + user_id
    );
  }

  getCryptos(): Observable<CryptoMoneda[]> {
    console.log('service de getCryptos');

    // Hacemos una petición GET a la URL del servidor local
    return this.http.get<CryptoMoneda[]>('http://localhost:8532/cryptos/all/');
  }

  InsertWallet(wallet: any): Observable<Wallet> {
    console.log('comprando coin');
    return this.http.post<Wallet>('http://localhost:8532/wallet/add', wallet);
  }
}
