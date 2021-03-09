import React, { Component } from "react"

import {Formik} from "formik"
import EmailValidator from "email-validator"
import Yup from "yup"


const ValidationLoginForm = () => {
    <Formik
        initialValues ={{email: "", password:""}}
        onSubmit = {(values, {setSubmitting})=>{
            console.log("Submitting")
        }}
    >
        <div>
            <h1>Validation</h1>
        </Formik>
)

export default ValidationLoginForm