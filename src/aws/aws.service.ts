import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class AwsService {
  constructor(private configService: ConfigService) {}

  bucketName = this.configService.get('AWS_BUCKET_NAME');
  s3 = new S3({
    accessKeyId: this.configService.get('ACCESS_ID'),
    secretAccessKey: this.configService.get('AWS_SECRET_KEY'),
  });

  async uploadPublicFile(dataBuffer: Buffer, filename: string) {
    try {
      const uploadResult = await this.s3
        .upload({
          Bucket: this.bucketName,
          Body: dataBuffer,
          Key: `${filename}`,
          ACL: 'public-read',
          ContentDisposition: 'inline',
        })
        .promise();

      return uploadResult;
    } catch (error) {
      console.log(error);
    }
  }

  async deletePublicFile(fileKey: string) {
    try {
      const deletedFile = await this.s3
        .deleteObject({
          Bucket: this.bucketName,
          Key: fileKey,
        })
        .promise();

      return deletedFile;
    } catch (error) {
      console.log(error);
    }
  }
}
