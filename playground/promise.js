console.log("Starting promise.js");

const add=(x,y)=>{
    return new Promise((resolve,reject)=>{
        if (typeof x === 'number' && typeof y === 'number'){
            resolve(`Sum: ${x+y}`);
        } else{
            reject("Invalid inputs for addition");
        }
    })
};

add(5,7).then((msg)=>{
    console.log(msg);
},(err)=>{
    console.log(err);
});

// let promise=new Promise((resolve,reject)=>{
//    // resolve("hey it worked");
//     reject("hmm something went wrong");
// });
//
// promise.then((message)=>{
//     console.log("Success: "+ message);
// },(error)=>{
//     console.log("Error: "+ error);
// });
//
