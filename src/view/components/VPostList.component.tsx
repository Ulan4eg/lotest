import {JSX} from 'react';
import {Text} from 'react-native';

export interface IVPostListProps {
    token: string
}

export function VPostList(props: IVPostListProps): JSX.Element {
    return (
        <>
            <Text>{'VPOstList'} {props.token}</Text>
        </>
    );
}
