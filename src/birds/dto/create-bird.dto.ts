import { IsInt, IsString } from "class-validator";

export class CreateBirdDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
