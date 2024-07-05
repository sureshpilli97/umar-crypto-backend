
import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://tdinfztfexqczbhlogfd.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;