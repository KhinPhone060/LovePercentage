import React, {useContext} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Button, Text} from 'react-native-elements';
import MyContext from '../context/context';

const LovePercentage = () => {
  const context = useContext(MyContext);
  return (
    <>
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
              renderErrorMessage={errors.fname && touched.fname}
              errorMessage={errors.fname}
              onChangeText={
                //handle input
                handleChange('fname') //pass the name from input
              }
              onBlur={handleBlur('fname')}
              value={values.fname} //actual value of the input
            />
            <Input
              placeholder="Enter second name"
              renderErrorMessage={errors.sname && touched.sname}
              errorMessage={errors.sname}
              onChangeText={
                //handle input
                handleChange('sname')
              }
              onBlur={handleBlur('sname')}
              value={values.sname}
            />
            <Button title="Show Result" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </>
  );
};
export default LovePercentage;
