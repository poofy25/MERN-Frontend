import { useState } from "react";
import { useAuthContext } from './useAuthContext'

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const reponse = await fetch ('http://localhost:4000/api/user/login' , {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await reponse.json()

        if(!reponse.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(reponse.ok){

            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update authContext
            dispatch({type:'LOGIN' , payload: json})

            setIsLoading(false)
        }

    }

    return { login , isLoading , error}
}