import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Formik} from 'formik';
import {Input, Button, CheckBox} from 'react-native-elements';

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
          <View style={{padding: '10%'}}>
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
            <Button title="Submit" onPress={handleSubmit} />
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
