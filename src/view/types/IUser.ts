import {IUserDTO} from '../../dto';

export interface IUser extends IUserDTO {
    readonly name: string;
}
