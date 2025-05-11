import {useState} from 'react';
import {VEnterToken, VPostList} from '../components';

export function VMainScreen() {
    const [token, setToken] = useState<string>('');

    return token
        ? <VPostList token={token} />
        : <VEnterToken onEnter={setToken}/>;
}
