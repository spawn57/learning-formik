import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: 'Sunil',
    email: '',
    channel: '',
    social: {
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],
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
                    <ErrorMessage name='name' component={TextError}/>
                </div>
                <div className='formControl'>
                    <label htmlFor='email'>E-mail</label>
                    <Field 
                        type='email' 
                        id='email' 
                        name='email' 
                    />
                    <ErrorMessage name='email'>
                        {
                            (errorMessage) => <div className="error">{errorMessage}</div> 
                        }
                    </ErrorMessage>
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
                <div className='formControl'>
                    <label htmlFor='facebook'>Facebook</label>
                    <Field 
                        type='text'
                        id='facebook'
                        name='social.facebook'
                    />
                </div>
                <div className='formControl'>
                    <label htmlFor='twitter'>Twitter</label>
                    <Field
                        type='text'
                        id='twitter'
                        name='social.twitter'
                    />
                </div>
                <div className='formControl'>
                    <label htmlFor='phoneNumber1'>Phone Number 1</label>
                    <Field 
                        type='text'
                        id='phoneNumber1'
                        name='phoneNumbers[0]'
                    />
                </div>
                <div className='formControl'>
                    <label htmlFor='phoneNumber2'>Phone Number 2</label>
                    <Field
                        type='text'
                        id='phoneNumber2'
                        name='phoneNumbers[1]'
                    />
                </div>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    );
}

export default YoutubeForm;