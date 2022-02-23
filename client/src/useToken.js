import { useState } from "react";
export default function useToken(params) {
    const getToken=()=>{
        const tokenString=localStorage.getItem('token');
        const userToken=JSON.parse(tokenString);
        return userToken?.token
    }
    const [token,setToken]=useState(getToken());

const storeToken=userToken=>{
    localStorage.setItem('token',JSON.stringify(userToken));
    setToken(userToken.token)
}
return{
    setToken:storeToken,
    token
}
}