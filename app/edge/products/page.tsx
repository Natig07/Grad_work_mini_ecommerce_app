import { ProductGrid } from '@/components/ProductGrid';
import { PageHeader } from '@/components/PageHeader';
import type { Product } from '@/types/product';
import Link from 'next/link';

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

async function getProducts(): Promise<Product[]> {
  console.log('[EDGE] Edge fetch started at:', new Date().toISOString());

  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();

  const products = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    image: item.image,
    category: item.category,
  }));

  return products;
}

export default async function EdgeProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>

        <PageHeader
          title="Product Catalog"
          description="Edge Rendering - Data fetched and rendered at the edge (closest to user)"
          badge="EDGE"
          badgeColor="bg-purple-100 text-purple-800"
        />

        <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <p className="text-sm text-purple-800">
            <strong>Rendered on:</strong> Edge Runtime (Vercel Edge Network)
          </p>
        </div>

        <div className="mb-4 text-gray-600">
          Showing {products.length} products
        </div>

        <ProductGrid products={products} />
      </div>
    </div>
  );
}
