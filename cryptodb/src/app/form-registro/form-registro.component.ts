import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from '../services/dataBase.service.ts.service';
import { User } from 'c:/Users/salvador.santos/Desktop/Ejercicios/ejercicio_crypto_bd/cryptodb/src/app/interfaces/User.interface';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css'],
})
export class FormRegistroComponent implements OnInit {
  userLog: import('c:/Users/salvador.santos/Desktop/Ejercicios/ejercicio_crypto_bd/cryptodb/src/app/interfaces/User.interface').User;
  constructor(
    private dataBaseService: DataBaseService,
    private router: Router
  ) {}
  ngOnInit(): void {}

  /*   loginUser(username: string, password: string) {
    this.dataBaseService.getUserLog(username, password).subscribe(
      (user) => {
        // Si se inicia sesión correctamente, haz algo con el usuario devuelto
        console.log(user);
        console.log('bien');
        this.userLog = user;
        localStorage.setItem('nombre', username);
        localStorage.setItem('user_id', this.userLog.user_id);

        this.redireccionAtabla(this.userLog);
      },
      (error) => {
        // Si ocurre un error al iniciar sesión, muestra el mensaje de error en la consola
        console.log(error);
        console.log('mal');
      }
    );
  } */

  registro(
    username: string,
    password: string,
    fullname: string,
    birthdate: string,
    deposit: number
  ): void {
    const newUser = {
      username: username,
      password: password,
      fullname: fullname,
      birthdate: birthdate,
      deposit: deposit,
    };

    this.dataBaseService.InsertUser(newUser).subscribe(
      (response) => {
        console.log('User added successfully', response);

        localStorage.setItem('nombre', response.username);
        localStorage.setItem('user_id', response.user_id);
        this.router.navigate(['login']);

        //this.loginUser(response.username, response.password);
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }
}
