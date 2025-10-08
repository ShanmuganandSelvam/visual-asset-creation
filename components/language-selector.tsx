"use client";

import { useState } from "react";
import { Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";

export type Language = {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
};

export const languages: Language[] = [
  { id: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { id: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { id: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { id: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { id: "it", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { id: "pt", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { id: "nl", name: "Dutch", nativeName: "Nederlands", flag: "🇳🇱" },
  { id: "ru", name: "Russian", nativeName: "Русский", flag: "🇷🇺" },
  { id: "zh", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
  { id: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { id: "ko", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { id: "ar", name: "Arabic", nativeName: "العربية", flag: "🇸🇦" },
  { id: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳" },
  { id: "tr", name: "Turkish", nativeName: "Türkçe", flag: "🇹🇷" },
  { id: "pl", name: "Polish", nativeName: "Polski", flag: "🇵🇱" },
  { id: "sv", name: "Swedish", nativeName: "Svenska", flag: "🇸🇪" },
];

interface LanguageSelectorProps {
  selectedLanguages: string[];
  onChange: (languages: string[]) => void;
  maxLanguages?: number;
}

export function LanguageSelector({ 
  selectedLanguages, 
  onChange, 
  maxLanguages = 10 
}: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);

  const toggleLanguage = (languageId: string) => {
    if (selectedLanguages.includes(languageId)) {
      onChange(selectedLanguages.filter(id => id !== languageId));
    } else {
      if (selectedLanguages.length < maxLanguages) {
        onChange([...selectedLanguages, languageId]);
      }
    }
  };

  const removeLanguage = (languageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(selectedLanguages.filter(id => id !== languageId));
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedLanguages.map(langId => {
          const language = languages.find(l => l.id === langId);
          if (!language) return null;
          
          return (
            <Badge key={language.id} variant="secondary" className="px-2 py-1">
              <span className="mr-1">{language.flag}</span>
              {language.name}
              <button 
                className="ml-1 text-muted-foreground hover:text-foreground"
                onClick={(e) => removeLanguage(language.id, e)}
              >
                ×
              </button>
            </Badge>
          );
        })}
      </div>
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            role="combobox" 
            aria-expanded={open}
            className="w-full justify-between"
          >
            <div className="flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              {selectedLanguages.length > 0 
                ? `${selectedLanguages.length} language${selectedLanguages.length > 1 ? 's' : ''} selected` 
                : "Select languages"}
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Search languages..." />
            <CommandList>
              <CommandEmpty>No language found.</CommandEmpty>
              <CommandGroup>
                {languages.map((language) => {
                  const isSelected = selectedLanguages.includes(language.id);
                  return (
                    <CommandItem
                      key={language.id}
                      value={`${language.name} ${language.nativeName}`}
                      onSelect={() => toggleLanguage(language.id)}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{language.flag}</span>
                        <span>{language.name}</span>
                        <span className="ml-2 text-xs text-muted-foreground">
                          {language.nativeName}
                        </span>
                      </div>
                      {isSelected && <Check className="h-4 w-4" />}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      {selectedLanguages.length >= maxLanguages && (
        <p className="text-xs text-muted-foreground mt-1">
          Maximum of {maxLanguages} languages can be selected.
        </p>
      )}
    </div>
  );
}
