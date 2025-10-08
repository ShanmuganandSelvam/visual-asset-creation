"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/date-picker";
import { CampaignKeyVisual } from "@/components/campaigns/campaign-key-visual";
import { CampaignChannels } from "@/components/campaigns/campaign-channels";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";
import { LanguageSelector } from "@/components/language-selector";
import { CampaignLanguageSettings } from "@/components/campaigns/campaign-language-settings";

export default function NewCampaignPage() {
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["en"]);
  
  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Link href="/campaigns">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Campaign</h1>
          <p className="text-muted-foreground mt-1">
            Create a new marketing campaign
          </p>
        </div>
      </div>

      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="details">Campaign Details</TabsTrigger>
          <TabsTrigger value="languages">Languages</TabsTrigger>
          <TabsTrigger value="key-visual">Key Visual</TabsTrigger>
          <TabsTrigger value="channels">Channels & Specs</TabsTrigger>
          <TabsTrigger value="assets">Assets & Uploads</TabsTrigger>
        </TabsList>
        
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Information</CardTitle>
              <CardDescription>
                Enter the basic details for your new campaign
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Campaign Name</Label>
                <Input id="name" placeholder="Enter campaign name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="objective">Campaign Objective</Label>
                <Select>
                  <SelectTrigger id="objective">
                    <SelectValue placeholder="Select an objective" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="awareness">Brand Awareness</SelectItem>
                    <SelectItem value="consideration">Consideration</SelectItem>
                    <SelectItem value="conversion">Conversion</SelectItem>
                    <SelectItem value="loyalty">Loyalty & Retention</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Campaign Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your campaign's goals and target audience"
                  rows={4}
                />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <DatePicker />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <DatePicker />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="markets">Target Markets</Label>
                <Select>
                  <SelectTrigger id="markets">
                    <SelectValue placeholder="Select markets" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="global">Global</SelectItem>
                    <SelectItem value="na">North America</SelectItem>
                    <SelectItem value="emea">EMEA</SelectItem>
                    <SelectItem value="apac">APAC</SelectItem>
                    <SelectItem value="latam">LATAM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label>Languages</Label>
                <LanguageSelector 
                  selectedLanguages={selectedLanguages}
                  onChange={setSelectedLanguages}
                  maxLanguages={10}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="key-message">Key Message</Label>
                <Textarea 
                  id="key-message" 
                  placeholder="Enter the primary message for this campaign"
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cta">Call to Action</Label>
                <Input id="cta" placeholder="e.g., Learn More, Sign Up, Contact Us" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Save and Continue
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="languages">
          <CampaignLanguageSettings />
        </TabsContent>
        
        <TabsContent value="key-visual">
          <CampaignKeyVisual />
        </TabsContent>
        
        <TabsContent value="channels">
          <CampaignChannels />
        </TabsContent>
        
        <TabsContent value="assets">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Assets</CardTitle>
              <CardDescription>
                Upload or generate assets for your campaign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground py-8">
                Complete the Channels & Specs section first to enable asset creation
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button disabled>Generate Assets</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
