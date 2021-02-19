import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories((x) => [inputValue , ...x]);
            setInputValue('');
        };

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" value={inputValue} onChange={handleInputChange} placeholder="Category" aria-label="Category" aria-describedby="basic-addon1" />
                </div>
            </form>

        </>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}