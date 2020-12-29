import { IsNotEmpty, IsString } from 'class-validator';

export class CreateElementListeDto {
  @IsString()
  @IsNotEmpty()
  elementListe: string;
}
