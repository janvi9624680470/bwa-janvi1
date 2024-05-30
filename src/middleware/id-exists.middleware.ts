// id-exists.middleware.ts

import { Injectable, NestMiddleware, HttpStatus, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IdExistsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;
    if (!id) {
      throw new HttpException('ID is required', HttpStatus.BAD_REQUEST);
    }
    next();
  }
}


