import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CryptoMoneda } from '../interfaces/Crypto.interface';
import { CryptosUser } from '../interfaces/User.interface';
import { DataBaseService } from '../services/dataBase.service.ts.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  nombreUserLog: string = '';
  idUserLog: string = '';
  idCoinLog: string = '';
  coins: CryptoMoneda[] = [];
  cryptosUser: MatTableDataSource<CryptosUser> =
    new MatTableDataSource<CryptosUser>();
  displayedColumns: string[] = [
    'asset',
    'icon',
    'crypto_name',
    'value',
    'stock',
    'amount',
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    private LoginService: LoginService,
    private dataBaseService: DataBaseService
  ) {}

  ngOnInit() {
    this.nombreUserLog = localStorage.getItem('nombre') || '';
    this.idUserLog = localStorage.getItem('user_id') || '';

    //console.log('idUserLog', this.idUserLog);

    this.dataBaseService
      .getTable(localStorage.getItem('user_id') || '')
      .subscribe((data) => {
        //console.log(data);
        this.cryptosUser.data = data;
      });

    //console.log('LLenando arrays');
    this.dataBaseService.getCryptos().subscribe((data) => {
      // console.log('coin', data);
      this.coins = data;
    });
  }

  ngAfterViewInit() {
    this.cryptosUser.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.cryptosUser.filter = filterValue.trim().toLowerCase();
  }
  cerrarSesion() {
    this.LoginService.logout();
    this.router.navigate(['login']);
  }

  checkName(id: string): boolean {
    console.log('dentro de checkname ');

    for (let i = 0; i < this.cryptosUser.data.length; i++) {
      console.log('name ', name);
      console.log('cryptoNmae', this.cryptosUser.data[i].crypto_id);

      if (this.cryptosUser.data[i].crypto_id == id) {
        console.log('dentro del if ');

        return true;
      }
    }

    return false;
  }

  buyCoin(crypto_id: string): void {
    const newCoin = {
      user_id: this.idUserLog,
      crypto_id: crypto_id,
      amount: 1,
    };

    this.dataBaseService.InsertWallet(newCoin).subscribe(
      (response) => {
        console.log('Coin added successfully', response);

        window.location.reload();
      },
      (error) => {
        console.error('Error adding coin', error);
      }
    );
  }
}
