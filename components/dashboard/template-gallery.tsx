import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Star } from "lucide-react";

export function TemplateGallery() {
  const templates = [
    {
      id: 1,
      name: "Social Media Post",
      thumbnail: "https://images.pexels.com/photos/5912519/pexels-photo-5912519.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Social Media",
      popular: true,
    },
    {
      id: 2,
      name: "Product Banner",
      thumbnail: "https://images.pexels.com/photos/5912573/pexels-photo-5912573.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Web",
      popular: false,
    },
    {
      id: 3,
      name: "Email Header",
      thumbnail: "https://images.pexels.com/photos/5912598/pexels-photo-5912598.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Email",
      popular: false,
    },
    {
      id: 4,
      name: "Display Ad",
      thumbnail: "https://images.pexels.com/photos/5912600/pexels-photo-5912600.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Advertising",
      popular: true,
    },
    {
      id: 5,
      name: "Instagram Story",
      thumbnail: "https://images.pexels.com/photos/5912604/pexels-photo-5912604.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Social Media",
      popular: true,
    },
    {
      id: 6,
      name: "LinkedIn Banner",
      thumbnail: "https://images.pexels.com/photos/5912607/pexels-photo-5912607.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Social Media",
      popular: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {templates.map((template) => (
        <Card key={template.id} className="overflow-hidden">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={template.thumbnail}
              alt={template.name}
              className="object-cover w-full h-full transition-transform hover:scale-105"
            />
            {template.popular && (
              <div className="absolute top-2 right-2">
                <div className="bg-yellow-500/90 text-white text-xs px-2 py-1 rounded-full flex items-center">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Popular
                </div>
              </div>
            )}
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{template.name}</h3>
                <p className="text-xs text-muted-foreground">{template.category}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
