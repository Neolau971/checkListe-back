import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ListeDocument = Liste & Document;

@Schema()
export class Liste {
  @Prop({ type: String, required: true })
  elementListe: string;
}

export const ListeSchema = SchemaFactory.createForClass(Liste);
