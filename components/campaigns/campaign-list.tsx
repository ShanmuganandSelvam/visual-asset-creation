import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit, ExternalLink, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CampaignList() {
  const campaigns = [
    {
      id: "camp-001",
      name: "Summer Product Launch",
      description: "New product line promotion across digital channels",
      progress: 85,
      status: "In Progress",
      dueDate: "Aug 15, 2023",
      owner: {
        name: "Alex Morgan",
        avatar: "https://i.pravatar.cc/150?img=1"
      },
      assets: 24,
      channels: ["Programmatic Display", "LinkedIn"]
    },
    {
      id: "camp-002",
      name: "Q3 Brand Awareness",
      description: "Multi-channel brand campaign for European markets",
      progress: 100,
      status: "Completed",
      dueDate: "Jul 30, 2023",
      owner: {
        name: "Jamie Chen",
        avatar: "https://i.pravatar.cc/150?img=2"
      },
      assets: 36,
      channels: ["Programmatic Display", "LinkedIn", "Meta"]
    },
    {
      id: "camp-003",
      name: "Product Feature Highlight",
      description: "Technical feature showcase for B2B audience",
      progress: 40,
      status: "In Progress",
      dueDate: "Sep 5, 2023",
      owner: {
        name: "Taylor Kim",
        avatar: "https://i.pravatar.cc/150?img=3"
      },
      assets: 12,
      channels: ["LinkedIn", "Email"]
    },
    {
      id: "camp-004",
      name: "Annual Conference Promotion",
      description: "Digital campaign for industry conference",
      progress: 20,
      status: "In Progress",
      dueDate: "Oct 10, 2023",
      owner: {
        name: "Jordan Smith",
        avatar: "https://i.pravatar.cc/150?img=4"
      },
      assets: 8,
      channels: ["LinkedIn", "Programmatic Display"]
    },
    {
      id: "camp-005",
      name: "Holiday Special Offer",
      description: "End-of-year promotion for key products",
      progress: 0,
      status: "Draft",
      dueDate: "Nov 15, 2023",
      owner: {
        name: "Casey Jones",
        avatar: "https://i.pravatar.cc/150?img=5"
      },
      assets: 0,
      channels: ["Programmatic Display"]
    },
    {
      id: "camp-006",
      name: "Customer Testimonial Series",
      description: "Success stories from key accounts",
      progress: 100,
      status: "Completed",
      dueDate: "Jun 30, 2023",
      owner: {
        name: "Riley Brown",
        avatar: "https://i.pravatar.cc/150?img=6"
      },
      assets: 18,
      channels: ["LinkedIn", "Email"]
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {campaigns.map((campaign) => (
        <Card key={campaign.id} className="overflow-hidden">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{campaign.name}</CardTitle>
              <div className="flex items-center gap-2">
                <Badge variant={
                  campaign.status === "Completed" ? "secondary" : 
                  campaign.status === "Draft" ? "outline" : "default"
                }>
                  {campaign.status}
                </Badge>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <CardDescription>{campaign.description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>Progress</span>
                  <span className="font-medium">{campaign.progress}%</span>
                </div>
                <Progress value={campaign.progress} />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Due Date</p>
                  <p className="font-medium">{campaign.dueDate}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Assets</p>
                  <p className="font-medium">{campaign.assets} files</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {campaign.channels.map((channel) => (
                  <Badge key={channel} variant="outline">{channel}</Badge>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-3 border-t">
            <div className="flex items-center">
              <Avatar className="h-8 w-8 mr-2">
                <AvatarImage src={campaign.owner.avatar} alt={campaign.owner.name} />
                <AvatarFallback>{campaign.owner.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="text-sm">{campaign.owner.name}</span>
            </div>
            <div className="flex gap-2">
              <Link href={`/campaigns/${campaign.id}`}>
                <Button size="sm" variant="ghost">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
              </Link>
              <Link href={`/campaigns/${campaign.id}/preview`}>
                <Button size="sm" variant="ghost">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
