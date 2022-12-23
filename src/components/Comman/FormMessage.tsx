import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import s from "../Dialogs/Dialogs.module.css";
import {Textarea} from "./FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type FormDataType = {
    newMessageBody: string
}
const maxLength50= maxLengthCreator(50)
export const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form className={s.addContent} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate = {[required, maxLength50]}
                       name={'newMessageBody'} placeholder='Enter your message'/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
export const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)