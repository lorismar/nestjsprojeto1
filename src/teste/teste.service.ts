import { Injectable } from '@nestjs/common';

@Injectable()
export class TesteService {
  metodo() {
    return 'Deu certo pra cá serviço.';
  }
}
