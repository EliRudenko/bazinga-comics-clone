import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ComicSection from "@/components/ComicSection";
import UnlimitedBanner from "@/components/UnlimitedBanner";
import Footer from "@/components/Footer";

import comic1 from "@/assets/comic-1.jpg";
import comic2 from "@/assets/comic-2.jpg";
import comic3 from "@/assets/comic-3.jpg";
import comic4 from "@/assets/comic-4.jpg";
import comic5 from "@/assets/comic-5.jpg";
import comic6 from "@/assets/comic-6.jpg";
import comic7 from "@/assets/comic-7.jpg";
import comic8 from "@/assets/comic-8.jpg";

const Index = () => {
  const newThisWeek = [
    { image: comic1, title: "X-MEN: AGE OF MYTH ACTION FIGURE (2025) #1", creators: "Kindt, Unzueta", rating: 4.5 },
    { image: comic2, title: "EMPIRES OF VIOLENCE (2025) #1", creators: "Remender, Kim", rating: 4.8 },
    { image: comic3, title: "SPIDER-MAN NOIR (2025) #1", creators: "Grayson, Mandrake", rating: 4.7 },
    { image: comic4, title: "X-MEN: THE UNBROKEN (2025) #1", creators: "MacKay, Noto", rating: 4.6 },
    { image: comic5, title: "WHAT'S THOSE SHADOW (2025) #1", creators: "Hickman, Garbett", rating: 4.4 },
    { image: comic6, title: "BAZINGA-BOT: SPIDER WATCHBEARABLE EDITION (2025) #1", creators: "Slott, Harries", rating: 4.5 },
    { image: comic7, title: "NEW AVENGERS (2025) #1", creators: "Ahmed, Mora", rating: 4.9 },
    { image: comic8, title: "STAR WARS (2025) #14", creators: "Soule, Unzueta", rating: 4.3 },
    { image: comic1, title: "RED HULK (2025) #1", creators: "Parker, Stegman", rating: 4.7 },
    { image: comic2, title: "ULTIMATE WOLVERINE (2025) #1", creators: "Hickman, Checchetto", rating: 4.8 },
    { image: comic3, title: "DEADPOOL (2025) #1", creators: "Duggan, Messina", rating: 4.6 },
    { image: comic4, title: "THE AMAZING SPIDER (2025) #35", creators: "Wells, Romita", rating: 4.5 },
  ];

  const bestSelling = [
    { image: comic5, title: "MOON KNIGHT: FIST OF KHONSHU (2025)", creators: "Mackay, Cappuccio", rating: 5.0 },
    { image: comic6, title: "CAPTAIN AMERICA (2025) #1", creators: "Thompson, Lee", rating: 4.9 },
    { image: comic7, title: "MIRACLEMAN (2025)", creators: "Gaiman, Buckingham", rating: 4.8 },
    { image: comic8, title: "THE VITALS: TRUE BAD STORIES (2021)", creators: "Ewing, Schiti", rating: 4.7 },
    { image: comic1, title: "MAJOR X (2019)", creators: "Liefeld", rating: 4.4 },
    { image: comic2, title: "VENOM (2025) #1", creators: "Ewing, Hitch", rating: 4.8 },
  ];

  const readForFree = [
    { image: comic3, title: "CHEE!NTH (2023) #1", creators: "Buccellato, Berry", rating: 4.2 },
    { image: comic4, title: "S.O.D.S. FIRST LOOK INFINITY COMIC (2025) #1", creators: "Cantwell, Ferreira", rating: 4.5 },
    { image: comic5, title: "MARVEL'S SPIDER-MAN 2 (2023) #1", creators: "Salazar, Barela, Niscola", rating: 4.6 },
    { image: comic6, title: "9/11 20TH ANNIVERSARY TRIBUTE: THE FOUR FIVES (2021) #1", creators: "Various", rating: 4.9 },
    { image: comic7, title: "THE VITALS: TRUE BAD STORIES (2021)", creators: "Howe, Noto", rating: 4.7 },
    { image: comic8, title: "ULTIMATE SPIDER-MAN (2024) #10", creators: "Hickman, Checchetto", rating: 4.8 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <ComicSection id="new-this-week" title="NEW THIS WEEK" comics={newThisWeek} />
        <ComicSection id="best-selling" title="BEST SELLING DIGITAL COMICS" comics={bestSelling} />
        <UnlimitedBanner />
        <ComicSection id="read-for-free" title="READ FOR FREE" comics={readForFree} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
