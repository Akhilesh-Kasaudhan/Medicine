import React, { useState, useRef, useEffect } from "react";
import { Field } from "formik";
import { Typeahead } from "react-bootstrap-typeahead";

// Just For Formik fun not implementinng anywhere Yet!
// When I wrote this, only God and I understood what I was doing, Now, God only knows

export function TypeheadMultiSelect({
    options,
    selected,
    onChange,
    label,
    name,
}) {
    const [selectedOptions, setSelectedOptions] = useState(selected || []);
    const handleSelectionChange = (selected) => {
        setSelectedOptions(selected);
        if (onChange) {
            onChange(selected);
        }
    };
    return (
        <>
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <Typeahead
                id="typeahead-multi-select"
                multiple
                name={name}
                options={options}
                selected={selectedOptions}
                labelKey="assetCode" // Specify the property to display in the dropdown
                onChange={handleSelectionChange}
                placeholder="Select multiple options..."
                renderMenuItemChildren={(option) => (
                    <div>
                        <p className="mb-0">{option.assetCode}</p>
                    </div>
                )}
            />
        </>
    );
}

export function TypeheadSelect(props) {
    // I don't know Why I am writing this same code again just for single select  / will work later
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
        <Field name={name}>
            {(props) => {
                const { form } = props;
                return (
                    <div className={className}>
                        <label htmlFor={name} className="form-label">
                            {label}
                        </label>
                        <Typeahead
                            name={name}
                            id={name}
                            selected={formik.values[name]}
                            className="text-capitalize"
                            options={options}
                            labelKey={labelField}
                            onChange={(value) => formik.setFieldValue(name, value)}
                        >
                            {({ isMenuShown, toggleMenu }) => (
                                <button
                                    type="button"
                                    className="btn btn-primary btn-sm"
                                    style={{ position: "absolute", right: 5, top: 3 }}
                                    onClick={(e) => toggleMenu()}
                                >
                                    <i className="fa fa-plus"></i>
                                </button>
                            )}
                        </Typeahead>
                    </div>
                );
            }}
        </Field>
    );
}

// custom File Uploader Component By Aditya
export function FileUploader({ name, className, type, onFileChange, value }) {
    const [selectedFileName, setSelectedFileName] = useState("");
    const fileInputRef = useRef(null);

    useEffect(() => {
        if (value) {
            setSelectedFileName(value.name);
        } else {
            setSelectedFileName("");
        }
    }, [value]);

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Assuming a single file is selected
        setSelectedFileName(file ? file.name : "");

        if (onFileChange) {
            onFileChange(file);
        }
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    console.log(selectedFileName, "selectedFileName");

    return (
        <div className={className}>
            <input
                type={type}
                name={name}
                accept={type}
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={fileInputRef}
            />
            <div
                onClick={handleImageClick}
                className="cursor-pointer border-dashed py-4 px-2 my-4 rounded align-items-center justify-content-center d-flex flex-column"
            >
                <p>Uploader</p>
                <p className="fs-6 mb-0">
                    <span className="text-primary">Click to upload</span> or drag and drop
                </p>
                <p className="mb-0">Excel Max (3 MB)</p>
                <div>
                    {selectedFileName.length > 0 && (
                        <div>
                            <p className="mb-0">{selectedFileName}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
