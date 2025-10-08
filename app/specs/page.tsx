"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, Search, Settings, ExternalLink, Edit } from "lucide-react";
import { SpecTable } from "@/components/specs/spec-table";
import { SpecSources } from "@/components/specs/spec-sources";

export default function SpecsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Specs Manager</h1>
          <p className="text-muted-foreground mt-1">
            Manage ad specifications for different channels and formats
          </p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Spec
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search specifications..."
            className="pl-8 w-full"
          />
        </div>
        <Button variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Manage Sources
        </Button>
      </div>

      <Tabs defaultValue="programmatic" className="space-y-6">
        <TabsList>
          <TabsTrigger value="programmatic">Programmatic Display</TabsTrigger>
          <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
          <TabsTrigger value="meta">Meta</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>
        
        <TabsContent value="programmatic">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Programmatic Display Specifications</CardTitle>
                  <CardDescription>
                    Standard ad units for programmatic display campaigns
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Source
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SpecTable channel="programmatic" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Last updated: July 15, 2023
              </div>
              <div className="text-sm">
                Source: <span className="font-medium">Quantcast Display Specs</span>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="linkedin">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>LinkedIn Ad Specifications</CardTitle>
                  <CardDescription>
                    Ad formats and requirements for LinkedIn campaigns
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" />
                    Edit Specs
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Source
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <SpecTable channel="linkedin" />
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Last updated: August 3, 2023
              </div>
              <div className="text-sm">
                Source: <span className="font-medium">LinkedIn Marketing Solutions</span>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="meta">
          <Card>
            <CardHeader>
              <CardTitle>Meta Ad Specifications</CardTitle>
              <CardDescription>
                Ad formats and requirements for Meta platforms (Facebook, Instagram)
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center max-w-md">
                <Settings className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Meta Specs Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're working on adding Meta ad specifications to the system.
                </p>
                <Button>Request Meta Specs</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="email">
          <Card>
            <CardHeader>
              <CardTitle>Email Specifications</CardTitle>
              <CardDescription>
                Format requirements for email marketing campaigns
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center max-w-md">
                <Settings className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">Email Specs Coming Soon</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  We're working on adding email marketing specifications to the system.
                </p>
                <Button>Request Email Specs</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="custom">
          <Card>
            <CardHeader>
              <CardTitle>Custom Specifications</CardTitle>
              <CardDescription>
                Custom ad specifications for specialized channels or formats
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center max-w-md">
                <PlusCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium mb-2">No Custom Specs Yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create custom specifications for channels or formats not covered by the standard options.
                </p>
                <Button>Add Custom Spec</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Specification Sources</h2>
        <SpecSources />
      </div>
    </div>
  );
}
