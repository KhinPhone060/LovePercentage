import React, {useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import LovePercentage from './src/components/love_percentage';
import ResultScreen from './src/components/result_screen';
import MyContext from './src/context/context';
import Authenticate from './src/authenticate';

const App = () => {
  const context = useContext(MyContext); //access to the context
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {context.state.screen === 1 ? <LovePercentage /> : <ResultScreen />}
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
