import Link from 'next/link';
import { Clock, Server, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Mini E-Commerce Rendering Comparison
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the performance differences between Client-Side Rendering (CSR),
            Server-Side Rendering (SSR), and Edge Rendering in a controlled environment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/csr/products" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-yellow-400">
              <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Client-Side Rendering
              </h2>
              <p className="text-gray-600 mb-4">
                Data fetched in the browser using useEffect. Shows loading state while fetching.
              </p>
              <div className="text-sm font-semibold text-yellow-600">
                View CSR Version →
              </div>
            </div>
          </Link>

          <Link href="/ssr/products" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-green-400">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Server-Side Rendering
              </h2>
              <p className="text-gray-600 mb-4">
                Data fetched on the server. HTML sent fully rendered to the browser.
              </p>
              <div className="text-sm font-semibold text-green-600">
                View SSR Version →
              </div>
            </div>
          </Link>

          <Link href="/edge/products" className="group">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-transparent hover:border-purple-400">
              <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                Edge Rendering
              </h2>
              <p className="text-gray-600 mb-4">
                Data fetched and rendered at the edge, closest to the user's location.
              </p>
              <div className="text-sm font-semibold text-purple-600">
                View Edge Version →
              </div>
            </div>
          </Link>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">
            Performance Metrics to Compare
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">TTFB (Time to First Byte)</h4>
              <p className="text-gray-600">
                Measures how quickly the server responds to the initial request.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">FCP (First Contentful Paint)</h4>
              <p className="text-gray-600">
                When the first content appears on screen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">LCP (Largest Contentful Paint)</h4>
              <p className="text-gray-600">
                When the largest element (product images) finishes loading.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2 text-gray-900">TTI (Time to Interactive)</h4>
              <p className="text-gray-600">
                When the page becomes fully interactive.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-lg mb-2 text-blue-900">Testing Instructions</h4>
          <ul className="space-y-2 text-blue-800">
            <li>• Open Chrome DevTools Network tab to see request timing</li>
            <li>• Use Lighthouse to measure performance scores</li>
            <li>• Check console logs for detailed timing information</li>
            <li>• Test with throttled network (Fast 3G) for clearer differences</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
