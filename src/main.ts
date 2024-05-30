import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, HttpException, HttpStatus, ValidationPipe } from '@nestjs/common';
import { CustomValidationPipe } from './pips/custom-validation.pipe';
import { MongooseExceptionFilter } from './filters/mongoose-exception.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { isValidObjectId } from 'mongoose';
import { IdExistsMiddleware } from './middleware/id-exists.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);



  //  this is for validation error array 
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (validationErrors = []) => {
      const errors = validationErrors.map(error => ({
        field: error.property,
        messages: Object.values(error.constraints),
      }));
      return new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Validation failed',
          errors,
        },
        HttpStatus.BAD_REQUEST,
      );
    },
  }));


    //  this is for validation error role object 
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true, 
      whitelist: true,
      forbidNonWhitelisted: true,
        exceptionFactory: (errors) => {
          const errorMessages = errors.map(
            error => Object.values(error.constraints || {}).join(', '),
          );
          return new BadRequestException(errorMessages);
        },
       
      }),
    );




  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('The API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  
  await app.listen(3000);
}
bootstrap();



