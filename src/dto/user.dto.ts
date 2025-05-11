import {IIdentify} from './base.dto.ts';

export interface IUserDTO extends IIdentify {
    readonly firstName: string;
    readonly lastName: string;
}
