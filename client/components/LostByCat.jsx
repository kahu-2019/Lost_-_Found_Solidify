import React from 'react'

function LostByCat(props){
    return(
        props.cats.map((cat,i)=>{
            return (
                <div key={i}>
                    <img src={cat.photo}/>
                    <p>{cat.species}</p>
                    <p>{cat.name}</p>
                </div>
            )
        })
            )
     
}

export default LostByCat