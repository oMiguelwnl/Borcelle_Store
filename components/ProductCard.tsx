import { HeartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2 "
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover "
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-gray-2">{product.category}</p>
      </div>

      <div className="flex justify-between items-center">
        <p>${product.price}</p>
        <button>
          <HeartIcon />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
