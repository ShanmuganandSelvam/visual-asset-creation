"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, Copy, RefreshCw, ThumbsDown, ThumbsUp } from "lucide-react";

type ContentType = "headlines" | "legal" | "cta";

interface TranslationEditorProps {
  contentType: ContentType;
  originalText: string;
  contentDescription: string;
}

interface Translation {
  language: string;
  flag: string;
  text: string;
  status: "machine" | "human" | "pending";
}

export function TranslationEditor({ 
  contentType, 
  originalText,
  contentDescription 
}: TranslationEditorProps) {
  const [translations, setTranslations] = useState<Translation[]>([
    { 
      language: "German", 
      flag: "🇩🇪", 
      text: contentType === "headlines" 
        ? "Wir stellen unsere revolutionäre neue Produktlinie vor" 
        : contentType === "legal"
        ? "*Es gelten die Allgemeinen Geschäftsbedingungen. Siehe Website für Details."
        : "Mehr Erfahren", 
      status: "machine" 
    },
    { 
      language: "French", 
      flag: "🇫🇷", 
      text: contentType === "headlines" 
        ? "Découvrez notre nouvelle gamme de produits révolutionnaires" 
        : contentType === "legal"
        ? "*Des conditions générales s'appliquent. Voir le site web pour plus de détails."
        : "En Savoir Plus", 
      status: "machine" 
    },
    { 
      language: "Spanish", 
      flag: "🇪🇸", 
      text: contentType === "headlines" 
        ? "Presentamos nuestra revolucionaria nueva línea de productos" 
        : contentType === "legal"
        ? "*Se aplican términos y condiciones. Consulte el sitio web para más detalles."
        : "Más Información", 
      status: "machine" 
    },
    { 
      language: "Italian", 
      flag: "🇮🇹", 
      text: "", 
      status: "pending" 
    },
  ]);

  const updateTranslation = (index: number, text: string) => {
    const newTranslations = [...translations];
    newTranslations[index] = {
      ...newTranslations[index],
      text,
      status: "human"
    };
    setTranslations(newTranslations);
  };

  const regenerateTranslation = (index: number) => {
    // In a real app, this would call an API to regenerate the translation
    // For now, we'll just simulate it by adding "(regenerated)" to the text
    const newTranslations = [...translations];
    const currentText = newTranslations[index].text;
    
    if (currentText.includes("(regenerated)")) {
      newTranslations[index].text = currentText;
    } else {
      newTranslations[index].text = currentText + " (regenerated)";
    }
    
    newTranslations[index].status = "machine";
    setTranslations(newTranslations);
  };

  const getStatusBadge = (status: "machine" | "human" | "pending") => {
    switch (status) {
      case "machine":
        return <Badge variant="secondary">Machine Translation</Badge>;
      case "human":
        return <Badge variant="default">Human Edited</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return null;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {contentType === "headlines" ? "Headlines & Copy" : 
           contentType === "legal" ? "Legal Text" : "Call to Action"} Translations
        </CardTitle>
        <CardDescription>
          {contentDescription}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Original Text (English)</Label>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">🇺🇸</span>
            <Textarea 
              value={originalText}
              rows={contentType === "cta" ? 1 : 3}
              className="font-medium"
            />
          </div>
        </div>
        
        <div className="border-t pt-6">
          <Tabs defaultValue="all" className="space-y-4">
            <div className="flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="all">All Languages</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="machine">Machine Translated</TabsTrigger>
                <TabsTrigger value="human">Human Edited</TabsTrigger>
              </TabsList>
              
              <Button variant="outline" size="sm">
                <RefreshCw className="mr-2 h-3 w-3" />
                Regenerate All
              </Button>
            </div>
            
            <TabsContent value="all" className="space-y-4">
              {translations.map((translation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{translation.flag}</span>
                      <span>{translation.language}</span>
                    </div>
                    {getStatusBadge(translation.status)}
                  </div>
                  
                  <div className="flex gap-2">
                    <Textarea 
                      value={translation.text}
                      onChange={(e) => updateTranslation(index, e.target.value)}
                      placeholder={`Enter ${translation.language} translation...`}
                      rows={contentType === "cta" ? 1 : 3}
                      disabled={translation.status === "pending"}
                    />
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => regenerateTranslation(index)}
                        disabled={translation.status === "pending"}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {translation.status === "machine" && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>Is this translation accurate?</span>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsUp className="h-3 w-3 mr-1" />
                        Yes
                      </Button>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <ThumbsDown className="h-3 w-3 mr-1" />
                        No
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="pending" className="space-y-4">
              {translations.filter(t => t.status === "pending").map((translation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{translation.flag}</span>
                      <span>{translation.language}</span>
                    </div>
                    {getStatusBadge(translation.status)}
                  </div>
                  
                  <div className="flex gap-2">
                    <Textarea 
                      value={translation.text}
                      placeholder={`Enter ${translation.language} translation...`}
                      rows={contentType === "cta" ? 1 : 3}
                      disabled
                    />
                    <Button variant="outline" className="h-full">
                      Generate
                    </Button>
                  </div>
                </div>
              ))}
              
              {translations.filter(t => t.status === "pending").length === 0 && (
                <p className="text-center text-muted-foreground py-4">
                  No pending translations
                </p>
              )}
            </TabsContent>
            
            <TabsContent value="machine" className="space-y-4">
              {translations.filter(t => t.status === "machine").map((translation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{translation.flag}</span>
                      <span>{translation.language}</span>
                    </div>
                    {getStatusBadge(translation.status)}
                  </div>
                  
                  <div className="flex gap-2">
                    <Textarea 
                      value={translation.text}
                      onChange={(e) => updateTranslation(
                        translations.findIndex(t => t.language === translation.language), 
                        e.target.value
                      )}
                      rows={contentType === "cta" ? 1 : 3}
                    />
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => regenerateTranslation(
                          translations.findIndex(t => t.language === translation.language)
                        )}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Is this translation accurate?</span>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ThumbsUp className="h-3 w-3 mr-1" />
                      Yes
                    </Button>
                    <Button variant="ghost" size="sm" className="h-7 px-2">
                      <ThumbsDown className="h-3 w-3 mr-1" />
                      No
                    </Button>
                  </div>
                </div>
              ))}
              
              {translations.filter(t => t.status === "machine").length === 0 && (
                <p className="text-center text-muted-foreground py-4">
                  No machine translations
                </p>
              )}
            </TabsContent>
            
            <TabsContent value="human" className="space-y-4">
              {translations.filter(t => t.status === "human").map((translation, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{translation.flag}</span>
                      <span>{translation.language}</span>
                    </div>
                    {getStatusBadge(translation.status)}
                  </div>
                  
                  <div className="flex gap-2">
                    <Textarea 
                      value={translation.text}
                      onChange={(e) => updateTranslation(
                        translations.findIndex(t => t.language === translation.language), 
                        e.target.value
                      )}
                      rows={contentType === "cta" ? 1 : 3}
                    />
                    <div className="flex flex-col gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => regenerateTranslation(
                          translations.findIndex(t => t.language === translation.language)
                        )}
                      >
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              {translations.filter(t => t.status === "human").length === 0 && (
                <p className="text-center text-muted-foreground py-4">
                  No human-edited translations
                </p>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>
          <Check className="mr-2 h-4 w-4" />
          Save Translations
        </Button>
      </CardFooter>
    </Card>
  );
}
