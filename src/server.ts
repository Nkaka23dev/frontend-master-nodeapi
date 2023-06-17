import express from "express";

const app = express();

app.get('/', (req: any, res: any) => {
    res.status = 200;
    res.json({ "Name": "Eric Nkaka" });
    res.end()
});

export default app;