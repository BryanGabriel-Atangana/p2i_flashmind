import createDoc from "@/utils/supabase/createDoc.post";
import { create } from "zustand";

interface DocumentState {
  docTitle: string;
  setDocTitle: (title: string) => void;
  createDocument: (color: string) => Promise<void>;
}

const useDocumentStore = create<DocumentState>((set) => ({
  docTitle: "",
  setDocTitle: (title: string) => set(() => ({ docTitle: title })),
  createDocument: async (color: string) => {
    try {
      createDoc(color);
    } catch (e) {
      console.log(e);
      return;
    }

    console.log("Document was created");
  },
}));

export default useDocumentStore;
