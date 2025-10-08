import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Star, StarOff, MoreHorizontal, Edit, Eye } from "lucide-react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TemplateGridProps {
  viewMode: "grid" | "list";
}

export function TemplateGrid({ viewMode }: TemplateGridProps) {
  const templates = [
    {
      id: "temp-001",
      name: "Product Showcase",
      description: "Highlight product features with clean layout",
      thumbnail: "https://images.pexels.com/photos/5912618/pexels-photo-5912618.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Display",
      featured: true,
      formats: ["Billboard", "Halfpage", "MPU"],
      author: "Design Team",
      created: "Jul 12, 2023"
    },
    {
      id: "temp-002",
      name: "Corporate Announcement",
      description: "Professional template for company news",
      thumbnail: "https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "LinkedIn",
      featured: false,
      formats: ["Single Image", "Carousel"],
      author: "Marketing Team",
      created: "Aug 3, 2023"
    },
    {
      id: "temp-003",
      name: "Seasonal Promotion",
      description: "Eye-catching design for limited-time offers",
      thumbnail: "https://images.pexels.com/photos/5912599/pexels-photo-5912599.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Multi-channel",
      featured: true,
      formats: ["Billboard", "Halfpage", "LinkedIn"],
      author: "Creative Team",
      created: "Jun 22, 2023"
    },
    {
      id: "temp-004",
      name: "Technical Datasheet",
      description: "Clear presentation of technical specifications",
      thumbnail: "https://images.pexels.com/photos/5912603/pexels-photo-5912603.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "LinkedIn",
      featured: false,
      formats: ["Single Image", "Document Ad"],
      author: "Product Team",
      created: "Aug 15, 2023"
    },
    {
      id: "temp-005",
      name: "Customer Testimonial",
      description: "Showcase customer success stories",
      thumbnail: "https://images.pexels.com/photos/5912607/pexels-photo-5912607.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "LinkedIn",
      featured: true,
      formats: ["Single Image", "Carousel"],
      author: "Marketing Team",
      created: "Jul 28, 2023"
    },
    {
      id: "temp-006",
      name: "Product Launch",
      description: "Announce new products with impact",
      thumbnail: "https://images.pexels.com/photos/5912612/pexels-photo-5912612.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Multi-channel",
      featured: false,
      formats: ["Billboard", "MPU", "LinkedIn", "Email"],
      author: "Design Team",
      created: "Aug 5, 2023"
    },
    {
      id: "temp-007",
      name: "Event Promotion",
      description: "Drive registrations for webinars and events",
      thumbnail: "https://images.pexels.com/photos/5912616/pexels-photo-5912616.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Display",
      featured: false,
      formats: ["Billboard", "Halfpage"],
      author: "Events Team",
      created: "Jul 10, 2023"
    },
    {
      id: "temp-008",
      name: "Brand Awareness",
      description: "Strengthen brand recognition and recall",
      thumbnail: "https://images.pexels.com/photos/5912620/pexels-photo-5912620.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Multi-channel",
      featured: true,
      formats: ["Billboard", "LinkedIn", "Email"],
      author: "Brand Team",
      created: "Jun 15, 2023"
    }
  ];

  if (viewMode === "grid") {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image 
                src={template.thumbnail} 
                alt={template.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={templates.indexOf(template) < 4}
                unoptimized
              />
              <div className="absolute top-2 right-2 flex gap-2">
                {template.featured ? (
                  <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                  </Button>
                ) : (
                  <Button size="icon" variant="outline" className="h-8 w-8 rounded-full bg-background/80">
                    <StarOff className="h-4 w-4" />
                  </Button>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-8 w-8 rounded-full bg-background/80">
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
                      <Eye className="mr-2 h-4 w-4" />
                      Preview
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Copy className="mr-2 h-4 w-4" />
                      Duplicate
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-lg">{template.name}</CardTitle>
              <CardDescription className="line-clamp-2">{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-2">
              <div className="flex flex-wrap gap-2 mb-2">
                <Badge>{template.category}</Badge>
                {template.formats.slice(0, 2).map((format) => (
                  <Badge key={format} variant="outline">{format}</Badge>
                ))}
                {template.formats.length > 2 && (
                  <Badge variant="outline">+{template.formats.length - 2} more</Badge>
                )}
              </div>
              <div className="text-xs text-muted-foreground">
                Created by {template.author} • {template.created}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full">
                <Copy className="mr-2 h-4 w-4" />
                Use Template
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Template</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Formats</TableHead>
            <TableHead>Created By</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {templates.map((template) => (
            <TableRow key={template.id}>
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-16 rounded overflow-hidden">
                    <Image 
                      src={template.thumbnail} 
                      alt={template.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="64px"
                      unoptimized
                    />
                  </div>
                  <div>
                    <div className="font-medium flex items-center">
                      {template.name}
                      {template.featured && (
                        <Star className="h-3 w-3 ml-1 fill-primary text-primary" />
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground line-clamp-1">
                      {template.description}
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Badge>{template.category}</Badge>
              </TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {template.formats.slice(0, 2).map((format) => (
                    <Badge key={format} variant="outline" className="text-xs">{format}</Badge>
                  ))}
                  {template.formats.length > 2 && (
                    <Badge variant="outline" className="text-xs">+{template.formats.length - 2}</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>{template.author}</TableCell>
              <TableCell>{template.created}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>Set as Featured</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
