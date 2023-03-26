import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PlansController } from './plans/plans.controller';
import { PlansService } from './plans/plans.service';
import { PlansModule } from './plans/plans.module';
import { MealsModule } from './meals/meals.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    PlansModule,
    MealsModule,
  ],
  controllers: [AppController, PlansController],
  providers: [AppService, PlansService],
})
export class AppModule {}
