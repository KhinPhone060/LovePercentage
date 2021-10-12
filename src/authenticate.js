/* eslint-disable no-alert */
import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, CheckBox} from 'react-native-elements';
import MainLogo from './assets/utils/main_logo';

const Authenticate = () => {
  const [register, setRegister] = useState(false);

  const handleSubmit = values => {
    if (register) {
      //register
      alert('Register');
    } else {
      //login
      alert('Login');
    }
  };
  return (
    <>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleSubmit(values)}>
        {({handleChange, handleBlur, values, handleSubmit}) => (
          <View style={{padding: '10%', marginTop: 100}}>
            <MainLogo />
            <Input
              placeholder="Email"
              leftIcon={{type: 'MaterialIcons', name: 'email'}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Input
              placeholder="Password"
              leftIcon={{type: 'MaterialIcons', name: 'fingerprint'}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button
              title="Submit"
              buttonStyle={{
                backgroundColor: '#FFA3A3',
                width: '60%',
                marginStart: 50,
                borderRadius: 50,
                padding: 15,
              }}
              onPress={handleSubmit}
            />
            <CheckBox
              title={register ? 'Register' : 'Login'}
              checked={register}
              onPress={() => setRegister(!register)}
            />
          </View>
        )}
      </Formik>
    </>
  );
};
export default Authenticate;
