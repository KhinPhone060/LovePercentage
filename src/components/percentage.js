import ProgressCircle from 'react-native-progress-circle';
import React, {useContext} from 'react';
import {Text} from 'react-native';
import MyContext from '../context/context';

const PercentageCircle = () => {
  const context = useContext(MyContext);
  return (
    <ProgressCircle
      percent={context.state.percentage}
      radius={50}
      borderWidth={8}
      color="#FFA3A3"
      shadowColor="#999"
      bgColor="#fff">
      <Text style={{fontSize: 18}}>{context.state.percentage}%</Text>
    </ProgressCircle>
  );
};
export default PercentageCircle;
