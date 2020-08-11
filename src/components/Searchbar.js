import React from "react";
import { Form } from "reactstrap";
import CustomInput from "./Input";



export default function Searchbar (props) {

    const { value, onChange, onSubmit, display } = props


    return(
        <div style={{display: display}}>
            <Form onSubmit={ onSubmit }>
                <CustomInput
                     value={ value }
                     onChange={ onChange }
                     
                />
            </Form>
            
        </div>
    )
}