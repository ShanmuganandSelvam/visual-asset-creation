"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Download, Share2, ExternalLink, Archive, Check, Copy, FileDown, Upload, Code } from "lucide-react";
import Image from "next/image";

export function ExportDelivery() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Export & Delivery</CardTitle>
              <CardDescription>
                Export your ad assets in the required formats
              </CardDescription>
            </div>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="export" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="export">Export Options</TabsTrigger>
              <TabsTrigger value="delivery">Delivery</TabsTrigger>
              <TabsTrigger value="summary">Export Summary</TabsTrigger>
            </TabsList>
            
            <TabsContent value="export" className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">Select Assets to Export</h3>
                  <Button variant="outline" size="sm">
                    <Check className="mr-2 h-4 w-4" />
                    Select All
                  </Button>
                </div>
                
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Billboard (970×250)</h4>
                      <Badge>4 variants</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="border rounded-md overflow-hidden">
                          <div className="relative h-16">
                            <Image 
                              src={`https://images.pexels.com/photos/59126${i + 10}/pexels-photo-59126${i + 10}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                              alt={`Billboard variant ${i + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="p-2 flex justify-between items-center">
                            <span className="text-xs">Variant {i + 1}</span>
                            <Checkbox defaultChecked />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Half Page (300×600)</h4>
                      <Badge>2 variants</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="border rounded-md overflow-hidden">
                          <div className="relative h-24">
                            <Image 
                              src={`https://images.pexels.com/photos/59126${i + 14}/pexels-photo-59126${i + 14}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                              alt={`Half Page variant ${i + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="p-2 flex justify-between items-center">
                            <span className="text-xs">Variant {i + 1}</span>
                            <Checkbox defaultChecked />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">LinkedIn Single Image</h4>
                      <Badge>2 variants</Badge>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Array.from({ length: 2 }).map((_, i) => (
                        <div key={i} className="border rounded-md overflow-hidden">
                          <div className="relative h-24">
                            <Image 
                              src={`https://images.pexels.com/photos/59126${i + 16}/pexels-photo-59126${i + 16}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                              alt={`LinkedIn variant ${i + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                          <div className="p-2 flex justify-between items-center">
                            <span className="text-xs">Variant {i + 1}</span>
                            <Checkbox defaultChecked />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Export Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>File Formats</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer bg-secondary">PNG</Badge>
                        <Badge variant="outline" className="cursor-pointer bg-secondary">JPG</Badge>
                        <Badge variant="outline" className="cursor-pointer">GIF</Badge>
                        <Badge variant="outline" className="cursor-pointer">WebP</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Quality Settings</Label>
                      <Select defaultValue="high">
                        <SelectTrigger>
                          <SelectValue placeholder="Select quality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maximum">Maximum (100%)</SelectItem>
                          <SelectItem value="high">High (90%)</SelectItem>
                          <SelectItem value="medium">Medium (80%)</SelectItem>
                          <SelectItem value="optimized">Optimized for Web</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>File Naming Convention</Label>
                      <Select defaultValue="standard">
                        <SelectTrigger>
                          <SelectValue placeholder="Select naming convention" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Standard (campaign_unit_variant)</SelectItem>
                          <SelectItem value="detailed">Detailed (campaign_unit_size_variant_date)</SelectItem>
                          <SelectItem value="simple">Simple (unit_variant)</SelectItem>
                          <SelectItem value="custom">Custom</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-source" defaultChecked />
                      <label
                        htmlFor="include-source"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Include source files
                      </label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="include-metadata" defaultChecked />
                      <label
                        htmlFor="include-metadata"
                        className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Include metadata
                      </label>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Export Bundle</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Bundle Name</Label>
                      <Input defaultValue="summer_product_launch_assets" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Bundle Format</Label>
                      <Select defaultValue="zip">
                        <SelectTrigger>
                          <SelectValue placeholder="Select format" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="zip">ZIP Archive</SelectItem>
                          <SelectItem value="folder">Folder Structure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Include Documentation</Label>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="cursor-pointer bg-secondary">Readme</Badge>
                        <Badge variant="outline" className="cursor-pointer bg-secondary">Specs Sheet</Badge>
                        <Badge variant="outline" className="cursor-pointer">Usage Guidelines</Badge>
                        <Badge variant="outline" className="cursor-pointer bg-secondary">Change Log</Badge>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full">
                        <Archive className="mr-2 h-4 w-4" />
                        Create Export Bundle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="delivery" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-base">Direct Download</CardTitle>
                      <Badge>Ready</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border rounded-md p-3 bg-muted/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">summer_product_launch_assets.zip</span>
                        <span className="text-xs text-muted-foreground">12.4 MB</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Contains 8 ad units in PNG and JPG formats
                      </div>
                    </div>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download ZIP
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Share Link</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Input value="https://assets.example.com/s/a7b3c9d2" readOnly />
                      <Button variant="outline" size="icon">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Link Expiry</span>
                        <span className="text-xs text-muted-foreground">7 days</span>
                      </div>
                      <Select defaultValue="7days">
                        <SelectTrigger>
                          <SelectValue placeholder="Select expiry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="24hours">24 Hours</SelectItem>
                          <SelectItem value="7days">7 Days</SelectItem>
                          <SelectItem value="30days">30 Days</SelectItem>
                          <SelectItem value="never">Never</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full">
                      <Share2 className="mr-2 h-4 w-4" />
                      Generate New Link
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Platform Delivery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Select Platform</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select platform" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="linkedin">LinkedIn Campaign Manager</SelectItem>
                          <SelectItem value="dv360">Display & Video 360</SelectItem>
                          <SelectItem value="dam">Internal DAM</SelectItem>
                          <SelectItem value="s3">Amazon S3</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Account/Destination</Label>
                      <Select disabled>
                        <SelectTrigger>
                          <SelectValue placeholder="Select account" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="account1">Marketing Account</SelectItem>
                          <SelectItem value="account2">Agency Account</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button className="w-full" disabled>
                      <Upload className="mr-2 h-4 w-4" />
                      Connect Platform
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Design-to-Code Prompt</CardTitle>
                  <CardDescription>
                    Generate a prompt artifact for downstream development use
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-md p-4 bg-muted/20 space-y-2">
                    <h4 className="font-medium">Campaign Design Specifications</h4>
                    <div className="text-sm space-y-1">
                      <p>• <strong>Campaign:</strong> Summer Product Launch</p>
                      <p>• <strong>Brand Elements:</strong> Bayer Sans typography, primary color palette, logo in bottom-left</p>
                      <p>• <strong>Layout:</strong> Split layout with image on left (50%), content on right (50%)</p>
                      <p>• <strong>Key Visual:</strong> Product hero image with blue gradient background</p>
                      <p>• <strong>Typography:</strong> Headline (24px), Subheading (16px), CTA (16px bold)</p>
                      <p>• <strong>Accessibility:</strong> WCAG AA compliant with 4.5:1 minimum contrast ratio</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <Button variant="outline">
                      <FileDown className="mr-2 h-4 w-4" />
                      Download Specs
                    </Button>
                    <Button>
                      <Code className="mr-2 h-4 w-4" />
                      Generate Code Prompt
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="summary" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Export Summary</CardTitle>
                  <CardDescription>
                    Overview of all assets ready for export
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border rounded-md p-3 text-center">
                        <div className="text-3xl font-bold">8</div>
                        <div className="text-sm text-muted-foreground">Total Ad Units</div>
                      </div>
                      <div className="border rounded-md p-3 text-center">
                        <div className="text-3xl font-bold">3</div>
                        <div className="text-sm text-muted-foreground">Ad Formats</div>
                      </div>
                      <div className="border rounded-md p-3 text-center">
                        <div className="text-3xl font-bold">2</div>
                        <div className="text-sm text-muted-foreground">File Types</div>
                      </div>
                      <div className="border rounded-md p-3 text-center">
                        <div className="text-3xl font-bold">12.4</div>
                        <div className="text-sm text-muted-foreground">Total Size (MB)</div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <table className="min-w-full">
                        <thead className="bg-muted/50">
                          <tr>
                            <th className="px-4 py-2 text-left text-sm font-medium">Format</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Dimensions</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Variants</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">File Types</th>
                            <th className="px-4 py-2 text-left text-sm font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          <tr>
                            <td className="px-4 py-3 text-sm">Billboard</td>
                            <td className="px-4 py-3 text-sm">970×250</td>
                            <td className="px-4 py-3 text-sm">4</td>
                            <td className="px-4 py-3 text-sm">PNG, JPG</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-500">Ready</Badge>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm">Half Page</td>
                            <td className="px-4 py-3 text-sm">300×600</td>
                            <td className="px-4 py-3 text-sm">2</td>
                            <td className="px-4 py-3 text-sm">PNG, JPG</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-500">Ready</Badge>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-3 text-sm">LinkedIn Single Image</td>
                            <td className="px-4 py-3 text-sm">1200×627</td>
                            <td className="px-4 py-3 text-sm">2</td>
                            <td className="px-4 py-3 text-sm">PNG, JPG</td>
                            <td className="px-4 py-3">
                              <Badge className="bg-green-500">Ready</Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Export Bundle Contents</h4>
                      <div className="border rounded-md p-3 bg-muted/20 text-sm">
                        <pre className="whitespace-pre-wrap">
                          summer_product_launch_assets.zip
                          ├── billboard/
                          │   ├── billboard_970x250_v1.png
                          │   ├── billboard_970x250_v1.jpg
                          │   ├── billboard_970x250_v2.png
                          │   ├── billboard_970x250_v2.jpg
                          │   ├── billboard_970x250_v3.png
                          │   ├── billboard_970x250_v3.jpg
                          │   ├── billboard_970x250_v4.png
                          │   └── billboard_970x250_v4.jpg
                          ├── halfpage/
                          │   ├── halfpage_300x600_v1.png
                          │   ├── halfpage_300x600_v1.jpg
                          │   ├── halfpage_300x600_v2.png
                          │   └── halfpage_300x600_v2.jpg
                          ├── linkedin/
                          │   ├── linkedin_1200x627_v1.png
                          │   ├── linkedin_1200x627_v1.jpg
                          │   ├── linkedin_1200x627_v2.png
                          │   └── linkedin_1200x627_v2.jpg
                          ├── source/
                          │   └── [source files]
                          ├── README.md
                          └── specs.json
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Preview Assets
                  </Button>
                  <Button>
                    <Download className="mr-2 h-4 w-4" />
                    Download All
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back to Quality Check</Button>
          <Button>Complete Campaign</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
