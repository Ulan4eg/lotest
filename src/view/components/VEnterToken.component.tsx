import {JSX, useState} from 'react';
import {NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View} from 'react-native';

export interface IVEnterTokenProps {
    onEnter: (token: string) => void;
}

export function VEnterToken(props: IVEnterTokenProps): JSX.Element {
    const [tempToken, setTempToken] = useState<string>('');

    const onChangeTempToken = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setTempToken(e.nativeEvent.text);
    };

    const saveToken = () => {
        props.onEnter(tempToken);
    };

    return (
        <View>
            <Text>{'U must enter ur token!'}</Text>
            <TextInput value={tempToken} onChange={onChangeTempToken}/>
            <TouchableOpacity onPress={saveToken}>
                <Text>
                    {'SAVE TOKEN'}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
