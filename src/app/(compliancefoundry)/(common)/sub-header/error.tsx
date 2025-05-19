"use client";

type ErrorProps ={
    error:Error
}


export default  function Error({error}:ErrorProps){
    return (
        <span className="text-red-600">{error.message}</span>
    )
}