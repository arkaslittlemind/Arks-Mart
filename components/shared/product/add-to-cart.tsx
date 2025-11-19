"use client";

import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      console.log(res);
      toast.error(res.message);
      return;
    }

    toast.success(res.message, {
      action: {
        label: "Go to Cart",
        onClick: () => router.push("/cart"),
      },
    });
  };
  return (
    <Button
      className="w-full cursor-pointer mt-2"
      type="button"
      onClick={handleAddToCart}
    >
      <Plus /> Add to Cart
    </Button>
  );
};

export default AddToCart;
