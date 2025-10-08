import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { 
  LayoutDashboard, 
  Image, 
  FileImage, 
  Settings, 
  Bell 
} from "lucide-react";

export function MainNav() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-semibold text-lg flex items-center">
            <FileImage className="h-5 w-5 mr-2" />
            <span>AI Asset Creator</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/campaigns" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Campaigns
            </Link>
            <Link href="/templates" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Templates
            </Link>
            <Link href="/assets" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Assets
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
