"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Layers, LayoutGrid, Type, Image as ImageIcon, Palette, Save } from "lucide-react";
import Image from "next/image";

export function AdUnitComposer() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Ad Unit Composer</CardTitle>
              <CardDescription>
                Design your ad units with smart layout assistance
              </CardDescription>
            </div>
            <Select defaultValue="billboard">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select ad unit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="billboard">Billboard (970×250)</SelectItem>
                <SelectItem value="halfpage">Half Page (300×600)</SelectItem>
                <SelectItem value="linkedin">LinkedIn Single Image</SelectItem>
                <SelectItem value="mobile">Mobile Leaderboard</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="border rounded-lg p-4 bg-muted/20">
                <div className="relative w-full" style={{ height: "250px" }}>
                  <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded flex items-center justify-center">
                    <div className="w-[970px] h-[250px] max-w-full max-h-full relative bg-white rounded shadow-md overflow-hidden">
                      {/* Ad preview content */}
                      <div className="absolute inset-0 flex">
                        {/* Left side - image */}
                        <div className="w-1/2 relative">
                          <Image 
                            src="https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600" 
                            alt="Ad visual"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                          <div className="absolute bottom-3 left-3">
                            <div className="bg-white/90 p-1 rounded">
                              <div className="w-24 h-8 bg-primary/20 rounded flex items-center justify-center">
                                <span className="text-xs font-bold">LOGO</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side - content */}
                        <div className="w-1/2 p-6 flex flex-col justify-center">
                          <h3 className="text-xl font-bold mb-3">Introducing our revolutionary new product line</h3>
                          <p className="text-sm mb-4">Discover how our latest innovation can transform your business operations and drive growth.</p>
                          <div className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-medium inline-block">
                            Learn More
                          </div>
                          <div className="mt-3 text-xs text-muted-foreground">
                            *Terms and conditions apply. See website for details.
                          </div>
                        </div>
                      </div>
                      
                      {/* Safe area guides */}
                      <div className="absolute inset-0 border border-blue-500/20 m-4 pointer-events-none"></div>
                      
                      {/* Logo safe area */}
                      <div className="absolute bottom-3 left-3 w-28 h-12 border border-red-500/20 pointer-events-none"></div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4 gap-2">
                  <Button variant="outline" size="sm">
                    <Layers className="mr-2 h-4 w-4" />
                    Show Guides
                  </Button>
                  <Button variant="outline" size="sm">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    Show Grid
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 lg:col-span-4">
              <Tabs defaultValue="layout" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="layout">Layout</TabsTrigger>
                  <TabsTrigger value="text">Text</TabsTrigger>
                  <TabsTrigger value="image">Image</TabsTrigger>
                  <TabsTrigger value="style">Style</TabsTrigger>
                </TabsList>
                
                <TabsContent value="layout" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Layout Type</Label>
                    <Select defaultValue="split">
                      <SelectTrigger>
                        <SelectValue placeholder="Select layout" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="split">Split (50/50)</SelectItem>
                        <SelectItem value="image-dominant">Image Dominant (70/30)</SelectItem>
                        <SelectItem value="text-dominant">Text Dominant (30/70)</SelectItem>
                        <SelectItem value="overlay">Text Overlay</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Image Position</Label>
                      <span className="text-xs text-muted-foreground">Left</span>
                    </div>
                    <Select defaultValue="left">
                      <SelectTrigger>
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="left">Left</SelectItem>
                        <SelectItem value="right">Right</SelectItem>
                        <SelectItem value="top">Top</SelectItem>
                        <SelectItem value="bottom">Bottom</SelectItem>
                        <SelectItem value="background">Background</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Content Alignment</Label>
                      <span className="text-xs text-muted-foreground">Center</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" size="sm" className="h-10">Top</Button>
                      <Button variant="secondary" size="sm" className="h-10">Center</Button>
                      <Button variant="outline" size="sm" className="h-10">Bottom</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Text Alignment</Label>
                      <span className="text-xs text-muted-foreground">Left</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="secondary" size="sm" className="h-10">Left</Button>
                      <Button variant="outline" size="sm" className="h-10">Center</Button>
                      <Button variant="outline" size="sm" className="h-10">Right</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Padding</Label>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </TabsContent>
                
                <TabsContent value="text" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="headline">Headline</Label>
                    <Textarea 
                      id="headline" 
                      placeholder="Enter headline text"
                      defaultValue="Introducing our revolutionary new product line"
                      rows={2}
                    />
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Character count: 47</span>
                      <span className="text-muted-foreground">Max: 50</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subhead">Subheading</Label>
                    <Textarea 
                      id="subhead" 
                      placeholder="Enter subheading text"
                      defaultValue="Discover how our latest innovation can transform your business operations and drive growth."
                      rows={3}
                    />
                    <div className="flex justify-between text-xs">
                      <span className="text-muted-foreground">Character count: 92</span>
                      <span className="text-muted-foreground">Max: 120</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cta">Call to Action</Label>
                    <Input id="cta" defaultValue="Learn More" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="legal">Legal Text</Label>
                    <Input id="legal" defaultValue="*Terms and conditions apply. See website for details." />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Switch id="show-logo" defaultChecked />
                    <Label htmlFor="show-logo">Show Logo</Label>
                  </div>
                </TabsContent>
                
                <TabsContent value="image" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Key Visual</Label>
                    <div className="border rounded-md overflow-hidden">
                      <div className="relative h-32 w-full">
                        <Image 
                          src="https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600" 
                          alt="Current key visual"
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-2 flex justify-between items-center">
                        <span className="text-xs">product-hero.jpg</span>
                        <Button variant="ghost" size="sm">Change</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Focal Point</Label>
                    <div className="border rounded-md p-4 h-32 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-4 bg-muted-foreground/20"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-full bg-muted-foreground/20"></div>
                      </div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 rounded-full border-2 border-primary bg-background/50 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Image Zoom</Label>
                      <span className="text-xs text-muted-foreground">100%</span>
                    </div>
                    <Slider defaultValue={[100]} max={200} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Brightness</Label>
                      <span className="text-xs text-muted-foreground">Default</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Contrast</Label>
                      <span className="text-xs text-muted-foreground">Default</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </TabsContent>
                
                <TabsContent value="style" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label>Color Theme</Label>
                    <Select defaultValue="primary">
                      <SelectTrigger>
                        <SelectValue placeholder="Select theme" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary Brand</SelectItem>
                        <SelectItem value="secondary">Secondary Brand</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="bold">Bold</SelectItem>
                        <SelectItem value="contrast">High Contrast</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Accent Color</Label>
                    <div className="grid grid-cols-6 gap-2">
                      <div className="h-8 bg-primary rounded-md cursor-pointer ring-2 ring-primary ring-offset-2"></div>
                      <div className="h-8 bg-blue-500 rounded-md cursor-pointer"></div>
                      <div className="h-8 bg-green-500 rounded-md cursor-pointer"></div>
                      <div className="h-8 bg-amber-500 rounded-md cursor-pointer"></div>
                      <div className="h-8 bg-red-500 rounded-md cursor-pointer"></div>
                      <div className="h-8 bg-purple-500 rounded-md cursor-pointer"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Typography Style</Label>
                    <Select defaultValue="modern">
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Modern</SelectItem>
                        <SelectItem value="classic">Classic</SelectItem>
                        <SelectItem value="bold">Bold</SelectItem>
                        <SelectItem value="minimal">Minimal</SelectItem>
                        <SelectItem value="technical">Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Font Size</Label>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Button Style</Label>
                    <Select defaultValue="filled">
                      <SelectTrigger>
                        <SelectValue placeholder="Select style" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="filled">Filled</SelectItem>
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="text">Text Only</SelectItem>
                        <SelectItem value="rounded">Rounded</SelectItem>
                        <SelectItem value="pill">Pill</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            Save as Template
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Ad Unit
          </Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Brand Guidelines</CardTitle>
            <CardDescription>
              Ensure your ad follows brand standards
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">Logo Usage</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Must appear in bottom-left or top-right corner</li>
                <li>• Minimum size: 60px width</li>
                <li>• Clear space: 1/4 of logo width on all sides</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Typography</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Headline: Bayer Sans Bold, 18-24px</li>
                <li>• Body: Bayer Sans Regular, 14-16px</li>
                <li>• CTA: Bayer Sans Medium, 14-16px</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Color Palette</h4>
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-primary"></div>
                <div className="h-8 w-8 rounded-full bg-blue-600"></div>
                <div className="h-8 w-8 rounded-full bg-green-600"></div>
                <div className="h-8 w-8 rounded-full bg-neutral-800"></div>
                <div className="h-8 w-8 rounded-full bg-neutral-200"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Spec Requirements</CardTitle>
            <CardDescription>
              Technical specifications for Billboard (970×250)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium">File Requirements</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Dimensions: 970×250 pixels</li>
                <li>• File size: Max 150KB</li>
                <li>• Format: JPG, PNG, GIF (static or animated)</li>
                <li>• Animation length: Max 15 seconds</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Text Limits</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Headline: 50 characters maximum</li>
                <li>• Body text: 120 characters maximum</li>
                <li>• CTA: 20 characters maximum</li>
                <li>• Legal: 100 characters maximum</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Safe Areas</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• 15px margin from all edges</li>
                <li>• Logo safe area: Bottom-left, 100×50px</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
