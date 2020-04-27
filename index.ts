import server from "./src/server";

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
   require("dotenv").config();
   console.log(`Server is listening on port ${PORT} \n`);
});
