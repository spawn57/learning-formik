import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';

function FormikContainer() {
    const initialValues = {
        email: '',
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required')
    });
    const onSubmit = values => console.log('Form data', values);
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => <Form>
                    <FormikControl control='input' type='email' label='email' name='email' />
                    <button type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer;