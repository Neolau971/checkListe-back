import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListeModule } from './liste/liste.module';

@Module({
  imports: [
    ListeModule,
    MongooseModule.forRoot('mongodb://localhost/checkListeDb'),
  ],
})
export class AppModule {}
