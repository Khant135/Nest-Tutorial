import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { ReportsModule } from './reports/reports.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity.js';
import { Report } from './reports/reports.entity.js';

@Module({
  imports: [UsersModule, ReportsModule, TypeOrmModule.forRoot({
    type: 'better-sqlite3', 
    database: 'db.sqlite',
    entities: [User, Report],
    synchronize: true,  
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
