import ProgressCircle from 'react-native-progress-circle';
import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import MyContext from '../context/context';

const PercentageCircle = () => {
  const context = useContext(MyContext);
  let percentage = Number(context.state.percentage);
  return (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <ProgressCircle
        percent={percentage}
        radius={100}
        borderWidth={10}
        color="#FFA3A3"
        shadowColor="#fff"
        bgColor="#FFE5E5">
        <Text style={{fontSize: 30}}>{context.state.percentage}%</Text>
      </ProgressCircle>
      <Text style={{fontSize: 18}}>{context.state.result}</Text>
    </View>
  );
};
export default PercentageCircle;
