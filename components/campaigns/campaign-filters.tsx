"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";

interface CampaignFiltersProps {
  className?: string;
}

export function CampaignFilters({ className }: CampaignFiltersProps) {
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
          <Label>Status</Label>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="status-draft" />
              <label htmlFor="status-draft" className="text-sm">Draft</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-in-progress" defaultChecked />
              <label htmlFor="status-in-progress" className="text-sm">In Progress</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-review" />
              <label htmlFor="status-review" className="text-sm">In Review</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="status-completed" defaultChecked />
              <label htmlFor="status-completed" className="text-sm">Completed</label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Channels</Label>
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="channel-display" defaultChecked />
              <label htmlFor="channel-display" className="text-sm">Programmatic Display</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="channel-linkedin" defaultChecked />
              <label htmlFor="channel-linkedin" className="text-sm">LinkedIn</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="channel-meta" />
              <label htmlFor="channel-meta" className="text-sm">Meta</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="channel-email" />
              <label htmlFor="channel-email" className="text-sm">Email</label>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label>Time Period</Label>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="time-all" />
              <Label htmlFor="time-all" className="text-sm">All time</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="current" id="time-current" />
              <Label htmlFor="time-current" className="text-sm">Current quarter</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="last-30" id="time-last-30" />
              <Label htmlFor="time-last-30" className="text-sm">Last 30 days</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="time-custom" />
              <Label htmlFor="time-custom" className="text-sm">Custom range</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div className="space-y-2">
          <Label>Assigned To</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select team member" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All team members</SelectItem>
              <SelectItem value="alex">Alex Morgan</SelectItem>
              <SelectItem value="jamie">Jamie Chen</SelectItem>
              <SelectItem value="taylor">Taylor Kim</SelectItem>
              <SelectItem value="jordan">Jordan Smith</SelectItem>
              <SelectItem value="casey">Casey Jones</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="pt-2">
            <Label>Sort By</Label>
            <Select defaultValue="recent">
              <SelectTrigger>
                <SelectValue placeholder="Sort campaigns" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most recent</SelectItem>
                <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                <SelectItem value="due-date">Due date</SelectItem>
                <SelectItem value="progress">Progress</SelectItem>
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
