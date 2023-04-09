import React from 'react';
import { useFormik } from 'formik';

const initialValues = {
    name: 'Sunil',
    email: '',
    channel: '',
};

const onSubmit = (values) => {
    console.log('form values', values);
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

    console.log('formik errors', formik.errors);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='formControl'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text' 
                        id='name' 
                        name='name' 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                    />
                    { formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null }
                </div>
                <div className='formControl'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        onChange={formik.handleChange} 
                        value={formik.values.email} 
                    />
                    { formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null }
                </div>
                <div className='formControl'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        onChange={formik.handleChange} 
                        value={formik.values.channel} 
                    />
                    { formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;