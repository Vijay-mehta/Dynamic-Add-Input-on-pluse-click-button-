import React, { useState } from 'react'
import DynamicInput from '../Components/DynamicInput'
import DynamicButton from '../Components/DynamicButton'
import {Button} from '@mui/material'

const InputBox = () => {

    const [inputField, setInputField] = useState([{ firstname: '', email: "" }])
    const [error,setError] =useState([])
    // console.log(error)

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
        inputError();
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputField)

        inputError();

    }

 const   inputError=()=>{
    let arrayOfIndex=[]
    inputField.map((item,index)=>{
        if(item.firstname === '' || item.email === ''){
            arrayOfIndex.push({index:index,name:item.firstname,email:item.email})
        }
    })
    setError([...arrayOfIndex])
 }







    return (
        <div style={{ width: "1200px", margin: "0 auto", paddingTop: "10px" }}>
            <h2 style={{ display: "-webkit-flex", justifyContent: "center" }}>Dynamic Input Form</h2>



            <form onSubmit={handleSubmit}>
                {
                    inputField.map((inputField, index) => {
                        return (
                            <div key={`${inputField}-${index}`} style={{ display: "flex", alignItems: "baseline", justifyContent: "center" }}>
                                <DynamicInput
                                value={inputField.firstname}
                                    label="Name"
                                    placeholder="Name"
                                    style={{ margin: " 0 10px" }}
                                    onChange={(e) => handleChange(e, index)}
                                    name="firstname"

                                />
                                <DynamicInput
                                value={inputField.email}
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
                                      {
                            error.map((item)=>{
                              
                                if(item.index === index){
                                    return(

                                    <div key={index
                                    }>
                                                                                <p style={{color:"red"}}>Empty </p>

                                    </div>
                                
                                        )

                                    
                                }
                            })
                       }


                            </div>
                           

                        )
                    
                  
                    })
                }
                <DynamicButton variant="contained" type='submit' style={{display:"flex" ,margin:"0 auto" ,marginTop:"10px"}} >Submit</DynamicButton>

            </form>


        </div>
    )
}

export default InputBox
