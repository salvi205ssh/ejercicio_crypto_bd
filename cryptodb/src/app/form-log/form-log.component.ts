import { User } from './../interfaces/User.interface';
import { DataBaseService } from '../services/dataBase.service.ts.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-log',
  templateUrl: './form-log.component.html',
  styleUrls: ['./form-log.component.css'],
})
export class FormLogComponent implements OnInit {
  userLog: User;

  constructor(
    private dataBaseService: DataBaseService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  loginUser(username: string, password: string) {
    this.dataBaseService.getUserLog(username, password).subscribe(
      (user) => {
        // Si se inicia sesión correctamente, haz algo con el usuario devuelto
        console.log(user);
        console.log('bien');
        this.userLog = user;
        localStorage.setItem('nombre', username);
        localStorage.setItem('user_id', this.userLog.user_id);

        this.redireccionAtabla();
      },
      (error) => {
        // Si ocurre un error al iniciar sesión, muestra el mensaje de error en la consola
        console.log(error);
        console.log('mal');
      }
    );
  }

  redireccionAtabla() {
      console.log('redireccion a tabla');
      this.router.navigate(['tabla']);
    
  }

  redireccionRegistro() {
    console.log('redireccionRegistro');
    this.router.navigate(['registro']);
  }
}
