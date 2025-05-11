import {IIdentify} from './base.dto.ts';
import {IImageDTO} from './image.dto.ts';

export interface IPhotoDTO extends IIdentify {
    readonly photo: {
        [key: string]: IImageDTO;
    }
}
