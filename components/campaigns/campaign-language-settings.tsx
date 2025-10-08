"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LanguageSelector } from "@/components/language-selector";
import { Globe, Languages, AlertTriangle, Check } from "lucide-react";

export function CampaignLanguageSettings() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["en"]);
  const [primaryLanguage, setPrimaryLanguage] = useState<string>("en");
  const [autoTranslate, setAutoTranslate] = useState<boolean>(true);
  const [legalText, setLegalText] = useState<string>(
    "*Terms and conditions apply. See website for details."
  );
  const [translationStatus, setTranslationStatus] = useState<"idle" | "translating" | "complete">("idle");

  const handleGenerateTranslations = () => {
    setTranslationStatus("translating");
    // Simulate translation process
    setTimeout(() => {
      setTranslationStatus("complete");
    }, 2000);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>Campaign Language Settings</CardTitle>
            <CardDescription>
              Configure languages and translation settings for your campaign
            </CardDescription>
          </div>
          {translationStatus === "complete" && (
            <div className="flex items-center text-green-500">
              <Check className="h-4 w-4 mr-1" />
              <span className="text-sm">Translations Generated</span>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Campaign Languages</Label>
          <LanguageSelector 
            selectedLanguages={selectedLanguages}
            onChange={setSelectedLanguages}
          />
          <p className="text-xs text-muted-foreground mt-1">
            Select all languages that will be used in this campaign.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label>Primary Language</Label>
            <Tabs 
              defaultValue={primaryLanguage} 
              className="w-full"
              onValueChange={(value) => setPrimaryLanguage(value)}
            >
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="en">
                  <span className="mr-1">🇺🇸</span> English
                </TabsTrigger>
                <TabsTrigger value="de">
                  <span className="mr-1">🇩🇪</span> German
                </TabsTrigger>
                <TabsTrigger value="fr">
                  <span className="mr-1">🇫🇷</span> French
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-xs text-muted-foreground">
              The primary language will be used as the source for translations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="auto-translate">Automatic Translation</Label>
                <p className="text-xs text-muted-foreground">
                  Automatically translate content to all selected languages
                </p>
              </div>
              <Switch 
                id="auto-translate" 
                checked={autoTranslate}
                onCheckedChange={setAutoTranslate}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="human-review">Human Review</Label>
                <p className="text-xs text-muted-foreground">
                  Send translations for human review before publishing
                </p>
              </div>
              <Switch id="human-review" />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="legal-text">Standard Legal Text</Label>
          <Textarea 
            id="legal-text" 
            value={legalText}
            onChange={(e) => setLegalText(e.target.value)}
            rows={2}
          />
          <p className="text-xs text-muted-foreground">
            This text will be translated and included in all campaign assets.
          </p>
        </div>

        <div className="bg-muted/50 p-4 rounded-md">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
            <div>
              <h4 className="font-medium text-sm">Region-Specific Requirements</h4>
              <p className="text-sm text-muted-foreground mt-1">
                Some regions have specific legal requirements for marketing materials:
              </p>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1 list-disc list-inside">
                <li>EU: GDPR compliance notices required</li>
                <li>California: CCPA compliance notices required</li>
                <li>Canada: Content must be available in both English and French</li>
                <li>Switzerland: Content should be available in German, French, and Italian</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button 
          onClick={handleGenerateTranslations}
          disabled={translationStatus === "translating"}
        >
          {translationStatus === "translating" ? (
            <>
              <Languages className="mr-2 h-4 w-4 animate-spin" />
              Generating Translations...
            </>
          ) : (
            <>
              <Languages className="mr-2 h-4 w-4" />
              Generate Translations
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
