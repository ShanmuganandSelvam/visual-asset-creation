import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Edit, Trash2, Plus } from "lucide-react";

export function SpecSources() {
  const sources = [
    {
      id: "source-001",
      name: "Quantcast Display Specs",
      url: "https://www.quantcast.com/resources/display-specs",
      lastUpdated: "July 15, 2023",
      channel: "Programmatic Display",
      status: "Active"
    },
    {
      id: "source-002",
      name: "LinkedIn Marketing Solutions",
      url: "https://www.linkedin.com/business/marketing/specs",
      lastUpdated: "August 3, 2023",
      channel: "LinkedIn",
      status: "Active"
    },
    {
      id: "source-003",
      name: "Meta for Business",
      url: "https://www.facebook.com/business/ads-guide",
      lastUpdated: "Not imported",
      channel: "Meta",
      status: "Pending"
    },
    {
      id: "source-004",
      name: "Google Display & Video 360",
      url: "https://support.google.com/displayvideo/answer/3209392",
      lastUpdated: "Not imported",
      channel: "Programmatic Display",
      status: "Pending"
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sources.map((source) => (
        <Card key={source.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{source.name}</CardTitle>
              <Badge variant={source.status === "Active" ? "default" : "outline"}>
                {source.status}
              </Badge>
            </div>
            <CardDescription className="flex items-center">
              <ExternalLink className="h-3 w-3 mr-1" />
              <a href={source.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {source.url}
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Channel</p>
                <p className="font-medium">{source.channel}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Last Updated</p>
                <p className="font-medium">{source.lastUpdated}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end gap-2 pt-3 border-t">
            {source.status === "Active" ? (
              <>
                <Button size="sm" variant="outline">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Remove
                </Button>
              </>
            ) : (
              <Button size="sm">
                <Plus className="h-4 w-4 mr-1" />
                Import Specs
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
      
      <Card className="border-dashed">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Plus className="h-8 w-8 text-muted-foreground mb-4" />
          <h3 className="font-medium mb-2">Add New Source</h3>
          <p className="text-sm text-muted-foreground text-center mb-4 max-w-xs">
            Add a new specification source to import ad requirements from
          </p>
          <Button>Add Source</Button>
        </CardContent>
      </Card>
    </div>
  );
}
