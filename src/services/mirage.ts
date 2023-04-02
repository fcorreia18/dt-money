import { Model, Request, createServer } from "miragejs"

createServer({
  models:{
    transactions:Model
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
        id:1,
        title:"Freelance de Website ",
        amount:4000,
        type:"deposit",
        category:"Dev",
        createdAt:new Date("2022-03-13")
      },
      {
        id:2,
        title:"Aluguel ",
        amount:1200,
        type:"withdraw",
        category:"Casa",
        createdAt:new Date("2022-02-27")
      }
    ]
      
    })
  },
  routes() {
    this.namespace = "api"

    this.get("/transactions", ( ) => {
      return this.schema.all("transactions");

    })
    this.post("/transactions",(schema, request:Request)=>{
      const data = JSON.parse(request.requestBody)
      return schema.create("transactions",data);
    })
  },
})