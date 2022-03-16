const express = require('express');
const app = express();

app.get("/info", (req, res) => {
    res.send({
        result: "success",
        data: {
            version: "1.2.3"
        }
    });
});

app.listen(3000, () => {
    console.log('server ready with few more changes....');
});