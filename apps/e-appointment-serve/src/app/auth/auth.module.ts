import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schemas/user.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'user', schema: userSchema }
  ])],
  controllers: [],
  providers: [],
})
export class AuthModule {}
