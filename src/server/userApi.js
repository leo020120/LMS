import express from "express";
import supabase from "../supabase.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/users", async (req, res) => {
  const { data, error } = await supabase.from("profiles").select();
  res.send(data);
});

app.listen(3001, () => {
  console.log("listening on 3001");
});
