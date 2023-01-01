import React, { useState } from 'react'
import DynamicInput from '../Components/DynamicInput'
import DynamicButton from '../Components/DynamicButton'

const InputBox = () => {

    const [inputField, setInputField] = useState([{ firstname: '', email: "" }])
console.log(inputField)

    function handleAdd() {
        const values = [...inputField];
        values.push({ firstname: "", email: "" })
        setInputField(values)
    }

    const handleRemove = (index) => {

        const remove = [...inputField];
        remove.splice(index, 1);
        setInputField(remove);
    }

    const handleChange = (e, index) => {
        const changeValues = [...inputField];
        changeValues[index][e.target.name] = e.target.value
        setInputField(changeValues)
    }








    return (
        <div style={{ width: "1200px", margin: "0 auto", paddingTop: "10px" }}>
            <h2 style={{ display: "-webkit-flex", justifyContent: "center" }}>Dynamic Input Form</h2>



            <form>
                {
                    inputField.map((inputField, index) => {
                        return (
                            <div key={`${inputField}-${index}`} style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                                <DynamicInput
                                    label="Name"
                                    placeholder="Name"
                                    style={{ margin: " 0 10px" }}
                                    onChange={(e) => handleChange(e, index)}
                                    name="firstname"

                                />
                                <DynamicInput
                                    label="Email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(e) => handleChange(e, index)}


                                />
                                <DynamicButton
                                    variant="contained"
                                    type="button"
                                    sx={{ m: 2 }}

                                    onClick={() => handleAdd()}
                                >+</DynamicButton>


                                {
                                    index ? <DynamicButton
                                        variant="contained"
                                        color="error"
                                        type="button"
                                        onClick={() => handleRemove(index)}
                                    >-</DynamicButton> : ''

                                }


                            </div>

                        )

                    })
                }
            </form>


        </div>
    )
}

export default InputBox
