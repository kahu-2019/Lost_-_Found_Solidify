import React from 'react'

function FoundByCat(props){
    return(
        props.cats.map((cat,i)=>{
            return (
                <div key={i}>
                    <img src={cat.photo}/>
                    <p>{cat.species}</p>
                </div>
            )
        })
    )
}

export default FoundByCat