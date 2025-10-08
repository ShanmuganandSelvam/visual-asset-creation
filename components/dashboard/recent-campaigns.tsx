import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Eye, MoreHorizontal } from "lucide-react";

export function RecentCampaigns() {
  const campaigns = [
    {
      id: 1,
      name: "Summer Product Launch",
      description: "Facebook and Instagram campaign assets",
      progress: 85,
      status: "In Progress",
      assets: 24,
      dueDate: "Aug 15, 2023",
    },
    {
      id: 2,
      name: "Q3 Promotional Banners",
      description: "Web and email marketing assets",
      progress: 100,
      status: "Completed",
      assets: 18,
      dueDate: "Jul 30, 2023",
    },
    {
      id: 3,
      name: "Holiday Season Campaign",
      description: "Social media and display ads",
      progress: 40,
      status: "In Progress",
      assets: 32,
      dueDate: "Oct 1, 2023",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <Card key={campaign.id}>
          <CardHeader className="pb-2">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>{campaign.name}</CardTitle>
                <CardDescription className="mt-1">{campaign.description}</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2 mt-2">
              <Badge variant={campaign.status === "Completed" ? "success" : "default"}>
                {campaign.status}
              </Badge>
              <span className="text-sm text-muted-foreground">Due: {campaign.dueDate}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm font-medium">{campaign.progress}%</span>
              </div>
              <Progress value={campaign.progress} />
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm text-muted-foreground">{campaign.assets} assets</span>
              <Button variant="outline" size="sm">
                <Eye className="mr-2 h-4 w-4" />
                View
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
