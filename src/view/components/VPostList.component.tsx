import {JSX, useEffect, useState} from 'react';
import {FlatList, ListRenderItemInfo, Text, TouchableOpacity} from 'react-native';
import {VPostItem} from './VPostItem.component.tsx';
import {IPostsFeedResponseDTO} from '../../dto';
import {IPost} from '../types';
import {urlList} from '../../config/base.ts';

export interface IVPostListProps {
    token: string
    onDeleteToken: () => void;
}

export function VPostList(props: IVPostListProps): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [count, setCount] = useState<number>(3);
    const [list, setList] = useState<IPost[]>([]);

    useEffect(() => {
        fetch(`${urlList.posts.feed}?space=null&content=null&search=&offset=${offset}&count=${count}&sort=0`, {
            method: 'get',
            headers: new Headers({
                'Authorization': `Bearer ${props.token}`,
                'Content-Type': 'application/json',
            }),
        }).then(response => response.json()).then((response: IPostsFeedResponseDTO) => {
            setLoading(false);
            setList([...list, ...response.data.items.map(item => ({
                ...item,
                user: { ...item.user, name: `${item.user.firstName} ${item.user.lastName}`},
            }))]);
        });
    }, [offset, count, props.token]);

    if (loading) {
        return <Text>{'LOADING ....'}</Text>;
    }

    const _itemRender = (item: ListRenderItemInfo<IPost>) => {
        return <VPostItem post={item.item} />;
    };

    const _onEndReached = () => {
        setOffset(offset + count);
    };

    const _keyExtractor = (item: IPost) => {
       return item.id.toString();
    };

    return (
        <>
            <Text>{'Ur token: '} {props.token.substring(0, 10)}</Text>
            <TouchableOpacity onPress={props.onDeleteToken}>
                <Text>{'DELETE TOKEN'}</Text>
            </TouchableOpacity>
            <FlatList data={list} renderItem={_itemRender} onEndReached={_onEndReached} keyExtractor={_keyExtractor}/>
        </>
    );
}
