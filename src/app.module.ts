import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AcknowledgementModule } from './acknowledgement/acknowledgement.module';
import { CampaignModule } from './campaign/campaign.module';
import { ContactModule } from './contact/contact.module';
import { GroupModule } from './group/group.module';
import { HistoryModule } from './history/history.module';
import { MessageModule } from './message/message.module';
import { PackageModule } from './package/package.module';
import { ProfileModule } from './profile/profile.module';
import { ResourceModule } from './resource/resource.module';
import { TemplateModule } from './template/template.module';
import { TransactionModule } from './transaction/transaction.module';
import { RoleModule } from './role/role.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CheckIdMiddleware } from './middleware/check-id.middleware';
import { IdExistsMiddleware } from './middleware/id-exists.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigModule globally available
    }),
    UserModule,
    TemplateModule,
    RoleModule,
    TransactionModule,
    ResourceModule,
    ProfileModule,
    PackageModule,
    MessageModule,
    HistoryModule,
    GroupModule,
    ContactModule,
    CampaignModule,
    AcknowledgementModule,
    AuthModule,

    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'bwa' }),
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}

