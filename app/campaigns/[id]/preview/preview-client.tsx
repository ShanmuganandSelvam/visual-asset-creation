"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Download, Share2, Eye, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CampaignPreviewClient({ params }: { params: { id: string } }) {
  const [currentFormat, setCurrentFormat] = useState("billboard");
  const [currentVariant, setCurrentVariant] = useState(0);

  const formats = {
    billboard: {
      name: "Billboard",
      dimensions: "970×250",
      variants: [
        "https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    halfpage: {
      name: "Half Page",
      dimensions: "300×600",
      variants: [
        "https://images.pexels.com/photos/5912599/pexels-photo-5912599.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5912603/pexels-photo-5912603.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    },
    linkedin: {
      name: "LinkedIn",
      dimensions: "1200×627",
      variants: [
        "https://images.pexels.com/photos/5912607/pexels-photo-5912607.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/5912612/pexels-photo-5912612.jpeg?auto=compress&cs=tinysrgb&w=600"
      ]
    }
  };

  const currentFormatData = formats[currentFormat as keyof typeof formats];

  // Define dimensions for each format
  const formatDimensions = {
    billboard: { width: "970px", height: "250px" },
    halfpage: { width: "300px", height: "600px" },
    linkedin: { width: "1200px", height: "627px", scale: 0.5 } // Scale down LinkedIn format to fit
  };

  // Get current dimensions
  const currentDimensions = formatDimensions[currentFormat as keyof typeof formatDimensions];

  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Link href={`/campaigns/${params.id}`}>
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Campaign Preview</h1>
          <p className="text-muted-foreground mt-1">
            Summer Product Launch • Campaign ID: {params.id}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9">
          <Card className="overflow-hidden">
            <div className="bg-muted/30 p-8 flex items-center justify-center">
              <div 
                className="relative" 
                style={{ 
                  width: currentDimensions.width,
                  height: currentDimensions.height,
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  transform: currentFormat === "linkedin" ? "scale(0.5)" : "none",
                  transformOrigin: "top left"
                }}
              >
                <Image 
                  src={currentFormatData.variants[currentVariant]} 
                  alt={`${currentFormatData.name} preview`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md shadow-md"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Button size="icon" variant="outline" className="h-8 w-8 bg-background/80">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="h-8 w-8 bg-background/80">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-2 left-2">
                  <Badge className="bg-background/80 text-foreground">
                    {currentFormatData.dimensions}
                  </Badge>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{currentFormatData.name}</Badge>
                  <Badge variant="outline">Variant {currentVariant + 1}</Badge>
                </div>
                <div className="flex gap-1">
                  {currentFormatData.variants.map((_, index) => (
                    <Button 
                      key={index}
                      variant={currentVariant === index ? "default" : "outline"} 
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => setCurrentVariant(index)}
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <Card>
            <CardContent className="p-4">
              <Tabs defaultValue="formats" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="formats">Formats</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                </TabsList>
                
                <TabsContent value="formats" className="pt-4 space-y-4">
                  <div 
                    className={`border rounded-md overflow-hidden cursor-pointer ${currentFormat === "billboard" ? "ring-2 ring-primary" : ""}`}
                    onClick={() => {
                      setCurrentFormat("billboard");
                      setCurrentVariant(0);
                    }}
                  >
                    <div className="relative h-24">
                      <Image 
                        src={formats.billboard.variants[0]} 
                        alt="Billboard preview"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-2">
                      <div className="font-medium">Billboard</div>
                      <div className="text-xs text-muted-foreground">970×250 • 2 variants</div>
                    </div>
                  </div>
                  
                  <div 
                    className={`border rounded-md overflow-hidden cursor-pointer ${currentFormat === "halfpage" ? "ring-2 ring-primary" : ""}`}
                    onClick={() => {
                      setCurrentFormat("halfpage");
                      setCurrentVariant(0);
                    }}
                  >
                    <div className="relative h-24">
                      <Image 
                        src={formats.halfpage.variants[0]} 
                        alt="Half Page preview"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-2">
                      <div className="font-medium">Half Page</div>
                      <div className="text-xs text-muted-foreground">300×600 • 2 variants</div>
                    </div>
                  </div>
                  
                  <div 
                    className={`border rounded-md overflow-hidden cursor-pointer ${currentFormat === "linkedin" ? "ring-2 ring-primary" : ""}`}
                    onClick={() => {
                      setCurrentFormat("linkedin");
                      setCurrentVariant(0);
                    }}
                  >
                    <div className="relative h-24">
                      <Image 
                        src={formats.linkedin.variants[0]} 
                        alt="LinkedIn preview"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-2">
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">1200×627 • 2 variants</div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="info" className="pt-4 space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Campaign</p>
                    <p className="font-medium">Summer Product Launch</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Created By</p>
                    <p className="font-medium">Alex Morgan</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Updated</p>
                    <p className="font-medium">August 10, 2023</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge>In Progress</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Channels</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Programmatic Display</div>
                      <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">LinkedIn</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
