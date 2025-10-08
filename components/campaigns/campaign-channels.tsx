"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Info, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function CampaignChannels() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Channels & Specs</CardTitle>
        <CardDescription>
          Select channels and ad specifications for your campaign
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="programmatic" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="programmatic">Programmatic Display</TabsTrigger>
            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
            <TabsTrigger value="custom">Custom Specs</TabsTrigger>
          </TabsList>
          
          <TabsContent value="programmatic" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Programmatic Display Units</h3>
                <p className="text-sm text-muted-foreground">
                  Select the ad units you want to include in your campaign
                </p>
              </div>
              <Badge variant="outline">Quantcast Specs</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="billboard" defaultChecked />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="billboard" className="font-medium">Billboard</Label>
                    <Badge>970×250</Badge>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Large horizontal format for high-impact placements</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Large horizontal format for high-impact placements
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Max file size: 150KB</Badge>
                    <Badge variant="outline">Formats: JPG, PNG, GIF</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="halfpage" defaultChecked />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="halfpage" className="font-medium">Half Page</Label>
                    <Badge>300×600</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Vertical format with high visibility and engagement
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Max file size: 100KB</Badge>
                    <Badge variant="outline">Formats: JPG, PNG, GIF</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="mpu" />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="mpu" className="font-medium">MPU (Medium Rectangle)</Label>
                    <Badge>300×250</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Standard rectangular format with wide support
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Max file size: 100KB</Badge>
                    <Badge variant="outline">Formats: JPG, PNG, GIF</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="mobile-leaderboard" />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="mobile-leaderboard" className="font-medium">Mobile Leaderboard</Label>
                    <Badge>320×50</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Compact horizontal format for mobile devices
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Max file size: 50KB</Badge>
                    <Badge variant="outline">Formats: JPG, PNG, GIF</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="native" />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="native" className="font-medium">Hybrid Native</Label>
                    <Badge>Multiple sizes</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Native format that adapts to the publisher's site design
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Requires: Image, headline, body text</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="specs">
                <AccordionTrigger>Advanced Specifications</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div className="grid gap-2">
                      <Label>Animation Requirements</Label>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Maximum animation length: 15 seconds</p>
                        <p>• Animation must not loop more than 3 times</p>
                        <p>• Frame rate should not exceed 24fps</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label>Technical Requirements</Label>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Click-through URL must open in a new tab</p>
                        <p>• No audio autoplay allowed</p>
                        <p>• No expanding formats without user interaction</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label>Character Limits</Label>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Headline: 25 characters maximum</p>
                        <p>• Body text: 90 characters maximum</p>
                        <p>• CTA: 15 characters maximum</p>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="linkedin" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">LinkedIn Ad Formats</h3>
                <p className="text-sm text-muted-foreground">
                  Select the LinkedIn ad formats for your campaign
                </p>
              </div>
              <Badge variant="outline">LinkedIn Ads Specs</Badge>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="single-image" defaultChecked />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="single-image" className="font-medium">Single Image Ad</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Standard image ad that appears in the LinkedIn feed
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Ratio: 1.91:1</Badge>
                    <Badge variant="outline">Recommended: 1200×627px</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="carousel" />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="carousel" className="font-medium">Carousel Ad</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Multiple images in a single ad that users can swipe through
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">2-10 cards</Badge>
                    <Badge variant="outline">Ratio: 1:1</Badge>
                    <Badge variant="outline">Recommended: 1080×1080px</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="video" />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="video" className="font-medium">Video Ad</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Video content that plays in the LinkedIn feed
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Length: 5 sec - 30 min</Badge>
                    <Badge variant="outline">Format: MP4</Badge>
                    <Badge variant="outline">Max size: 200MB</Badge>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 border rounded-md p-4">
                <Checkbox id="document" />
                <div className="grid gap-1.5">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="document" className="font-medium">Document Ad</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Showcase PDFs that members can download
                  </p>
                  <div className="flex gap-2 mt-1">
                    <Badge variant="outline">Format: PDF</Badge>
                    <Badge variant="outline">Max size: 100MB</Badge>
                    <Badge variant="outline">Max pages: 13</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="specs">
                <AccordionTrigger>Text Specifications</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 pt-2">
                    <div className="grid gap-2">
                      <Label>Character Limits</Label>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>• Headline: 150 characters maximum</p>
                        <p>• Descriptive text: 600 characters maximum</p>
                        <p>• Company name: 100 characters maximum</p>
                        <p>• CTA text: Pre-defined options only</p>
                      </div>
                    </div>
                    
                    <div className="grid gap-2">
                      <Label>Available Call-to-Actions</Label>
                      <div className="text-sm text-muted-foreground">
                        <div className="grid grid-cols-3 gap-2">
                          <Badge variant="outline">Learn More</Badge>
                          <Badge variant="outline">Sign Up</Badge>
                          <Badge variant="outline">Subscribe</Badge>
                          <Badge variant="outline">Register</Badge>
                          <Badge variant="outline">Apply Now</Badge>
                          <Badge variant="outline">Download</Badge>
                          <Badge variant="outline">Request Demo</Badge>
                          <Badge variant="outline">Contact Us</Badge>
                          <Badge variant="outline">View Website</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="custom" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Custom Specifications</h3>
                <p className="text-sm text-muted-foreground">
                  Define custom ad specifications for your campaign
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Custom Spec
              </Button>
            </div>
            
            <div className="border rounded-lg p-8 text-center">
              <div className="mx-auto flex flex-col items-center justify-center space-y-4 max-w-md">
                <h3 className="font-medium">No Custom Specs Yet</h3>
                <p className="text-sm text-muted-foreground">
                  Create custom specifications for channels or formats not covered by the standard options
                </p>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Custom Spec
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Back</Button>
        <Button>
          Continue
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
