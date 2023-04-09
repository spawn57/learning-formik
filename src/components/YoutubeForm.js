import React from 'react';
import { useFormik } from 'formik';
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
    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: onSubmit,
        // validate: onYupValidate,
        validationSchema: validateSchema,
    });

    console.log('formik visited', formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='formControl'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text' 
                        id='name' 
                        name='name' 
                        {... formik.getFieldProps('name')}
                    />
                    { formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null }
                </div>
                <div className='formControl'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        {... formik.getFieldProps('email')} 
                    />
                    { formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null }
                </div>
                <div className='formControl'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        {... formik.getFieldProps('channel')} 
                    />
                    { formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;