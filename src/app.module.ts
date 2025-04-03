import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { DocumentModule } from './document/document.module';
import { User } from './users/user.entity';
import { Document } from './document/document.entity';
import { AuthModule } from './auth/auth.module';
import { IngestionModule } from './ingestion/ingestion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User, Document],
      synchronize: true, 
    }),
    UsersModule,
    DocumentModule,
    AuthModule,
    IngestionModule,
    UsersModule,
  ],
})
export class AppModule {}

