import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AwsService } from './aws.service';
import { Express } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('aws')
export class AwsController {
  constructor(private readonly awsService: AwsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.awsService.uploadPublicFile(file.buffer, file.originalname);
  }

  @Delete('/:key')
  async deleteFile(@Param('key') fileKey: string) {
    return this.awsService.deletePublicFile(fileKey);
  }
}
