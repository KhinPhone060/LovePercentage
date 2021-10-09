import React, {useContext} from 'react';
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native';
import LovePercentage from './src/components/love_percentage';
import ResultScreen from './src/components/result_screen';
import MyContext from './src/context/context';

const App = () => {
  const context = useContext(MyContext); //access to the context
  return (
    <SafeAreaView>
      <View>
        {context.state.screen === 1 ? <LovePercentage /> : <ResultScreen />}
      </View>
    </SafeAreaView>
  );
};
export default App;
