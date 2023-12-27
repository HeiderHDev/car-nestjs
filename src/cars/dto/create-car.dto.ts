import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    @IsString()
    brand: string;

    @IsString()
    @MinLength(3)
    model: string;

}