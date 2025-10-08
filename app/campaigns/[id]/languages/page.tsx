"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { CampaignLanguageSettings } from "@/components/campaigns/campaign-language-settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { TranslationEditor } from "@/components/campaigns/translation-editor";

export default function CampaignLanguagesPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Link href={`/campaigns/${params.id}`}>
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Campaign Languages</h1>
          <p className="text-muted-foreground mt-1">
            Summer Product Launch • Campaign ID: {params.id}
          </p>
        </div>
        <Button>
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>

      <div className="space-y-6">
        <CampaignLanguageSettings />
        
        <Tabs defaultValue="headlines" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="headlines">Headlines & Copy</TabsTrigger>
            <TabsTrigger value="legal">Legal Text</TabsTrigger>
            <TabsTrigger value="cta">Call to Action</TabsTrigger>
            <TabsTrigger value="all">All Content</TabsTrigger>
          </TabsList>
          
          <TabsContent value="headlines">
            <TranslationEditor 
              contentType="headlines"
              originalText="Introducing our revolutionary new product line"
              contentDescription="Main headline that appears across all campaign assets"
            />
          </TabsContent>
          
          <TabsContent value="legal">
            <TranslationEditor 
              contentType="legal"
              originalText="*Terms and conditions apply. See website for details."
              contentDescription="Legal disclaimer text that appears in small print"
            />
          </TabsContent>
          
          <TabsContent value="cta">
            <TranslationEditor 
              contentType="cta"
              originalText="Learn More"
              contentDescription="Call to action button text"
            />
          </TabsContent>
          
          <TabsContent value="all">
            <Card className="p-6">
              <p className="text-center text-muted-foreground">
                Select a specific content type to edit translations
              </p>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
