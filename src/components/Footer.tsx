import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import * as RootNav from '../navigation/RootNavigation';

import I18n from '../configs/I18n';
import Colors from '../configs/Colors';
import assets from '../assets';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const tabs = [
  {
    id: 'afedc0001',
    title: I18n.t('monCompte'),
    icon: assets.Icons.myAccount,
    routeName: 'Account',
  },
  {
    id: 'afedc0002',
    title: I18n.t('mesBoites'),
    icon: assets.Icons.myBoxes,
    routeName: 'MyBoxes',
  },
  {
    id: 'afedc0003',
    title: I18n.t('listeBoite'),
    icon: assets.Icons.listBoxes,
    routeName: 'ListBoxes',
  },
  {
    id: 'afedc0004',
    title: I18n.t('addBox'),
    icon: assets.Icons.addBox,
    routeName: 'AddBox',
  },
];

export interface FooterProps {
  navigation?: any
}
const Footer = ({}: FooterProps) => {
  const [activeTab, setActiveTab] = React.useState(tabs[1].id);
  const onTabPress = (tab: any) => {
    setActiveTab(tab.id);
    RootNav.navigate(tab.routeName);
  };
  React.useEffect(() => {
    RootNav.addListener('state', (stateChange) => {
      console.log('State change : ', stateChange);
      console.log('Nav state : ', RootNav.getRootState());
      const navState = RootNav.getRootState()
      if (activeTab !== tabs[navState.index].id) {
        setActiveTab(tabs[navState.index].id)
      }
    })
  }, [])

  return (
    <View style={Style.footerContainer}>
      {tabs.map((tab, indexTab) => {
        return (
          <TouchableOpacity
            key={tab.id}
            style={Style.tabItem}
            onPress={() => {
              onTabPress(tab);
            }}>
            <Image
              source={tab.icon}
              style={[
                activeTab === tab.id ? Style.tabIconActive : Style.tabIcon,
              ]}
              resizeMethod={'scale'}
              resizeMode={'contain'}
            />
            <Text
              style={[
                activeTab === tab.id ? Style.tabLabelActive : Style.tabLabel,
              ]}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Style = StyleSheet.create({
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.dark,
  },
  tabItem: {
    alignItems: 'center',
    padding: 7,
  },
  tabIcon: {
    width: 60,
    height: 20,
    tintColor: Colors.white + '44',
  },
  tabIconActive: {
    width: 60,
    height: 20,
    tintColor: Colors.white,
  },
  tabLabel: {
    color: Colors.white + '44',
    fontSize: 9,
  },
  tabLabelActive: {
    color: Colors.white,
    fontSize: 8,
    fontWeight: 'bold',
  },
});

export default Footer;
