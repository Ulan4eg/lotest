import {IIdentify} from './base.dto.ts';
import {IUserDTO} from './user.dto.ts';
import {IPhotoDTO} from './photo.dto.ts';

export interface IPostDTO extends IIdentify {
    readonly message: string;
    readonly user: IUserDTO;
    readonly photos: IPhotoDTO[];
}
