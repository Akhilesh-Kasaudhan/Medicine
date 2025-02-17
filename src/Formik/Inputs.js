import React, { useEffect, useState, useRef } from "react";
import { Field, ErrorMessage } from "formik";

export function TextInput(props) {
    const { label, name, formik, disabled, className, InputClassName, ...rest } =
        props;
    const innerRef = useRef(null);
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props;
                    return (
                        <div className={className}>
                            <div className="form-group">
                                {label && (
                                    <label htmlFor={name} className="form-label">
                                        {label}
                                    </label>
                                )}
                                <input
                                    name={name}
                                    disabled={disabled}
                                    {...rest}
                                    {...field}
                                    id={name}
                                    className={`form-control ${InputClassName}`}
                                />
                                <ErrorMessage name={name}>
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block">{errorMsg}*</span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function FileInput(props) {
    const {
        label,
        type,
        name,
        formik,
        onChange,
        value,
        InputClassName,
        className,
        ...rest
    } = props;
    return (
        <Field name={name}>
            {(props) => {
                const { field, form } = props;
                return (
                    <div className={className}>
                        {label && (
                            <label htmlFor={name} className="form-label">
                                {label}
                            </label>
                        )}
                        <input
                            name={name}
                            {...rest}
                            {...field}
                            value={value}
                            id={name}
                            type={type}
                            onChange={(event) => {
                                const file = event.currentTarget.files[0];
                                form.setFieldValue(name, file);
                            }}
                            className="form-control"
                        />
                        <ErrorMessage name={name}>
                            {(errorMsg) => (
                                <span className="invalid-feedback d-block">*{errorMsg} </span>
                            )}
                        </ErrorMessage>
                    </div>
                );
            }}
        </Field>
    );
}

export function TextInputHorz(props) {
    const { label, hint, name, formik, className, InputClassName, ...rest } =
        props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <div className="row align-items-center justify-content-start">
                                {label && (
                                    <div
                                        className="col-10
                  "
                                    >
                                        {label && (
                                            <label htmlFor={name} className="form-label mb-0">
                                                {label}
                                            </label>
                                        )}
                                        {hint !== undefined && (
                                            <div>
                                                <small className="text-secondary">{hint}</small>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className={label == "" ? "col-6" : `${InputClassName}`}>
                                    <input
                                        name={name}
                                        {...rest}
                                        {...field}
                                        className={`form-control`}
                                    />
                                </div>
                                <ErrorMessage name={name}>
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block">
                                            *{errorMsg}{" "}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function TextInputInline(props) {
    const {
        label,
        hint,
        name,
        formik,
        className,
        InputClassName,
        labelClassName,
        ...rest
    } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props;
                    return (
                        <div className={className}>
                            <div
                                className={`row align-items-center justify-content-start ${className}`}
                                style={{ width: "-webkit-fill-available" }}
                            >
                                {label && (
                                    <div className={label ? "col-6" : labelClassName}>
                                        {label && (
                                            <label htmlFor={name} className="form-label mb-0">
                                                {label}
                                            </label>
                                        )}
                                        {hint !== undefined && (
                                            <div>
                                                <small className="text-secondary">{hint}</small>
                                            </div>
                                        )}
                                    </div>
                                )}
                                <div className={label == "" ? "col-6" : `${InputClassName}`}>
                                    <input
                                        name={name}
                                        {...rest}
                                        {...field}
                                        className={`form-control`}
                                    />
                                </div>
                                <ErrorMessage name={name} className="align-items-end">
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block border">
                                            *{errorMsg}{" "}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function SwitchInput(props) {
    const { label, name, formik, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <div className="row align-items-center">
                                {label !== "" && (
                                    <div className="col-7">
                                        <label htmlFor={name} className="form-label">
                                            {label}
                                        </label>
                                    </div>
                                )}
                                <div className={label == "" ? "col-12" : "col-5"}>
                                    <div className="form-check form-switch float-end">
                                        <input
                                            name={name}
                                            {...field}
                                            className="form-check-input"
                                            type="checkbox"
                                            id={name}
                                            checked={field.value == 1 || field.value == true}
                                            onChange={(event) =>
                                                formik.setFieldValue(name, event.target.checked ? 1 : 0)
                                            }
                                        />
                                    </div>
                                </div>
                                <ErrorMessage name={name}>
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block">
                                            *{errorMsg}{" "}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}
export function SwitchInputLine(props) {
    const { label, name, formik, className, row, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props;
                    return (
                        <div className={className}>
                            <div className={`me-0 d-flex justify-content-between ${row}`}>
                                {label != "" && (
                                    <div className="col-6">
                                        <label htmlFor={name} className="form-label">
                                            {label}
                                        </label>
                                    </div>
                                )}
                                <div className={label == "" ? "col-12" : "col-2"}>
                                    <div className="form-check form-switch float-end">
                                        <input
                                            name={name}
                                            {...field}
                                            className="form-check-input"
                                            type="checkbox"
                                            id={name}
                                            checked={field.value == 1 || field.value == true}
                                            onChange={(event) =>
                                                formik.setFieldValue(name, event.target.checked)
                                            }
                                        />
                                    </div>
                                </div>
                                <ErrorMessage name={name}>
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block">
                                            *{errorMsg}{" "}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function DateInput(props) {
    const { label, name, formik, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <label htmlFor={name} className="form-label">
                                {label}
                            </label>
                            <input
                                name={name}
                                {...rest}
                                {...field}
                                className="form-control"
                            />
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}
export function DateInputChange(props) {
    const { label, name, formik, onChange, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <label htmlFor={name} className="form-label">
                                {label}
                            </label>
                            <input
                                name={name}
                                onChange={onChange}
                                {...rest}
                                {...field}
                                className="form-control"
                            />
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function CheckInput(props) {
    const { label, name, formik, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <div className="row align-items-center">
                                {label && (
                                    <div className="col-12">
                                        <label htmlFor={name} className="form-label">
                                            {label}
                                        </label>
                                    </div>
                                )}
                                <div className={label === "" ? "col-12" : "col-5 mx-auto"}>
                                    <div className="form-check float-center">
                                        <input
                                            name={name}
                                            {...field}
                                            className="form-check-input"
                                            type="checkbox"
                                            checked={field.value == 1 || field.value == true}
                                            onChange={(event) =>
                                                formik.setFieldValue(name, event.target.checked)
                                            }
                                        />
                                    </div>
                                    <ErrorMessage name={name}>
                                        {(errorMsg) => (
                                            <span className="invalid-feedback d-block">
                                                *{errorMsg}{" "}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}
export function InlineCheckInput(props) {
    const { label, name, formik, onChange, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            {/* {label != "" &&
                                        <div className="col-12">
                                            <label htmlFor={name} className="form-label">{label}</label>
                                        </div>
                                    }
                                    <div className={label == "" ? "col-12" : "col-5"}>
                                        <div className="form-check float-end py-2">
                                            <input name={name} {...field} className="form-check-input" type="checkbox" checked={field.value == 1 || field.value == true} onChange={(event) => formik.setFieldValue(name, event.target.checked)} />
                                        </div> */}
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    id={name}
                                    name={name}
                                    {...field}
                                    type="checkbox"
                                    checked={field.value == 1 || field.value == true}
                                    onChange={(event) =>
                                        formik.setFieldValue(name, event.target.checked)
                                    }
                                />
                                {label !== "" && (
                                    <label class="form-check-label" htmlFor={name} for={name}>
                                        {label}
                                    </label>
                                )}
                            </div>
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function OnChangeCheckInput(props) {
    const { label, name, formik, onChange, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            {/* {label != "" &&
                                        <div className="col-12">
                                            <label htmlFor={name} className="form-label">{label}</label>
                                        </div>
                                    }
                                    <div className={label == "" ? "col-12" : "col-5"}>
                                        <div className="form-check float-end py-2">
                                            <input name={name} {...field} className="form-check-input" type="checkbox" checked={field.value == 1 || field.value == true} onChange={(event) => formik.setFieldValue(name, event.target.checked)} />
                                        </div> */}
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    id={name}
                                    name={name}
                                    {...field}
                                    type="checkbox"
                                    checked={field.value == 1 || field.value == true}
                                    onChange={onChange}
                                />
                                {label !== "" && (
                                    <label class="form-check-label" htmlFor={name} for={name}>
                                        {label}
                                    </label>
                                )}
                            </div>
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function TextareaInput(props) {
    const { label, name, formik, className, ...rest } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <div className="form-group">
                                <label htmlFor={name} className="form-label">
                                    {label}
                                </label>
                                <textarea
                                    name={name}
                                    {...rest}
                                    {...field}
                                    className="form-control"
                                />
                                <ErrorMessage name={name}>
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block">*{errorMsg} </span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function SelectInput(props) {
    const {
        label,
        name,
        formik,
        options,
        valueField,
        labelField,
        className,
        ...rest
    } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            {label && (
                                <label htmlFor={name} className="form-label">
                                    {label}
                                </label>
                            )}
                            <select
                                className="form-select"
                                id={name}
                                name={name}
                                {...rest}
                                {...field}
                            >
                                {options.map((option, i) => (
                                    <option key={i} value={option[valueField]}>
                                        {option[labelField]}
                                    </option>
                                ))}
                            </select>
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function SelectInputOnChange(props) {
    const {
        label,
        name,
        formik,
        options,
        valueField,
        labelField,
        onChange,
        className,
        ...rest
    } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={className}>
                            <label htmlFor={name} className="form-label">
                                {label}
                            </label>
                            <select
                                className="form-select"
                                value={name}
                                id={name}
                                name={name}
                                {...rest}
                                {...field}
                                onChange={onChange}
                            >
                                {options.map((option, i) => (
                                    <option key={i} value={option[valueField]}>
                                        {option[labelField]}
                                    </option>
                                ))}
                            </select>
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}
export function InlineSelectInput(props) {
    const {
        label,
        name,
        formik,
        options,
        valueField,
        labelField,
        onChange,
        className,
        ...rest
    } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props; //{ field, form, meta }
                    //const {error,errorMsg} = hasError(formik,name);
                    return (
                        <div className={`${className}`}>
                            <label
                                htmlFor={name}
                                className="form-label justify-space-between w-100"
                            >
                                {label}
                            </label>
                            <select
                                className="form-select w-auto"
                                value={name}
                                id={name}
                                name={name}
                                {...rest}
                                {...field}
                                onChange={onChange}
                            >
                                {options.map((option, i) => (
                                    <option key={i} value={option[valueField]}>
                                        {option[labelField]}
                                    </option>
                                ))}
                            </select>
                            <ErrorMessage name={name}>
                                {(errorMsg) => (
                                    <span className="invalid-feedback d-block">*{errorMsg} </span>
                                )}
                            </ErrorMessage>
                        </div>
                    );
                }}
            </Field>
        </>
    );
}

export function InlineSelect(props) {
    const {
        label,
        name,
        formik,
        options,
        valueField,
        labelField,
        onChange,
        className,
        selectInputClass,
        ...rest
    } = props;
    return (
        <>
            <Field name={name}>
                {(props) => {
                    const { field } = props;
                    return (
                        <>
                            <div className={`${className}`} style={{ gap: "12px" }}>
                                <label
                                    htmlFor={name}
                                    className="form-label mb-0 justify-space-between col-6"
                                >
                                    {label}
                                </label>
                                <select
                                    className={`form-select ${selectInputClass}`}
                                    value={name}
                                    id={name}
                                    name={name}
                                    {...rest}
                                    {...field}
                                    onChange={onChange}
                                >
                                    {options.map((option, i) => (
                                        <option key={i} value={option[valueField]}>
                                            {option[labelField]}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="text-end">
                                <ErrorMessage name={name}>
                                    {(errorMsg) => (
                                        <span className="invalid-feedback d-block">
                                            *{errorMsg}{" "}
                                        </span>
                                    )}
                                </ErrorMessage>
                            </div>
                        </>
                    );
                }}
            </Field>
        </>
    );
}

export function RadioSelectInput(props) {
    const { label, name, options, className, onChange, ...rest } = props;
    return (
        <div>
            <label className="mb-2">{label}</label>
            <div className={className}>
                <Field name={name}>
                    {({ field }) => {
                        return options.map((option) => {
                            return (
                                <div key={option.key} className="d-flex gap-1 ">
                                    <input
                                        type="radio"
                                        id={option.value}
                                        {...field}
                                        {...rest}
                                        value={option.value}
                                        checked={field.value === option.value}
                                    />
                                    <label htmlFor={option.key} className="small-text">
                                        {option.value}
                                    </label>
                                    <ErrorMessage name={name}>
                                        {(errorMsg) => (
                                            <span className="invalid-feedback d-block">
                                                *{errorMsg}
                                            </span>
                                        )}
                                    </ErrorMessage>
                                </div>
                            );
                        });
                    }}
                </Field>
            </div>
        </div>
    );
}
