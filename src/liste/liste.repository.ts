import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ListeInterface } from './interface/liste.interface';
import { Liste, ListeDocument } from './schema/liste.schema';

@Injectable()
export class ListeRepository {
  constructor(
    @InjectModel(Liste.name) private listeModel: Model<ListeDocument>,
  ) {}

  setElementInListe(elementListe: ListeInterface) {
    const listeModel = new this.listeModel(elementListe);
    listeModel.save();
  }

  async getAllListe(): Promise<Liste[]> {
    return this.listeModel.find();
  }

  async getElementListe(id: Types.ObjectId): Promise<Liste> {
    return this.listeModel.findById(id);
  }

  async udpateListe(id: Types.ObjectId, elementListe: ListeInterface) {
    await this.listeModel.updateOne({ _id: id }, elementListe);
  }

  async deleteElementListe(id: Types.ObjectId) {
    await this.listeModel.deleteOne({ _id: id });
  }

  async deleteAll() {
    await this.listeModel.deleteMany({}, {}, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
}
