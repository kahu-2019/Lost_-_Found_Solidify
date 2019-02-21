import React from 'react'

function LostByDog(props){
    return(
        props.dogs.map((dog,i)=>{
            return (
                <div key={i}>
                    <img src={dog.photo}/>
                    <p>{dog.species}</p>
                    <p>{dog.name}</p>
                </div>
            )
        })
            )
     
}

export default LostByDog