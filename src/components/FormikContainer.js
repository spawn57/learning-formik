import React from 'react';
import { Formik, Form } from 'formik';
import FormikControl from './FormikControl';
import * as Yup from 'yup';

function FormikContainer() {
    const radioOptions = [
        { key: 'option1', value: 'Option 1' },
        { key: 'option2', value: 'Option 2' },
        { key: 'option3', value: 'Option 3' },
    ]
    const initialValues = {
        email: '',
        description: '',
        radioOption: '', 
    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
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
                    <FormikControl control='textarea' type='textarea' label='Description' name='description' />
                    <FormikControl control='radio' label='Radio Topic' name='radioOption' options={radioOptions} />
                    <button type='submit'>Submit</button>
                </Form>
            }
        </Formik>
    )
}

export default FormikContainer;