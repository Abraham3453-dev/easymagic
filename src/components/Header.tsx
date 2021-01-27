import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Assets from '../assets';
import SharedStyle from '../assets/styles/SharedStyle';
import Colors from '../configs/Colors';
import * as RootNav from '../navigation/RootNavigation';
import { API_BASE } from '../services/APIConstants';
export interface HeaderProps {
    showBackButton?: boolean
    showProfilePic?: boolean
    onPressBackButton?: () => void
}
const Header = ({ showBackButton, showProfilePic, onPressBackButton }: HeaderProps) => {

    const [showPreprod, setShowPreprod] = useState(false)

    useEffect(() => {
        setShowPreprod(true)
    }, [])
    
    return (
        <View style={[Style.headerContainer]}>
            <View style={{ width: 70 }}>
                <Image
                    source={Assets.Images.logo}
                    style={Style.logo}
                    resizeMethod={'resize'}
                />
                {
                    showBackButton &&
                    <TouchableOpacity
                        style={[Style.backButton]}
                        onPress={() => {
                            if (onPressBackButton) {
                                onPressBackButton()
                                return
                            }
                            RootNav.goBack();
                        }}
                    >
                        <Icon
                            name={"long-arrow-left"}
                            // style={[Style.backIcon]}
                            size={30}
                            color={Colors.orange}
                        />
                    </TouchableOpacity>
                }
                
            </View>
            <View style={{ paddingTop: 20 }}>
                {
                    (API_BASE === 'http://easymagic.preprod.dpaa.fr') &&
                    <Text style={[SharedStyle.textWhite]}>
                        Préproduction
                    </Text>
                }
            </View>
            <View style={{ width: 70 }}>
                {
                    showProfilePic &&
                    <TouchableOpacity style={[Style.profilePicButton]}>
                        <Image
                            source={Assets.Images.profilePlaceholder}
                            style={Style.profilePic}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 10,
    },
    leftContent: {
        alignItems: 'flex-start'
    },
    centerContent: {
        flex: 1,
        alignItems: 'center'
    },
    rightContent: {
        alignItems: 'flex-end'
    },
    logo: {
        marginLeft: 20,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        // backgroundColor: Colors.white
    },
    backButton: {
        paddingLeft: 20,
        // backgroundColor: Colors.white
    },
    backIcon: {},
    profilePicButton: {
        // paddingRight: 20
        marginRight: 20
    },
    profilePic: {
        width: 50,
        height: 50
    },
})

export default Header;