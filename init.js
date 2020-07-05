import app from "./app";

const PORT = 4000;

const handlelistening =() => console.log(`✅ Listening on : ${PORT}`);

app.listen(PORT,handlelistening);