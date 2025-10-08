"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Layers, Image, LayoutGrid, FileImage, Palette, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { RecentCampaigns } from "@/components/dashboard/recent-campaigns";
import { TemplateGallery } from "@/components/dashboard/template-gallery";
import { StatsCards } from "@/components/dashboard/stats-cards";

export default function Home() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI Visual Asset Creator</h1>
          <p className="text-muted-foreground mt-1">
            Generate on-brand visual ad assets at scale for your marketing campaigns
          </p>
        </div>
        <Link href="/campaigns/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </Link>
      </div>

      <StatsCards />

      <Tabs defaultValue="recent" className="mt-8">
        <TabsList>
          <TabsTrigger value="recent">Recent Campaigns</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="recent" className="space-y-4 mt-4">
          <RecentCampaigns />
        </TabsContent>
        <TabsContent value="templates" className="mt-4">
          <TemplateGallery />
        </TabsContent>
        <TabsContent value="activity" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Track changes and updates across your campaigns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Summer Campaign assets approved</p>
                    <p className="text-sm text-muted-foreground">All 24 assets passed compliance checks</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago by Alex Morgan</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <FileImage className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Product Launch variants generated</p>
                    <p className="text-sm text-muted-foreground">12 new variants created for LinkedIn campaign</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday by Taylor Kim</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 border-b pb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Palette className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Brand guidelines updated</p>
                    <p className="text-sm text-muted-foreground">New color palette and typography rules added</p>
                    <p className="text-xs text-muted-foreground mt-1">2 days ago by Jamie Chen</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Activity</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
