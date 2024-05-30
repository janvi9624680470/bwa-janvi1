import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { MongoError } from 'mongodb';

interface MongoErrorWithKeyPattern extends MongoError {
  keyPattern?: { [key: string]: number };
}

@Catch(MongoError)
export class MongooseExceptionFilter implements ExceptionFilter {
  catch(exception: MongoErrorWithKeyPattern, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';

    if (exception.code === 11000 && exception.keyPattern) {
      status = HttpStatus.CONFLICT;
      const field = Object.keys(exception.keyPattern)[0];
      message = `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      error: exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
