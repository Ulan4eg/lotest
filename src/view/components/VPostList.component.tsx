import {JSX, useEffect, useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';

export interface IVPostListProps {
    token: string
    onDeleteToken: () => void;
}

export type IPostsFeedResponseDTO = {
    readonly data: {
        readonly count: number;
        readonly items: any[];
    }
}

export type IPostDTO = {
    id: number;
    message: string;
    user: {
        id: number;
    }
}

export function VPostList(props: IVPostListProps): JSX.Element {
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ list, setList ] = useState<IPostDTO[]>([]);

    useEffect(() => {
        fetch('https://api.lo.ink/v1/posts/feed?space=null&content=null&search=&offset=0&count=50&sort=0', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${props.token}`,
                'Content-Type': 'application/json',
            }),
        }).then(response => response.json()).then((response: IPostsFeedResponseDTO) => {
            setLoading(false);
            setList(response.data.items);
        });
    });

    if (loading) {
        return <Text>{'LOADING ....'}</Text>;
    }

    return (
        <>
            <Text>{'Ur token: '} {props.token.substring(0,10)}</Text>
            <TouchableOpacity onPress={props.onDeleteToken}>
                <Text>{'DELETE TOKEN'}</Text>
            </TouchableOpacity>
            <Text>{list.length}</Text>
        </>
    );
}
