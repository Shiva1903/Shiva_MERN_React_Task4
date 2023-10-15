let events=require("node:events")
let emitter=new events()
emitter.on("Order-Pizza",()=>{
    console.log("Order recieved. Please wait")
})
emitter.emit("Order-Pizza")