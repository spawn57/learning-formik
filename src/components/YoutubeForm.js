import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const initialValues = {
    name: 'Sunil',
    email: '',
    channel: '',
};

const onSubmit = (values) => {
    console.log('form values', values);
}

const validateSchema = yup.object({
    name: yup.string().required('Required!'),
    email: yup.string().email('invalid email format').required('Required'),
    channel: yup.string().required('Required'),
});

function YoutubeForm() {
    // console.log('formik visited', formik.touched);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validateSchema} 
            onSubmit={onSubmit} 
        >
            <Form>
                <div className='formControl'>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text' 
                        id='name' 
                        name='name' 
                    />
                    <ErrorMessage name='name' />
                </div>
                <div className='formControl'>
                    <label htmlFor='email'>E-mail</label>
                    <Field 
                        type='email' 
                        id='email' 
                        name='email' 
                    />
                    <ErrorMessage name='email' />
                </div>
                <div className='formControl'>
                    <label htmlFor='channel'>Channel</label>
                    <Field 
                        type='text' 
                        id='channel' 
                        name='channel' 
                    />
                    <ErrorMessage name='channel' />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;