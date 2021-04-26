import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersModule } from './customers/customers.module';
import { ItemsModule } from './items/items.module';


@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql', // 'code first' approach => code typeScript => auto gen typeDefs
      sortSchema: true // Sort the schema lexicographically,
    }),
    MongooseModule.forRoot(
      'mongodb://127.0.0.1:27017/nest',
      {
        useCreateIndex: true
      }),
    // MongooseModule.forRootAsync({
    //   useFactory: () => ({
    //     uri: 'mongodb://127.0.0.1:27017/nest',
    //     useNewUrlParser: true,
    //     useFindAndModify: false,
    //     useCreateIndex: true
    //   }),
    // }),
    ItemsModule,
    BooksModule,
    CustomersModule,
  ],
})
export class AppModule {}
