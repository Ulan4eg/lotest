import {JSX, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, TouchableOpacity} from 'react-native';
import {VPostItem} from './VPostItem.component.tsx';
import {IPostsFeedResponseDTO} from '../../dto';
import {IPost} from '../types';

export interface IVPostListProps {
    token: string
    onDeleteToken: () => void;
}

export function VPostList(props: IVPostListProps): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [list, setList] = useState<IPost[]>([]);

    useEffect(() => {
        fetch('https://api.lo.ink/v1/posts/feed?space=null&content=null&search=&offset=0&count=50&sort=0', {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${props.token}`,
                'Content-Type': 'application/json',
            }),
        }).then(response => response.json()).then((response: IPostsFeedResponseDTO) => {
            setLoading(false);
            setList(response.data.items.map(item => ({
                ...item,
                user: { ...item.user, name: `${item.user.firstName} ${item.user.lastName}`},
            })));
        });
    });

    if (loading) {
        return <Text>{'LOADING ....'}</Text>;
    }

    const _itemRender = (item: ListRenderItemInfo<IPost>) => {
        return <VPostItem post={item.item} />;
    };

    return (
        <>
            <Text>{'Ur token: '} {props.token.substring(0, 10)}</Text>
            <TouchableOpacity onPress={props.onDeleteToken}>
                <Text>{'DELETE TOKEN'}</Text>
            </TouchableOpacity>
            <FlatList data={list} renderItem={_itemRender}/>
        </>
    );
}
