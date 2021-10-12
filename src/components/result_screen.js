/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';
import MyContext from '../context/context';
import PercentageCircle from './percentage';
import ShareTo from './share_to';

const ResultScreen = () => {
  const context = useContext(MyContext);
  return (
    <View style={styles.container}>
      {context.state.result === '' ? (
        <ActivityIndicator
          size="large"
          color="#F77B7B"
          style={{marginBottom: 200}}
        />
      ) : (
        <View styles={styles.form}>
          <PercentageCircle />
          <ShareTo />
          <Button
            title="Back to Home"
            buttonStyle={styles.button}
            onPress={() => context.backToHome()}
          />
        </View>
      )}
    </View>
  );
};
export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 900,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FFA3A3',
    marginTop: 200,
    width: '60%',
    marginStart: 50,
    borderRadius: 50,
    padding: 15,
  },
  text: {
    marginStart: 50,
  },
});
