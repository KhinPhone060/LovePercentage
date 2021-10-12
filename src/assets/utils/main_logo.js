/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';

const MainLogo = () => {
  return (
    <View style={{marginStart: 90, marginBottom: 100}}>
      <Text
        style={{
          fontFamily: 'Pacifico-Regular',
          color: '#EA5B5B',
          fontWeight: '600',
          fontSize: 30,
        }}>
        Love Percentage
      </Text>
    </View>
  );
};
export default MainLogo;
