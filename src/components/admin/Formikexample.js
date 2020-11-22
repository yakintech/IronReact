import React from 'react'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

function Formikexample() {

    const registerSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        surname: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <div>
            <Formik
                initialValues={{ name: "", surname: "", email: "" }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={registerSchema}
            >

                {({ errors, touched }) => (

                    <Form>
                        <div>
                            <Field name="name" id="name" placeholder="Name" ></Field>
                            {errors.name && touched.name ? <div>{errors.name}</div> : null}
                        </div>
                        <div>
                            <Field name="surname" id="surname" placeholder="Surname" ></Field>

                        </div>
                        <div>
                            <Field name="email" id="email" placeholder="EMail" ></Field>

                        </div>
                        <button type="submit">Submit</button>
                    </Form>

                )}

            </Formik>
        </div>
    )
}

export default Formikexample
