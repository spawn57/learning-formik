import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: 'Sunil',
    email: '',
    channel: '',
}; 

const onSubmit = (values) => {
    console.log('form data:', values);
}

const onValidate = (values) => {
    const error = {};

    if (!values.name) {
        error.name = 'Required';
    }
    
    if (!values.email) {
        error.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        error.email = 'invalid email format';
    }

    if (!values.channel) {
        error.channel = 'Required';
    }

    return error;
}

function YoutubeForm() {  
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        validate: onValidate,
    });

    console.log('formik values', formik.values);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channel'>Channel</label>
                <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;