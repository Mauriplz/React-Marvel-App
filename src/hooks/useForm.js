import { useState } from "react"

export const useForm = (namesForm={}) =>{

    const [fromValues, setFromValues] = useState(namesForm)

    const handleInputChange = ({target})=>{
        setFromValues({
            ...fromValues,
            [target.name] : target.value 
        })
    }

    const handleReset = () =>{
        setFromValues(namesForm)
    }

    return {
        fromValues,
        handleInputChange,
        handleReset
    }

}