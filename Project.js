const url = 'https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc'

async function api_call(url){
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
},})
    const info = await response.json();
    console.log(info)
    }

    console.log(api_call(url))

    

    //Using whatever language you like, and the Github API

    //Create a function that returns the most popular java repos owned by an organization
    
   // Print however many results you can in this format:
    //”owner / name - created_at”
    
    //Ex:
    
    //`facebook / react-native - 2013-05-24T16:15:54Z`
    
    //`google / guava - 2014-05-29T16:23:17Z`
    
    //Rule: Print as many as you can, but do not make more than 1 API call.
    
    //Hint: You do not need to authenticate to use this api.
    
   // Hint: Look at the example here: https://docs.github.com/en
   // Chris Rogoza2:43 PM
    // https://docs.github.com/en/rest/search/search?apiVersion=2022-11-28#search-repositories
    //Chris Rogoza2:45 PM
   // https://api.github.com/search/repositories?q=language:java&sort=stars&order=desc



    //(Try to finish the assignment)

//Imagine your boss wants to start to develop an app or a component to view popular repos. 
//Take a few hours and develop whatever additional features you think might be valuable or interesting. 

//You could show additional fields, show the information in a nicer format, 
//filter results based on user input, fetch more results with additional API calls, 
//use 3rd party libraries, create a small front end, or 
//create a back-end that is easy for the front end developers to us


//Email code to Eboni or email her a github link; whichever is easier
//(Two or three hours)