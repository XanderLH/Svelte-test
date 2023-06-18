import { supabase } from "../../../supabase";

  export async function load() {
    const { data } = await supabase.from("games").select();
    return {
      games: data ?? [],
    };
  }