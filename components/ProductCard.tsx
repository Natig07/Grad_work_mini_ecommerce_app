import Image from 'next/image';
import type { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <Image
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-contain"
        width={400}
        height={256}
        priority
      />
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="text-xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
