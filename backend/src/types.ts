export class BroDto {
  user_id: string;
  username: string;
  password: string;
  fullname: string;
  birthdate: string;
  deposit: number;
}

export class NewBroDto {
  user_id: string;
  username: string;
  password: string;
  fullname: string;
  birthdate: string;
  deposit: number;
}

export type NewUserDto = Omit<NewBroDto, "user_id">;

export class CryptoMonedaDto {
  crypto_id: string;
  crypto_name: string;
  value: number;
  icon: string;
  asset: string;
  stock: number;
}

export class WalletDto {
  user_id: string;
  crypto_id: string;
  amount: number;
}

//export type NewUserDto = Omit<UserDto, "userId">;
