import React from 'react';
import {Touchable, View, Text, Button} from 'react-native';
import Share from 'react-native-share';

const MyCustomShare = async () => {
  const options = {
    message: 'This is a test message',
    url: 'https://github.com/KhinPhone060/LovePercentage',
  };
  try {
    const shareResponse = await Share.open(options);
    console.log(JSON.stringify(shareResponse));
  } catch (error) {
    console.log('Error => ', error);
  }
};
const ShareTo = () => {
  return (
    <View>
      <Button title="Share" onPress={MyCustomShare} />
    </View>
  );
};
export default ShareTo;
