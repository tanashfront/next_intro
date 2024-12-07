"use client"

export default function Error({error, reset} : any) {
    return (
        <div>
            <h1>
                {error.message}
                {/* <br/> */}
                {/* <button onClick={reset}>Reset</button> */}
            </h1>
        </div>
    )
    
}