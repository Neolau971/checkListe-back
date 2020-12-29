import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateElementListeDto } from './dto/createListe.dto';
import { UpdateElementListeDto } from './dto/updateListe.dto';
import { ListeInterface } from './interface/liste.interface';
import { ListeService } from './liste.service';

@Controller('liste')
export class ListeController {
  constructor(private readonly listeService: ListeService) {}

  @Post()
  setElementInListe(@Body() createElementListeDto: CreateElementListeDto) {
    this.listeService.setElementInListe(createElementListeDto);
  }

  @Get()
  getAllListe(): Promise<ListeInterface[]> {
    return this.listeService.getAllListe();
  }

  @Get(':id')
  getElementListe(@Param('id') id: Types.ObjectId): Promise<ListeInterface> {
    return this.listeService.getElementListe(id);
  }

  @Put(':id')
  udpateListe(
    @Param('id') id: Types.ObjectId,
    @Body() updateElementListeDto: UpdateElementListeDto,
  ) {
    this.listeService.udpateListe(id, updateElementListeDto);
  }

  @Delete(':id')
  deleteElementListe(@Param('id') id: Types.ObjectId) {
    this.listeService.deleteElementListe(id);
  }

  @Delete()
  deleteAll() {
    this.listeService.deleteAll();
  }
}
