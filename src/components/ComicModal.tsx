import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

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
    price?: number;
  };
}

const ComicModal = ({ isOpen, onClose, comic }: ComicModalProps) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const price = comic.price || 4.99;

  const handleAddToCart = () => {
    addToCart({
      id: comic.title.toLowerCase().replace(/\s+/g, '-'),
      title: comic.title,
      image: comic.image,
      creators: comic.creators,
      price,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

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
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-primary">${price.toFixed(2)}</span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < comic.rating ? 'fill-primary text-primary' : 'text-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
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
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">DESCRIPTION</h3>
              <p className="text-sm leading-relaxed">
                {comic.description || "An epic adventure awaits in this thrilling comic series. Join your favorite heroes as they battle against the forces of evil and protect the universe from destruction."}
              </p>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <Button 
                variant="default" 
                className="w-full"
                onClick={handleAddToCart}
                disabled={added}
              >
                {added ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    ADDED TO CART
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    ADD TO CART - ${price.toFixed(2)}
                  </>
                )}
              </Button>
              <Button variant="outline" className="w-full" onClick={onClose}>
                CONTINUE SHOPPING
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComicModal;
