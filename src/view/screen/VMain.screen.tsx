import {useState} from 'react';
import {VEnterToken, VPostList} from '../components';

export function VMainScreen() {
    const [token, setToken] = useState<string>('');

    const deleteToken = () => {
        setToken('');
    };

    return token
        ? <VPostList token={token} onDeleteToken={deleteToken} />
        : <VEnterToken onEnter={setToken}/>;
}
