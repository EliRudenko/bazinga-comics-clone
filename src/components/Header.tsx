import { Search, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const comicsSubmenu = ["Release Calendar", "Bazinga Unlimited", "Stormbreakers", "Reading Guides", "All Comics"];
  const charactersSubmenu = ["Browse All", "Teams", "Avengers", "X-Men", "Guardians"];
  const moviesSubmenu = ["Latest Releases", "Upcoming", "Box Office", "News"];
  const tvShowsSubmenu = ["Streaming Now", "Upcoming Series", "Episode Guides"];
  const gamesSubmenu = ["Video Games", "Mobile Games", "Board Games"];

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
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="#news" className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors px-4 py-2">
                    NEWS
                  </a>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-accent">
                    COMICS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] bg-white text-black p-2 shadow-lg border border-gray-200">
                      {comicsSubmenu.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-sm transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-accent">
                    CHARACTERS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] bg-white text-black p-2 shadow-lg border border-gray-200">
                      {charactersSubmenu.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-sm transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-accent">
                    MOVIES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] bg-white text-black p-2 shadow-lg border border-gray-200">
                      {moviesSubmenu.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-sm transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-accent">
                    TV SHOWS
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] bg-white text-black p-2 shadow-lg border border-gray-200">
                      {tvShowsSubmenu.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-sm transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-semibold bg-transparent hover:bg-accent">
                    GAMES
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] bg-white text-black p-2 shadow-lg border border-gray-200">
                      {gamesSubmenu.map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 rounded-sm transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#videos" className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors px-4 py-2">
                    VIDEOS
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#more" className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors px-4 py-2">
                    MORE
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
