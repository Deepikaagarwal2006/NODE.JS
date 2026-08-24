function fetcherUserData (){
    return new Promise ((resolve , reject) => {
    let success = true;
    if(success){
        resolve({
            id : 123456,
            username : "Kahani Mittal"
        })
    }else{
        reject (new Error ("Data not fetched"))
    }   

}) ;  
}


async function getuser(){
    try {
        const user = await fetcherUserData();
        console.log(user);
    } catch (error){
        console.log(`Error: ${error.message}`);
    }
}

getuser();
