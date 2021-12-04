import { TesteService } from './teste.service';
import { AppService } from './../app.service';
import { Controller, Get } from '@nestjs/common';

@Controller('teste')
export class TesteController {
  constructor(private service: TesteService) {}

  @Get()
  acao() {
    return this.service.metodo();
  }
}
