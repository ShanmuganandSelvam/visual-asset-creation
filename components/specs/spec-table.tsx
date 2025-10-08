import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface SpecTableProps {
  channel: "programmatic" | "linkedin" | "meta" | "email" | "custom";
}

export function SpecTable({ channel }: SpecTableProps) {
  const programmaticSpecs = [
    {
      name: "Billboard",
      dimensions: "970×250",
      fileSize: "150KB",
      formats: ["JPG", "PNG", "GIF"],
      notes: "Large horizontal format for high-impact placements"
    },
    {
      name: "Half Page",
      dimensions: "300×600",
      fileSize: "100KB",
      formats: ["JPG", "PNG", "GIF"],
      notes: "Vertical format with high visibility and engagement"
    },
    {
      name: "MPU (Medium Rectangle)",
      dimensions: "300×250",
      fileSize: "100KB",
      formats: ["JPG", "PNG", "GIF"],
      notes: "Standard rectangular format with wide support"
    },
    {
      name: "Mobile Leaderboard",
      dimensions: "320×50",
      fileSize: "50KB",
      formats: ["JPG", "PNG", "GIF"],
      notes: "Compact horizontal format for mobile devices"
    },
    {
      name: "Hybrid Native",
      dimensions: "Multiple sizes",
      fileSize: "Image: 50KB, Logo: 25KB",
      formats: ["JPG", "PNG"],
      notes: "Requires image, headline (25 chars), body text (90 chars)"
    }
  ];

  const linkedinSpecs = [
    {
      name: "Single Image Ad",
      dimensions: "1200×627 (1.91:1 ratio)",
      fileSize: "5MB",
      formats: ["JPG", "PNG"],
      notes: "Standard image ad that appears in the LinkedIn feed"
    },
    {
      name: "Carousel Ad",
      dimensions: "1080×1080 (1:1 ratio)",
      fileSize: "5MB per card",
      formats: ["JPG", "PNG"],
      notes: "2-10 cards, swipeable format"
    },
    {
      name: "Video Ad",
      dimensions: "Horizontal (16:9) recommended",
      fileSize: "200MB",
      formats: ["MP4"],
      notes: "Length: 5 sec - 30 min, Audio: AAC or PCM"
    },
    {
      name: "Document Ad",
      dimensions: "N/A",
      fileSize: "100MB",
      formats: ["PDF"],
      notes: "Max pages: 13, includes document preview"
    },
    {
      name: "Text Ad",
      dimensions: "50×50 logo",
      fileSize: "2MB",
      formats: ["JPG", "PNG"],
      notes: "Headline: 25 chars, Description: 75 chars"
    }
  ];

  const specs = channel === "programmatic" ? programmaticSpecs : linkedinSpecs;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Ad Unit</TableHead>
          <TableHead>Dimensions</TableHead>
          <TableHead>Max File Size</TableHead>
          <TableHead>Formats</TableHead>
          <TableHead>Notes</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {specs.map((spec) => (
          <TableRow key={spec.name}>
            <TableCell className="font-medium">{spec.name}</TableCell>
            <TableCell>{spec.dimensions}</TableCell>
            <TableCell>{spec.fileSize}</TableCell>
            <TableCell>
              <div className="flex flex-wrap gap-1">
                {spec.formats.map((format) => (
                  <Badge key={format} variant="outline">{format}</Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className="text-sm">{spec.notes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
