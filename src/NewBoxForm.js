import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        height: 100,
        width: 100,
        bgColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit} className='BoxList-form'>
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="number"
                name="height"
                placeholder="Box Height"
                min='100'
                max='600'
                step='20'
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="number"
                name="width"
                placeholder="Box Width"
                min='100'
                max='600'
                step='20'
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="bgColor">Background Color</label>
            <input
                id="bgColor"
                type="text"
                name="bgColor"
                placeholder="Box Background Color"
                value={formData.bgColor}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )

}

export default NewBoxForm;