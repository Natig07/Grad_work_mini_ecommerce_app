import { ProductGrid } from '@/components/ProductGrid';
import { PageHeader } from '@/components/PageHeader';
import type { Product } from '@/types/product';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

async function getProducts(): Promise<Product[]> {
  console.log('[SSR] Server fetch started at:', new Date().toISOString());
  const startTime = Date.now();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await res.json();
  const endTime = Date.now();
  console.log(`[SSR] Server fetch completed in ${endTime - startTime}ms`);
  console.log('[SSR] Server render completed at:', new Date().toISOString());

  return data;
}

export default async function SSRProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>

        <PageHeader
          title="Product Catalog"
          description="Server-Side Rendering - Data fetched on server before sending HTML"
          badge="SSR"
          badgeColor="bg-green-100 text-green-800"
        />

        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>Rendered on:</strong> Server (Node.js Runtime)
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
