
const express= require("express")

const app=express()
const router= require("./routers/route")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

const PORT= process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Server running on${PORT}`)
})