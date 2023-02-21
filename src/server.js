import express from "express";
const app = express();
import DBCONNECT from "./config/dbconnection.js";
const PORT = process.env.PORT || 5000;
import studentRoutes from "./routes/student.js"

app.use(express.urlencoded({extended : true}))
app.use(express.json());


app.use("/api/v1", studentRoutes)


app.listen(PORT, async () => {
    try {
        await DBCONNECT()
        console.log('server listening on Port ${PORT')
    }catch (err) {
        console.log(err)
    }
});
