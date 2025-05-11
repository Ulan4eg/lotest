import {IUser} from './IUser.ts';
import {IPhotoDTO} from '../../dto';

export interface IPost {
    readonly message: string;
    user: IUser;
    photos: IPhotoDTO[];
}
