// Promise.resolve().then(() => {
//     console.log("Promise resolved");
    
// })

// function getUse(id, callback) {
//     setTimeout(() => {
//         console.log("User Fetched");
//         const user = {
//             id : 102,
//             username: "DEEPIKA MITTAL"
//         }
//         callback(null,user)
//     }, 1000);


// function getProfile(id, callback) {
//     setTimeout(() => {
//         console.log("Profile fetched");
//         const profile = {
//             username: "mahi",
//             location: "Ghaziabad"
//         };
//         callback(null, profile);
//     }, 2000);
// }

// function getPosts(username, callback) {
//     setTimeout(() => {
//         console.log("Posts fetched");
//         const posts = [ "Post 1","Post 2","Post 3"]; 
//         callback(null, posts);
//     }, 2000)
// }

function getUser(id, callback) {
    setTimeout(() => {
        console.log("User fetched");
        const user = { 
            id: id,
             name: "mahi" 
            };
        callback(null,user)}, 2000);
}

function getProfile(id, callback) {
    setTimeout(() => {
        console.log("Profile fetched");
        const profile = {
            username: "mahi",
            location: "Ghaziabad"
        };
        callback(null, profile);
    }, 2000);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log("Posts fetched");
        const posts = [ "Post 1","Post 2","Post 3"]; 
        callback(null, posts);
    }, 2000)
}

getUser(1, function(error, user) {
    if (error) {
        console.error(error);
        return;
    }
    getProfile(user.id, function(error, profile) {
        if (error) {
            console.error(error);
            return;
        }
        getPosts(profile.username, function(error, posts) {
            if (error) {
                console.error(error);
                return;
            }
            console.log(`Fetched posts ${posts}`);
        });
    });
});



