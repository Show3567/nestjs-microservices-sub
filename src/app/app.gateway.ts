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

@WebSocketGateway()
export class AppGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  private logger = new Logger('AppGateway');

  // @WebSocketServer() wss: Server;

  constructor() {}

  afterInit(server: any): void {
    this.logger.log('App Gateway initialized.');
  }

  handleDisconnect(client: any): void {}

  handleConnection(client: any, ...args: any[]): void {}

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): WsResponse<string> | void {
    // this.wss.emit('msgToClient', payload);
    // client.emit('msgToClient', payload);
    return {
      event: 'msgToClient',
      data: 'Hello world!',
    };
  }
}
