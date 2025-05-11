import {IPostDTO} from './post.dto.ts';

export interface IPostsFeedResponseDTO {
    readonly data: {
        readonly count: number;
        readonly items: IPostDTO[];
    }
}
