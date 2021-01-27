import React from 'react';
import { View } from 'react-native';

export interface AboutProps {}
interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <View></View>
        )
    }
}

export default About;