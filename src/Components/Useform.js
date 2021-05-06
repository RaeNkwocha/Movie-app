import  { useEffect, useState } from 'react'


 const Useform=(callback,Validateform)=>{
    const [values,setValues]=useState({
        email:""
    })
    const [errors, setErrors]=useState({})
    const [submit,setSumbit]=useState(false)

        const handleSubmit=(e)=>{
                e.preventDefault()
                setErrors(Validateform(values))
                setSumbit(true)
        }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setValues({...values,[name]:value})
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && submit){
            callback()
        }
    
            
        }, [errors,callback,submit])
    return {handleChange, values,handleSubmit,errors}
}
export default Useform