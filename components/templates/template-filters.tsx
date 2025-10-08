"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface TemplateFiltersProps {
  className?: string;
}

export function TemplateFilters({ className }: TemplateFiltersProps) {
  return (
    <div className={`border rounded-lg p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Filters</h3>
        <Button variant="ghost" size="sm">
          <X className="h-4 w-4 mr-1" />
          Clear all
        </Button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-4">
        <div className="space-y-2">
          <Label>Categories</Label>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="category-display" defaultChecked />
              <label htmlFor="category-display" className="text-sm">Display</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-linkedin" defaultChecked />
              <label htmlFor="category-linkedin" className="text-sm">LinkedIn</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-multi" defaultChecked />
              <label htmlFor="category-multi" className="text-sm">Multi-channel</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-email" />
              <label htmlFor="category-email" className="text-sm">Email</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="category-meta" />
              <label htmlFor="category-meta" className="text-sm">Meta</label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Formats</Label>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="format-billboard" defaultChecked />
              <label htmlFor="format-billboard" className="text-sm">Billboard</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="format-halfpage" defaultChecked />
              <label htmlFor="format-halfpage" className="text-sm">Halfpage</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="format-mpu" />
              <label htmlFor="format-mpu" className="text-sm">MPU</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="format-single" defaultChecked />
              <label htmlFor="format-single" className="text-sm">LinkedIn Single Image</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="format-carousel" />
              <label htmlFor="format-carousel" className="text-sm">LinkedIn Carousel</label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Status</Label>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="status-all" />
              <Label htmlFor="status-all" className="text-sm">All templates</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="featured" id="status-featured" />
              <Label htmlFor="status-featured" className="text-sm">Featured only</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recent" id="status-recent" />
              <Label htmlFor="status-recent" className="text-sm">Recently added</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="used" id="status-used" />
              <Label htmlFor="status-used" className="text-sm">Most used</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label>Created By</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select team" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All teams</SelectItem>
              <SelectItem value="design">Design Team</SelectItem>
              <SelectItem value="marketing">Marketing Team</SelectItem>
              <SelectItem value="creative">Creative Team</SelectItem>
              <SelectItem value="product">Product Team</SelectItem>
              <SelectItem value="brand">Brand Team</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="pt-2">
            <Label>Sort By</Label>
            <Select defaultValue="recent">
              <SelectTrigger>
                <SelectValue placeholder="Sort templates" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most recent</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="popular">Most popular</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end mt-4 gap-2">
        <Button variant="outline">Reset</Button>
        <Button>Apply Filters</Button>
      </div>
    </div>
  );
}
