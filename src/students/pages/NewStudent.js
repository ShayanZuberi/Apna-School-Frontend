import React  from "react";
import { VALIDATOR_EMAIL, VALIDATOR_GENDER, VALIDATOR_REQUIRE } from "../../shared/util/validators";

import { useForm } from "../../shared/hooks/form-hook";
import './NewStudent.css';
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const NewStudent = () => {

    const [formState, InputHandler] = useForm({
        name:{
            value: '',
            isValid: false
        },
        age:{
            value: '',
            isValid: false
        },
        address:{
            value: '',
            isValid: false
        },
        guardianName:{
            value: '',
            isValid: false
        },
        gender:{
            value: '',
            isValid: false
        }

    }, false);

    const studentSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    return(
        <form className="student-form" onSubmit={studentSubmitHandler}>
            <h2>Please provide the student details below</h2>
            <Input
                id = "name"
                label="Student Name"
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid name"
                onInput = {InputHandler}
            />
            <Input
                id = "age"
                label = "Age"
                element = "input"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid age"
                onInput = {InputHandler}
            />
            <Input
                id = "gender"
                label = "Gender"
                element = "input"
                validators={[VALIDATOR_REQUIRE(), VALIDATOR_GENDER()]}
                errorText="Please enter a valid gender (M/F)."
                onInput = {InputHandler}
            />
            <Input
                id = "email"
                label = "Email"
                element = "input"
                validators={[VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email address"
                onInput = {InputHandler}
            />
            <Input
                id = "guardianName"
                label="Guardian Name"
                element="input"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid guardian name"
                onInput = {InputHandler}
            />
            <Input
                id = "address"
                label="Address"
                element="textarea"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid address"
                onInput = {InputHandler}
            />
            
            <Button type='submit' disabled={!formState.isValid}>ADD STUDENT</Button>
        </form>
    );
};

export default NewStudent;