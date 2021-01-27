import React from 'react';
import {Text, View} from 'react-native';
import CContainer from '../components/CContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';

export interface ListBoxesProps {}
interface ListBoxesState {}

class ListBoxes extends React.Component<ListBoxesProps, ListBoxesState> {
  constructor(props: ListBoxesProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <CContainer>
        <Header showProfilePic />
        <View style={{flex: 1}}>
          <Text>Liste des boites</Text>
        </View>
      </CContainer>
    );
  }
}

export default ListBoxes;
