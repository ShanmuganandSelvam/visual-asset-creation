"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Wand2, Copy, Check, RefreshCw, Languages, Palette, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";

export function VariantGenerator() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Variant Generator</CardTitle>
              <CardDescription>
                Create multiple variations of your ad units
              </CardDescription>
            </div>
            <Button>
              <Wand2 className="mr-2 h-4 w-4" />
              Generate Variants
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="visual" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="visual">Visual Variants</TabsTrigger>
              <TabsTrigger value="copy">Copy Variants</TabsTrigger>
              <TabsTrigger value="localization">Localization</TabsTrigger>
              <TabsTrigger value="all">All Variants</TabsTrigger>
            </TabsList>
            
            <TabsContent value="visual" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden border-2 border-primary">
                  <div className="relative h-40">
                    <Image 
                      src="https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Original variant"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-primary">Original</Badge>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">Original</h4>
                        <p className="text-xs text-muted-foreground">Base design</p>
                      </div>
                      <Checkbox checked disabled />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="relative h-40">
                    <Image 
                      src="https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Variant 1"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">Variant 1</h4>
                        <p className="text-xs text-muted-foreground">Alternative image</p>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="relative h-40">
                    <Image 
                      src="https://images.pexels.com/photos/5912599/pexels-photo-5912599.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Variant 2"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">Variant 2</h4>
                        <p className="text-xs text-muted-foreground">Different angle</p>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="relative h-40 bg-gradient-to-r from-blue-500 to-purple-500">
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <h3 className="font-bold">Revolutionary Product</h3>
                        <p className="text-sm">Transform your business</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">Variant 3</h4>
                        <p className="text-xs text-muted-foreground">Gradient background</p>
                      </div>
                      <Checkbox />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="relative h-40">
                    <Image 
                      src="https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600" 
                      alt="Variant 4"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-white">
                      <div className="text-center">
                        <h3 className="font-bold">Revolutionary Product</h3>
                        <p className="text-sm">Transform your business</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">Variant 4</h4>
                        <p className="text-xs text-muted-foreground">Text overlay</p>
                      </div>
                      <Checkbox defaultChecked />
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="overflow-hidden border-dashed">
                  <div className="h-40 flex items-center justify-center">
                    <Button variant="outline">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Generate More
                    </Button>
                  </div>
                  <CardContent className="p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium text-sm">New Variant</h4>
                        <p className="text-xs text-muted-foreground">AI-generated option</p>
                      </div>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">Visual Variation Settings</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Color Variation</Label>
                      <span className="text-xs text-muted-foreground">Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                    <p className="text-xs text-muted-foreground">
                      Controls how much the color scheme varies between versions
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <Label>Layout Variation</Label>
                      <span className="text-xs text-muted-foreground">Low</span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={1} />
                    <p className="text-xs text-muted-foreground">
                      Controls how much the layout structure varies between versions
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Focus Elements</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Product</Badge>
                      <Badge variant="outline" className="cursor-pointer">People</Badge>
                      <Badge variant="outline" className="cursor-pointer">Text</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Logo</Badge>
                      <Badge variant="outline" className="cursor-pointer">Background</Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Style Direction</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Professional</Badge>
                      <Badge variant="outline" className="cursor-pointer">Bold</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Clean</Badge>
                      <Badge variant="outline" className="cursor-pointer">Vibrant</Badge>
                      <Badge variant="outline" className="cursor-pointer">Minimal</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="copy" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">Original Copy</CardTitle>
                      <Badge>Informative</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Introducing our revolutionary new product line</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Discover how our latest innovation can transform your business operations and drive growth.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">Learn More</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox checked disabled />
                    </div>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">Variant 1</CardTitle>
                      <Badge>Persuasive</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Transform Your Business With Our Game-Changing Solution</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Join industry leaders who've increased efficiency by 40% with our innovative technology.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">Get Started Today</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox defaultChecked />
                    </div>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">Variant 2</CardTitle>
                      <Badge>Question-based</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Ready to Revolutionize Your Business Operations?</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Our innovative solution helps you streamline processes, reduce costs, and drive sustainable growth.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">Discover How</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox defaultChecked />
                    </div>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">Variant 3</CardTitle>
                      <Badge>Benefit-focused</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Boost Efficiency, Cut Costs, Grow Faster</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Our revolutionary product line delivers measurable results from day one, with seamless integration.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">See Results</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox />
                    </div>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">Copy Variation Settings</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Tone Sliders</Label>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Professional</span>
                          <span className="text-xs text-muted-foreground">High</span>
                        </div>
                        <Slider defaultValue={[80]} max={100} step={1} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Bold</span>
                          <span className="text-xs text-muted-foreground">Medium</span>
                        </div>
                        <Slider defaultValue={[60]} max={100} step={1} />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Technical</span>
                          <span className="text-xs text-muted-foreground">Low</span>
                        </div>
                        <Slider defaultValue={[30]} max={100} step={1} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Message Focus</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Benefits</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Features</Badge>
                      <Badge variant="outline" className="cursor-pointer">Emotional</Badge>
                      <Badge variant="outline" className="cursor-pointer">Social Proof</Badge>
                      <Badge variant="outline" className="cursor-pointer">Urgency</Badge>
                      <Badge variant="outline" className="cursor-pointer">Questions</Badge>
                      <Badge variant="outline" className="cursor-pointer">Statistics</Badge>
                    </div>
                    
                    <div className="pt-4">
                      <Label>CTA Style</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="outline" className="cursor-pointer">Learn More</Badge>
                        <Badge variant="outline" className="cursor-pointer bg-secondary">Get Started</Badge>
                        <Badge variant="outline" className="cursor-pointer">Contact Us</Badge>
                        <Badge variant="outline" className="cursor-pointer">Try Now</Badge>
                        <Badge variant="outline" className="cursor-pointer bg-secondary">See Results</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="localization" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">English (US)</CardTitle>
                      <Badge>Original</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Introducing our revolutionary new product line</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Discover how our latest innovation can transform your business operations and drive growth.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">Learn More</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Legal</Label>
                      <p className="text-xs">*Terms and conditions apply. See website for details.</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox checked disabled />
                    </div>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">German</CardTitle>
                      <Badge>Translated</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Wir stellen unsere revolutionäre neue Produktlinie vor</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Entdecken Sie, wie unsere neueste Innovation Ihre Geschäftsprozesse transformieren und Wachstum fördern kann.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">Mehr Erfahren</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Legal</Label>
                      <p className="text-xs">*Es gelten die Allgemeinen Geschäftsbedingungen. Siehe Website für Details.</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox defaultChecked />
                    </div>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">French</CardTitle>
                      <Badge>Translated</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Découvrez notre nouvelle gamme de produits révolutionnaires</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Découvrez comment notre dernière innovation peut transformer vos opérations commerciales et stimuler la croissance.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">En Savoir Plus</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Legal</Label>
                      <p className="text-xs">*Des conditions générales s'appliquent. Voir le site web pour plus de détails.</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox defaultChecked />
                    </div>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between">
                      <CardTitle className="text-base">Spanish</CardTitle>
                      <Badge>Translated</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <Label className="text-xs text-muted-foreground">Headline</Label>
                      <p className="font-medium">Presentamos nuestra revolucionaria nueva línea de productos</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Subheading</Label>
                      <p>Descubra cómo nuestra última innovación puede transformar las operaciones de su empresa e impulsar el crecimiento.</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">CTA</Label>
                      <p className="font-medium">Más Información</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Legal</Label>
                      <p className="text-xs">*Se aplican términos y condiciones. Consulte el sitio web para más detalles.</p>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between w-full">
                      <Button variant="ghost" size="sm">
                        <Copy className="mr-2 h-4 w-4" />
                        Copy
                      </Button>
                      <Checkbox />
                    </div>
                  </CardFooter>
                </Card>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">Localization Settings</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Target Languages</Label>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="cursor-pointer bg-secondary">English (US)</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-secondary">German</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-secondary">French</Badge>
                      <Badge variant="outline" className="cursor-pointer bg-secondary">Spanish</Badge>
                      <Badge variant="outline" className="cursor-pointer">Italian</Badge>
                      <Badge variant="outline" className="cursor-pointer">Japanese</Badge>
                      <Badge variant="outline" className="cursor-pointer">Chinese</Badge>
                      <Button variant="ghost" size="sm" className="h-6">
                        <Plus className="h-3 w-3 mr-1" />
                        Add
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Market-Specific Legal Text</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">GDPR Compliance (EU)</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">CCPA Compliance (California)</span>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Industry-Specific Disclaimers</span>
                        <Switch />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button>
                    <Languages className="mr-2 h-4 w-4" />
                    Generate Translations
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="all" className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">All Generated Variants</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">24 variants total</span>
                    <Button variant="outline" size="sm">
                      <Check className="mr-2 h-4 w-4" />
                      Select All
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border rounded-md overflow-hidden">
                      <div className="relative h-24">
                        <Image 
                          src={`https://images.pexels.com/photos/59126${i + 10}/pexels-photo-59126${i + 10}.jpeg?auto=compress&cs=tinysrgb&w=600`} 
                          alt={`Variant ${i + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="p-2 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-medium">Variant {i + 1}</p>
                          <p className="text-xs text-muted-foreground">{i % 3 === 0 ? 'Visual' : i % 3 === 1 ? 'Copy' : 'Localized'}</p>
                        </div>
                        <Checkbox defaultChecked={i < 8} />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center mt-4">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Load More
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">Batch Generation Settings</h3>
                <div className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <Label>Visual Variants</Label>
                    <Input type="number" defaultValue="4" />
                    <div className="flex items-center gap-2">
                      <Palette className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Color, layout, and style variations</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Copy Variants</Label>
                    <Input type="number" defaultValue="4" />
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Headline, subhead, and CTA variations</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Languages</Label>
                    <Input type="number" defaultValue="4" />
                    <div className="flex items-center gap-2">
                      <Languages className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Translations for selected markets</span>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Generate All Variants
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back to Composer</Button>
          <Button>Continue to Quality Check</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function Plus({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
