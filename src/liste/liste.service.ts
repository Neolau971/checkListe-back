import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { ListeInterface } from './interface/liste.interface';
import { ListeRepository } from './liste.repository';

@Injectable()
export class ListeService {
  constructor(private readonly listeRepository: ListeRepository) {}

  setElementInListe(elementListe: ListeInterface) {
    this.listeRepository.setElementInListe(elementListe);
  }

  getAllListe(): Promise<ListeInterface[]> {
    return this.listeRepository.getAllListe();
  }

  getElementListe(id: Types.ObjectId): Promise<ListeInterface> {
    return this.listeRepository.getElementListe(id);
  }

  udpateListe(id: Types.ObjectId, elementListe: ListeInterface) {
    this.listeRepository.udpateListe(id, elementListe);
  }

  deleteElementListe(id: Types.ObjectId) {
    this.listeRepository.deleteElementListe(id);
  }

  deleteAll() {
    this.listeRepository.deleteAll();
  }
}
