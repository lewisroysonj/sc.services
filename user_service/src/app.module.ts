import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppRouterModule } from './app-router.module';
import { typeOrmAsyncConfig } from './config/type-orm/typeorm.config';
import { logger } from './middlewares/logger.middleware';
import { AdminModule } from './modules/admin/admin.module';
import { GuestModule } from './modules/guest/guest.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    AppRouterModule,
    AdminModule,
    GuestModule
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes()
  }
}
