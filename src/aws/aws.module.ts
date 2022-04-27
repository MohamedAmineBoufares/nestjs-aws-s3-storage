import { Module } from '@nestjs/common';
import { AwsService } from './aws.service';
import { AwsController } from './aws.controller';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from 'aws-sdk';

@Module({
  imports: [ConfigModule],
  controllers: [AwsController],
  providers: [AwsService],
})
export class AwsModule {}
