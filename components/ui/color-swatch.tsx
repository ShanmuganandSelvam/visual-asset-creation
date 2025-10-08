"use client";

import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  color: string;
  name: string;
  value: string;
  className?: string;
}

export function ColorSwatch({ color, name, value, className }: ColorSwatchProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div 
        className="h-16 w-full rounded-md border mb-2" 
        style={{ backgroundColor: color }}
      />
      <div className="text-sm font-medium">{name}</div>
      <div className="text-xs text-muted-foreground">{value}</div>
    </div>
  );
}

export function BayerColorPalette() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <ColorSwatch 
        color="hsl(var(--bayer-blue))" 
        name="Bayer Blue" 
        value="#0055a6" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-light-blue))" 
        name="Light Blue" 
        value="#00a1e5" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-green))" 
        name="Bayer Green" 
        value="#009a4e" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-light-green))" 
        name="Light Green" 
        value="#4aae9b" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-yellow))" 
        name="Bayer Yellow" 
        value="#ffbf00" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-orange))" 
        name="Bayer Orange" 
        value="#ff8000" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-red))" 
        name="Bayer Red" 
        value="#cc0000" 
      />
      <ColorSwatch 
        color="hsl(var(--bayer-purple))" 
        name="Bayer Purple" 
        value="#4b0082" 
      />
    </div>
  );
}
