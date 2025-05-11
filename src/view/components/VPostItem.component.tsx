import {JSX} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IPost} from '../types';

export interface IVPostItemProps {
    post: IPost;
}

export function VPostItem(props: IVPostItemProps): JSX.Element {

    const image = () => {
        if (!props.post.photos.length) return null;
        const img = props.post.photos[0].photo['xs'];
        return <Image style={[styles.image]} source={{uri: img.src}} height={img.height} width={img.width} />;
    };

    return (
        <View style={[styles.container]}>
          <Text style={[styles.user]}>{props.post?.user?.name}</Text>
            {image()}
            <Text style={[styles.text]}>{props.post?.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
        padding: 16,
    },
    user: {
    },
    image: {},
    text: {},
});
