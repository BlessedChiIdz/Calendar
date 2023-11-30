import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {ValidationException} from "../exception/validation.exception";
import {constants} from "os";

@Injectable()
export class ValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const obj = plainToClass(metadata.metatype,value);
        const err = await validate(obj);

        if(err.length){
            let messages = err.map(err=>{
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            })
             throw new ValidationException(messages);
        }
        return value
    }
    
}