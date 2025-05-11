import {IUser} from './IUser.ts';
import {IIdentify, IPhotoDTO} from '../../dto';

export interface IPost extends IIdentify {
    readonly message: string;
    user: IUser;
    photos: IPhotoDTO[];
}
