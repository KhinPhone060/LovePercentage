import React, {useContext} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyContext from '../context/context';

const ResultScreen = () => {
  const context = useContext(MyContext);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>{context.state.percentage}%</Text>
        <Text>{context.state.result}</Text>
      </View>
    </SafeAreaView>
  );
};
export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
