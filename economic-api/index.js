import express from "express";
import { getIpca } from "./get-ipca.js";
import { getDolar } from "./get-dolar.js";

const app = express()

app.get("/ipca/:data", async (req, res) => {
    const dataFinal = req.params.dataFinal
    const inflacao = await getIpca(dataFinal)
    res.send(inflacao)
})
app.get("/dolar/:dataFinal", async (req, res) => {
    const dataFinal = req.params.dataFinal
    const dolar = await getDolar(dataFinal)
    res.send(dolar)
})

const PORT = Number(process.env.PORT || 3000)

app.listen(PORT)