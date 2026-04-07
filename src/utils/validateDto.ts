import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

export async function validateDto<T>(dtoClass: new () => T, body: any): Promise<void> {
  const dtoObject = plainToInstance(dtoClass, body);
  const errors = await validate(dtoObject as Record<string, any>);
 
  if (errors.length > 0) {
    // Grab the first validation error message to return to the user
    const firstError = Object.values(errors[0].constraints || {})[0];
    throw new Error(firstError);
  }
}
