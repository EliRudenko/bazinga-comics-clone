import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = ["NEWS", "COMICS", "CHARACTERS", "MOVIES", "TV SHOWS", "GAMES", "VIDEOS", "MORE"];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="#hero" className="text-2xl font-black tracking-tighter text-primary hover:text-primary/90 transition-colors">
              BAZINGA
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="hidden md:flex">
              <User className="h-4 w-4 mr-2" />
              SIGN IN
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
