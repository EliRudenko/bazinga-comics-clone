import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface ComicModalProps {
  isOpen: boolean;
  onClose: () => void;
  comic: {
    title: string;
    image: string;
    creators: string;
    rating: number;
    year?: string;
    description?: string;
  };
}

const ComicModal = ({ isOpen, onClose, comic }: ComicModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{comic.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <img
              src={comic.image}
              alt={comic.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">CREATORS</h3>
              <p className="text-lg">{comic.creators}</p>
            </div>
            {comic.year && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-1">YEAR</h3>
                <p className="text-lg">{comic.year}</p>
              </div>
            )}
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">RATING</h3>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < comic.rating ? 'fill-primary text-primary' : 'text-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">DESCRIPTION</h3>
              <p className="text-sm leading-relaxed">
                {comic.description || "An epic adventure awaits in this thrilling comic series. Join your favorite heroes as they battle against the forces of evil and protect the universe from destruction."}
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="default" className="flex-1">
                READ NOW
              </Button>
              <Button variant="outline" className="flex-1">
                ADD TO LIBRARY
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComicModal;
