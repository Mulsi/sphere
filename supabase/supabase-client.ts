import { createClient } from "@supabase/supabase-js";
import { type Database } from "../types/database.types";

const runtimeConfig = useRuntimeConfig()

const supabaseUrl: string = runtimeConfig.public.supabaseUrl;
const supabaseKey: string = runtimeConfig.public.supabaseKey;

const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export default supabase;