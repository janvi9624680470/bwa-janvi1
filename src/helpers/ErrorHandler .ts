import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorHandler {
  static handle(error: any, customMessage: string) {
    const status = error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = customMessage || 'Internal server error';
    const responseError = error.response || error.message;

    throw new HttpException(
      {
        statusCode: status,
        message,
        error: responseError,
      },
      status,
    );
  }
}
