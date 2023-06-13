import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const port = 3001;

  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    logger.log(`Your server listening on Port ${port}...`);
  });
}
bootstrap();
/* 
    ? Upgrade Nestjs version 8 ---> 9
    $ npm install -g @nestjs/cli npm-check-updates
    $ nest update
    $ npm-check-updates '/@nestjs*_/' -u // remove the_

    ? Install websockets dependences;
    $ npm i --save @nestjs/websockets @nestjs/platform-socket.io

    ? Frontend is angular-websocket
*/
