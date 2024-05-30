import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform, ValidationPipe, ValidationError, HttpStatus } from '@nestjs/common';
import { ValidationPipeOptions } from '@nestjs/common/pipes/validation.pipe';

@Injectable()
export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super(options);

  }

  private formatErrors(validationErrors: ValidationError[]): Record<string, string[]> {
    const errors: Record<string, string[]> = {};
    validationErrors.forEach((error) => {
      if (error.constraints) {
        errors[error.property] = Object.values(error.constraints);
      }
      if (error.children && error.children.length) {
        errors[error.property] = this.formatErrors(error.children) as unknown as string[];
      }
    });
    return errors;
  }

  public createExceptionFactory() {
    return (validationErrors: ValidationError[] = []) => {
      const errors = this.formatErrors(validationErrors);
      return new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Validation failed',
        errors,
      });
    };
  }
}
