import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class UpdateElementListeDto {
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  elementListe: string;
}
