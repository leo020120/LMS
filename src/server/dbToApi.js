//Not necessarily needed as datable pulls directly from DB. but will be good for API practise

import express from "express";
import supabase from "../../supabase";

const app = express();

//express get matches data
app.get("/matches", async (request, response) => {
  const { data, error } = await supabase.from("matches").select();
  response.send(data);
  console.log("data", data);
});

app.listen(3001, () => {
  console.log("listening on 3001");
});
