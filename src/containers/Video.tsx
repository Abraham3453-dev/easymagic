import React from 'react';
import { View } from 'react-native';

export interface VideoProps {}
interface VideoState {}

class Video extends React.Component<VideoProps, VideoState> {
    constructor(props: VideoProps) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <View></View>
        )
    }
}

export default Video;