import React from "react";
import {
    CheckInput,
    DateInput,
    InlineCheckInput,
    SelectInput,
    SwitchInput,
    TextareaInput,
    TextInput,
    TextInputHorz,
    FileInput,
    OnChangeCheckInput,
    SelectInputOnChange,
    DateInputChange,
    SwitchInputLine,
    InlineSelectInput,
    TextInputInline,
    RadioSelectInput,
    InlineSelect,
} from "../Formik/Inputs";
import {
    FileUploader,
    TypeheadMultiSelect,
    TypeheadSelect,
} from "../Formik/TypeheadInput";
//import FileUploader from './FileUploader'     // Comming Soon
//import SearchSelect from './SearchSelect'     // Comming Soon

function FormikControl(props) {
    const { control, ...rest } = props;
    switch (control) {
        case "fileInput":
            return <FileInput {...rest} />;
        case "textInput":
            return <TextInput {...rest} />;
        case "textInputHorz":
            return <TextInputHorz {...rest} />;
        case "textInputInline":
            return <TextInputInline {...rest} />;
        case "switchInput":
            return <SwitchInput {...rest} />;
        case "switchInputLine":
            return <SwitchInputLine {...rest} />;
        case "checkInput":
            return <CheckInput {...rest} />;
        case "onChangeCheckInput":
            return <OnChangeCheckInput {...rest} />;
        case "inlineCheckInput":
            return <InlineCheckInput {...rest} />;
        case "dateInput":
            return <DateInput {...rest} />;
        case "dateInputChange":
            return <DateInputChange {...rest} />;
        case "textareaInput":
            return <TextareaInput {...rest} />;
        case "selectInput":
            return <SelectInput {...rest} />;
        case "selectInputChange":
            return <SelectInputOnChange {...rest} />;
        case "inlineSelectInput":
            return <InlineSelectInput {...rest} />;
        case "InlineSelect":
            return <InlineSelect {...rest} />;
        case "TypeHeadSelect":
            return <TypeheadSelect {...rest} />;
        case "TypeHeadMultiSelect":
            return <TypeheadMultiSelect {...rest} />;
        case "fileUploader":
            return <FileUploader {...rest} />;
        case "radioSelect":
            return <RadioSelectInput {...rest} />;
        default:
            return null;
    }
}

export default FormikControl;
