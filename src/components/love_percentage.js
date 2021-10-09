/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button, Text} from 'react-native-elements';
import MyContext from '../context/context';
import {View, StyleSheet} from 'react-native';
import Mainlogo from '../assets/utils/main_logo';

const LovePercentage = () => {
  const context = useContext(MyContext);
  return (
    <View style={styles.form}>
      <Mainlogo />
      <Formik
        initialValues={{fname: '', sname: ''}}
        validationSchema={Yup.object({
          //creating rules
          fname: Yup.string().required('Please enter the name'),
          sname: Yup.string().required('Please enter the name'),
        })} //yup instance and pass the object
        onSubmit={values => {
          console.log(values);
          //get the values
          context.addName(values.fname, values.sname);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <>
            <Input
              placeholder="Enter first name"
              inputContainerStyle={{
                marginHorizontal: 50,
              }}
              renderErrorMessage={errors.fname && touched.fname}
              errorMessage={errors.fname}
              errorStyle={{
                marginHorizontal: 50,
              }}
              onChangeText={
                //handle input
                handleChange('fname') //pass the name from input
              }
              onBlur={handleBlur('fname')}
              value={values.fname} //actual value of the input
            />
            <Input
              placeholder="Enter second name"
              inputContainerStyle={{
                marginHorizontal: 50,
              }}
              renderErrorMessage={errors.sname && touched.sname}
              errorMessage={errors.sname}
              errorStyle={{
                marginHorizontal: 50,
              }}
              onChangeText={
                //handle input
                handleChange('sname')
              }
              onBlur={handleBlur('sname')}
              value={values.sname}
            />
            <Button
              title="Show Result"
              buttonStyle={styles.button}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
export default LovePercentage;

const styles = StyleSheet.create({
  form: {
    marginTop: 300,
  },
  button: {
    backgroundColor: '#FFA3A3',
    marginTop: 20,
    width: '60%',
    marginStart: 80,
    borderRadius: 50,
    padding: 15,
  },
});
