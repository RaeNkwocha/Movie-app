

export default function Validateform(values){
    let errors={}
    if(!values.email){
        errors.email="Email required"
    }
    return errors
}
