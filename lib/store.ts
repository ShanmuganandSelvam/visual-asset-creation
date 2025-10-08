import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LanguageState {
  selectedLanguages: string[];
  setSelectedLanguages: (languages: string[]) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      selectedLanguages: ["en"],
      setSelectedLanguages: (languages) => set({ selectedLanguages }),
    }),
    {
      name: 'language-storage',
    }
  )
);
