const connection = require('knex')(config)

function getLostPets (testDb) {
    const db = testDb || connection
  
    return db('lost').select()
      
  }

  function getFoundPets (testDb) {
      const db = testDb || connection

      return db('found').select()
  }

  function addLostAnimal (name,species,photo,testDb) {
      const db= testDb || connection
     return db('lost').insert(
         {
          name: name,
          species: species,
          photo: photo   
        }
     )
  }

  function addFoundAnimal (species,photo,testDb) {
    const db= testDb || connection
    return db('found').insert(
        {
          species:species,
          photo:photo

        }
    )
  }