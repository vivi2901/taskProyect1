//import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
//import { EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_SUPABASE_ANON_KEY } from '@env';

const supabaseUrl = "https://wvedznxbfpxxypzgqpnw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2ZWR6bnhiZnB4eHlwemdxcG53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MDExMTUsImV4cCI6MjA1OTI3NzExNX0.YcnLw8cYbM3chrGrXCKnN90PotLNAoO9-_uDOXM5-NI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);