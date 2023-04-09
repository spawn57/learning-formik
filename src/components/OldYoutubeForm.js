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

// const onValidate = (values) => {
//     const error = {};

//     if (!values.name) {
//         error.name = 'Required';
//     }

//     if (!values.email) {
//         error.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//         error.email = 'invalid email format';
//     }

//     if (!values.channel) {
//         error.channel = 'Required';
//     }

//     return error;
// }

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
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                    />
                    { formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null }
                </div>
                <div className='formControl'>
                    <label htmlFor='email'>E-mail</label>
                    <input 
                        type='email' 
                        id='email' 
                        name='email' 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        value={formik.values.email} 
                    />
                    { formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null }
                </div>
                <div className='formControl'>
                    <label htmlFor='channel'>Channel</label>
                    <input 
                        type='text' 
                        id='channel' 
                        name='channel' 
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        value={formik.values.channel} 
                    />
                    { formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null }
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;