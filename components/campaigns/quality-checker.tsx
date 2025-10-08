"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle, XCircle, ArrowRight, RefreshCw, Eye, Wand2 } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";

export function QualityChecker() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Quality & Compliance</CardTitle>
              <CardDescription>
                Verify your ad units meet brand and platform requirements
              </CardDescription>
            </div>
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Run All Checks
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Brand Compliance</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-medium">Passed</span>
                    </div>
                    <span className="text-sm text-muted-foreground">6/6 checks</span>
                  </div>
                  <Progress value={100} className="h-2 mt-2" />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <AlertCircle className="h-5 w-5 text-amber-500 mr-2" />
                      <span className="font-medium">Issues Found</span>
                    </div>
                    <span className="text-sm text-muted-foreground">4/6 checks</span>
                  </div>
                  <Progress value={66} className="h-2 mt-2" />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Spec Compliance</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                      <span className="font-medium">Passed</span>
                    </div>
                    <span className="text-sm text-muted-foreground">8/8 checks</span>
                  </div>
                  <Progress value={100} className="h-2 mt-2" />
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    <Eye className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <Tabs defaultValue="issues" className="space-y-4">
              <TabsList>
                <TabsTrigger value="issues">Issues (2)</TabsTrigger>
                <TabsTrigger value="all">All Checks</TabsTrigger>
                <TabsTrigger value="history">Check History</TabsTrigger>
              </TabsList>
              
              <TabsContent value="issues">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Issues Requiring Attention</CardTitle>
                    <CardDescription>
                      Fix these issues before exporting your ad units
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-full">
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                          </div>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium">Contrast Ratio Below WCAG AA Standard</h4>
                              <p className="text-sm text-muted-foreground">
                                The text contrast ratio is 3.5:1, which fails WCAG AA requirements (minimum 4.5:1)
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">Billboard (970×250)</Badge>
                              <Badge variant="outline">Variant 2</Badge>
                              <Badge variant="outline">Accessibility</Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm">
                                <Wand2 className="mr-2 h-4 w-4" />
                                Auto-Fix
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-amber-100 dark:bg-amber-900/20 p-2 rounded-full">
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                          </div>
                          <div className="space-y-2">
                            <div>
                              <h4 className="font-medium">Missing Alt Text for Image</h4>
                              <p className="text-sm text-muted-foreground">
                                The key visual image is missing alternative text for screen readers
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">LinkedIn Single Image</Badge>
                              <Badge variant="outline">All Variants</Badge>
                              <Badge variant="outline">Accessibility</Badge>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm">
                                <Wand2 className="mr-2 h-4 w-4" />
                                Generate Alt Text
                              </Button>
                              <Button variant="outline" size="sm">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">All Quality Checks</CardTitle>
                    <CardDescription>
                      Complete list of all quality and compliance checks
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Check</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Ad Units</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-medium">Logo Placement</TableCell>
                          <TableCell>
                            <Badge variant="outline">Brand</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                              <span>Passed</span>
                            </div>
                          </TableCell>
                          <TableCell>All</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Color Palette</TableCell>
                          <TableCell>
                            <Badge variant="outline">Brand</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                              <span>Passed</span>
                            </div>
                          </TableCell>
                          <TableCell>All</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Typography</TableCell>
                          <TableCell>
                            <Badge variant="outline">Brand</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                              <span>Passed</span>
                            </div>
                          </TableCell>
                          <TableCell>All</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Text Contrast</TableCell>
                          <TableCell>
                            <Badge variant="outline">Accessibility</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                              <span>Issues</span>
                            </div>
                          </TableCell>
                          <TableCell>Billboard V2</TableCell>
                          <TableCell className="text-right">
                            <Button size="sm">Fix</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Alt Text</TableCell>
                          <TableCell>
                            <Badge variant="outline">Accessibility</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 text-amber-500 mr-1" />
                              <span>Issues</span>
                            </div>
                          </TableCell>
                          <TableCell>LinkedIn</TableCell>
                          <TableCell className="text-right">
                            <Button size="sm">Fix</Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">File Size</TableCell>
                          <TableCell>
                            <Badge variant="outline">Spec</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                              <span>Passed</span>
                            </div>
                          </TableCell>
                          <TableCell>All</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-medium">Dimensions</TableCell>
                          <TableCell>
                            <Badge variant="outline">Spec</Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                              <span>Passed</span>
                            </div>
                          </TableCell>
                          <TableCell>All</TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="history">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Check History</CardTitle>
                    <CardDescription>
                      Record of previous quality checks and fixes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">August 10, 2023 - 2:45 PM</h4>
                            <p className="text-sm text-muted-foreground">
                              Full check run after variant generation
                            </p>
                          </div>
                          <Badge>2 Issues</Badge>
                        </div>
                        <div className="text-sm">
                          <p>• Found contrast issues in Billboard variant</p>
                          <p>• Missing alt text in LinkedIn variants</p>
                        </div>
                      </div>
                      
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">August 9, 2023 - 11:20 AM</h4>
                            <p className="text-sm text-muted-foreground">
                              Initial check after ad unit composition
                            </p>
                          </div>
                          <Badge>4 Issues</Badge>
                        </div>
                        <div className="text-sm">
                          <p>• Logo placement outside safe zone</p>
                          <p>• Non-brand color usage</p>
                          <p>• Text contrast issues</p>
                          <p>• File size exceeding limits</p>
                        </div>
                      </div>
                      
                      <div className="border-b pb-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">August 9, 2023 - 11:35 AM</h4>
                            <p className="text-sm text-muted-foreground">
                              Auto-fixes applied
                            </p>
                          </div>
                          <Badge variant="outline">Fixed</Badge>
                        </div>
                        <div className="text-sm">
                          <p>• Logo placement corrected</p>
                          <p>• Colors adjusted to brand palette</p>
                          <p>• Image compression applied to reduce file size</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Back to Variants</Button>
          <Button>
            Continue to Export
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Auto-Fix Settings</CardTitle>
            <CardDescription>
              Configure how automatic fixes are applied
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Auto-Apply Brand Fixes</div>
                <div className="text-sm text-muted-foreground">
                  Automatically correct brand guideline violations
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Auto-Apply Accessibility Fixes</div>
                <div className="text-sm text-muted-foreground">
                  Automatically fix WCAG compliance issues
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Auto-Apply Spec Fixes</div>
                <div className="text-sm text-muted-foreground">
                  Automatically adjust to meet platform specifications
                </div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="font-medium">Generate Change Log</div>
                <div className="text-sm text-muted-foreground">
                  Record all automatic changes made to assets
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Compliance Standards</CardTitle>
            <CardDescription>
              Standards and guidelines being enforced
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Brand Guidelines</h4>
                <div className="flex items-center gap-2">
                  <Badge>v2.3</Badge>
                  <span className="text-sm text-muted-foreground">Updated July 2023</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Enforcing logo usage, typography, color palette, and visual style rules
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Accessibility</h4>
                <div className="flex items-center gap-2">
                  <Badge>WCAG 2.1</Badge>
                  <Badge variant="outline">AA Level</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ensuring contrast ratios, text size, alt text, and focus indicators meet standards
                </p>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-medium">Platform Specifications</h4>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Quantcast</Badge>
                  <Badge variant="outline">LinkedIn</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Validating dimensions, file sizes, formats, and technical requirements
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
