"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Save, CheckCircle, AlertCircle, Loader2, Globe } from "lucide-react";
import Link from "next/link";
import { AdUnitComposer } from "@/components/campaigns/ad-unit-composer";
import { VariantGenerator } from "@/components/campaigns/variant-generator";
import { QualityChecker } from "@/components/campaigns/quality-checker";
import { ExportDelivery } from "@/components/campaigns/export-delivery";

export default function CampaignPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="flex items-center mb-8">
        <Link href="/campaigns">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight">Summer Product Launch</h1>
          <p className="text-muted-foreground mt-1">
            Campaign ID: {params.id}
          </p>
        </div>
        <div className="flex gap-2">
          <Link href={`/campaigns/${params.id}/languages`}>
            <Button variant="outline">
              <Globe className="mr-2 h-4 w-4" />
              Languages
            </Button>
          </Link>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-9">
          <Tabs defaultValue="composer" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="composer">Ad Unit Composer</TabsTrigger>
              <TabsTrigger value="variants">Variant Generation</TabsTrigger>
              <TabsTrigger value="quality">Quality & Compliance</TabsTrigger>
              <TabsTrigger value="export">Export & Delivery</TabsTrigger>
            </TabsList>
            
            <TabsContent value="composer">
              <AdUnitComposer />
            </TabsContent>
            
            <TabsContent value="variants">
              <VariantGenerator />
            </TabsContent>
            
            <TabsContent value="quality">
              <QualityChecker />
            </TabsContent>
            
            <TabsContent value="export">
              <ExportDelivery />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Campaign Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Ad Units</span>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium">2/2 Complete</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Variants</span>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium">6/6 Generated</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Quality Checks</span>
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                  <span className="text-sm font-medium">2 Issues Found</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Languages</span>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-blue-500 mr-1" />
                  <span className="text-sm font-medium">4 Languages</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Export</span>
                <div className="flex items-center">
                  <Loader2 className="h-4 w-4 text-muted-foreground animate-spin mr-1" />
                  <span className="text-sm font-medium">Not Started</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Campaign Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Objective</p>
                <p className="font-medium">Product Launch</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Timeline</p>
                <p className="font-medium">Aug 1 - Sep 15, 2023</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Channels</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">Programmatic Display</div>
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">LinkedIn</div>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Languages</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">🇺🇸 English</div>
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">🇩🇪 German</div>
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">🇫🇷 French</div>
                  <div className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded">🇪🇸 Spanish</div>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Key Message</p>
                <p className="font-medium">"Introducing our revolutionary new product line"</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Edit Campaign Details
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Team</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium">AM</span>
                </div>
                <div>
                  <p className="font-medium">Alex Morgan</p>
                  <p className="text-xs text-muted-foreground">Campaign Owner</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium">JC</span>
                </div>
                <div>
                  <p className="font-medium">Jamie Chen</p>
                  <p className="text-xs text-muted-foreground">Designer</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xs font-medium">TK</span>
                </div>
                <div>
                  <p className="font-medium">Taylor Kim</p>
                  <p className="text-xs text-muted-foreground">Reviewer</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full">
                Manage Team
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
