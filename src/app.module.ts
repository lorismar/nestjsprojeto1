import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TesteController } from './teste/teste.controller';
import { TesteService } from './teste/teste.service';
import { OrdersModule } from './orders/orders.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [OrdersModule,
            SequelizeModule],
  controllers: [AppController, TesteController],
  providers: [AppService, TesteService],
})
export class AppModule {}
