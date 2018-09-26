import { IRoom } from '../../definition/rooms';
import { IUser } from '../../definition/users';

export interface IRoomBridge {
    create(room: IRoom, appId: string): Promise<string>;
    getById(roomId: string, appId: string): Promise<IRoom>;
    getByName(roomName: string, appId: string): Promise<IRoom>;
    getCreatorById(roomId: string, appId: string): Promise<IUser>;
    getCreatorByName(roomName: string, appId: string): Promise<IUser>;
    update(room: IRoom, appId: string): Promise<void>;
}