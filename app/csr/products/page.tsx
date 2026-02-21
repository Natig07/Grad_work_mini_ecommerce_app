'use client';

import { useEffect, useState } from 'react';
import { ProductGrid } from '@/components/ProductGrid';
import { Loader } from '@/components/Loader';
import { PageHeader } from '@/components/PageHeader';
import type { Product } from '@/types/product';
import Link from 'next/link';

export default function CSRProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchTime, setFetchTime] = useState<number>(0);

  useEffect(() => {
    console.log('[CSR] Component mounted, starting fetch at:', new Date().toISOString());
    const startTime = performance.now();

    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        const endTime = performance.now();
        const duration = endTime - startTime;
        setFetchTime(duration);
        console.log(`[CSR] Data fetched in ${duration.toFixed(2)}ms`);
        setProducts(data);
        setLoading(false);
        console.log('[CSR] Render completed at:', new Date().toISOString());
      })
      .catch((error) => {
        console.error('[CSR] Fetch error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
          ← Back to Home
        </Link>

        <PageHeader
          title="Product Catalog"
          description="Client-Side Rendering - Data fetched in browser using useEffect"
          badge="CSR"
          badgeColor="bg-yellow-100 text-yellow-800"
        />

        {fetchTime > 0 && (
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Fetch Time:</strong> {fetchTime.toFixed(2)}ms
            </p>
          </div>
        )}

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mb-4 text-gray-600">
              Showing {products.length} products
            </div>
            <ProductGrid products={products} />
          </>
        )}
      </div>
    </div>
  );
}
