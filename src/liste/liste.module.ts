import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ListeController } from './liste.controller';
import { ListeRepository } from './liste.repository';
import { ListeService } from './liste.service';
import { Liste, ListeSchema } from './schema/liste.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Liste.name, schema: ListeSchema }]),
  ],
  controllers: [ListeController],
  providers: [ListeService, ListeRepository],
})
export class ListeModule {}
