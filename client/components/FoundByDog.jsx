import React from 'react'

function FoundByDog(props){
    return(
        props.dogs.map((dog,i)=>{
            return (
                <div key={i}>
                    <img src={dog.photo}/>
                    <p>{dog.species}</p>
                </div>
            )
        })
    )
}

export default FoundByDog