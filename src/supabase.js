// src/supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kechdxscwcocftvafbej.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlY2hkeHNjd2NvY2Z0dmFmYmVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0Mzc3NjAsImV4cCI6MjAxMjAxMzc2MH0.BwozDKPCaVG6OBBbKYSZySJrozRxSwL6FFQVEKiVAHU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
