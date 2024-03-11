import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function createDoc(color: string) {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return redirect("/login");
  }
  const { data } = await supabase.from("documents").insert({
    user_id: user.id,
    title: "New Document",
    color: "white",
  });
}
