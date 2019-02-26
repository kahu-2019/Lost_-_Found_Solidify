import React from "react";

function LostPets(props){
    return (
      <div>
        {props.lostPetsData.map(lostPet => {
          console.log(lostPet)
          return (
            <div key={lostPet.id}>
              <img src={lostPet.photo} />
              <p>Names:{lostPet.name}</p>
              <p>Species:{lostPet.species}</p>
              <p>User: {lostPet.user_name}</p>
              <p>User email: {lostPet.email_address}</p>
            </div>
          );
        })}
      </div>
    );
      }

export default LostPets
