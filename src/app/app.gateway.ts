import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

const port = 4231;

@WebSocketGateway(port, { cors: true })
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('AppGateway');

  @WebSocketServer() wss: Server;

  constructor() {}

  afterInit(server: Server): void {
    this.logger.log(`App Gateway initialized on Port ${port}...`);
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(`Client connected: ${client.id}...`);
  }

  handleConnection(client: Socket, ...args: any[]): void {
    this.logger.log(`Client disconnected: ${client.id}...`);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): WsResponse<string> | void {
    this.wss.emit('msgToServer', payload);

    // client.emit('msgToClient', payload);
    // return {
    //   event: 'msgToClient',
    //   data: 'Hello world!',
    // };
  }
}
