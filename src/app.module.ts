import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AwsModule } from './aws/aws.module';

@Module({
  imports: [ConfigModule.forRoot(), AwsModule],
})
export class AppModule {}
