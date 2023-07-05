//API requests in JavaScript

const this_url = 'https://the-one-api.dev/v2/character?limit=2&page=2&sort=name:asc'

async function pullAPI(url) {
    const response = await fetch(this_url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        }
    })
    const info = await response.json();
    console.log(info)
}

// Where 'GET' is, you can put 'POST', 'PATCH' and 'DELETE'


const input = 'https://the-one-api.dev/v2/character?limit=2&page=2&sort=name:asc'

async function getCharacterData(url) {
  const response = await fetch(input,{headers:{Authorization:''}})
  const info = await response.json()
  console.log(info)
}

getCharacterData(input).then(data => console.log(data))

async function getCharacterData(url) {
    try{ 
      const response = await fetch(input,{headers:{Authorization:'Bearer dFxFyh1MFWA-RFFCmZnh'}})
    const data = await response.json()
    return(data)
    }
    catch{// if there is an error}
      console.log("there is an error")
    }
    finally {
      console.log("I always run")
    }
    
    }

    let data ={
      title: "Anne of Green Gables",
    }

    async function letsPostSomething(url, data){
      const response = await fetch(input, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json;"
      }},)
      const info = await response.json()
      console.log(info)
    }
    