import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'user', schema:  }])],
  controllers: [],
  providers: [],
})
export class AuthModule {}
