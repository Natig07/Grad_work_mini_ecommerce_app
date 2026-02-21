# Mini E-Commerce Rendering Comparison

A Next.js 14+ application demonstrating the performance differences between **Client-Side Rendering (CSR)**, **Server-Side Rendering (SSR)**, and **Edge Rendering**.

## Features

- 🎯 **Three Rendering Strategies**: Compare CSR, SSR, and Edge rendering side-by-side
- 📦 **50 Products**: Mock product data with artificial network delay (500-800ms)
- 📊 **Performance Metrics**: Measure TTFB, FCP, LCP, and TTI
- 🖼️ **Large Images**: Optimized for LCP measurement using Unsplash placeholders
- 📝 **Console Logging**: Detailed timing information for analysis

## Project Structure

```
/app
  /api/products          # Mock API with artificial delay
  /csr/products          # Client-Side Rendering implementation
  /ssr/products          # Server-Side Rendering implementation
  /edge/products         # Edge Runtime implementation
  page.tsx               # Homepage with navigation
/components
  ProductCard.tsx        # Individual product display
  ProductGrid.tsx        # Product grid layout
  Loader.tsx             # Loading spinner for CSR
  PageHeader.tsx         # Page header component
/types
  product.ts             # TypeScript interfaces
```

## Rendering Strategies

### 1. Client-Side Rendering (CSR)
- **Route**: `/csr/products`
- **Implementation**: Uses `useEffect()` to fetch data in the browser
- **Characteristics**:
  - Shows loading spinner while fetching
  - Data fetched after page loads
  - Slower Time to Interactive (TTI)
  - Better for highly dynamic content

### 2. Server-Side Rendering (SSR)
- **Route**: `/ssr/products`
- **Implementation**: Fetches data in server component
- **Characteristics**:
  - HTML fully rendered on server
  - Faster First Contentful Paint (FCP)
  - Better SEO
  - Node.js runtime

### 3. Edge Rendering
- **Route**: `/edge/products`
- **Implementation**: Uses `export const runtime = 'edge'`
- **Characteristics**:
  - Rendered at edge locations (closest to user)
  - Fastest TTFB (Time to First Byte)
  - Globally distributed
  - Ideal for Vercel deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
npm start
```

## Performance Testing

### Using Chrome DevTools

1. Open Chrome DevTools (F12)
2. Go to **Network** tab
3. Enable **Disable cache**
4. Set network throttling to **Fast 3G** for clearer differences
5. Navigate to each rendering strategy
6. Compare the timing results

### Using Lighthouse

1. Open Chrome DevTools
2. Go to **Lighthouse** tab
3. Select **Performance** category
4. Run audit on each page:
   - `/csr/products`
   - `/ssr/products`
   - `/edge/products`
5. Compare metrics:
   - **TTFB** (Time to First Byte)
   - **FCP** (First Contentful Paint)
   - **LCP** (Largest Contentful Paint)
   - **TTI** (Time to Interactive)

### Console Logs

Check the browser console for detailed timing information:

- **CSR**: `[CSR] Data fetched in Xms`
- **SSR**: `[SSR] Server fetch completed in Xms`
- **Edge**: `[EDGE] Edge fetch completed in Xms`

## Expected Performance Results

### TTFB (Time to First Byte)
- **Edge**: Fastest (rendered at edge)
- **SSR**: Medium (server processing)
- **CSR**: Fast (but content not ready)

### FCP (First Contentful Paint)
- **Edge**: Fastest
- **SSR**: Fast
- **CSR**: Slower (waits for JS and fetch)

### LCP (Largest Contentful Paint)
- **Edge**: Fastest
- **SSR**: Fast
- **CSR**: Slowest (images load after fetch)

### TTI (Time to Interactive)
- **Edge**: Fastest
- **SSR**: Fast
- **CSR**: Slowest (hydration after fetch)

## Deployment

### Deploy to Vercel

```bash
npx vercel
```

The application is optimized for Vercel deployment with:
- Automatic edge function support
- Global CDN distribution
- Serverless API routes

## Technical Details

### Mock API
- **Endpoint**: `/api/products`
- **Products**: 50 items
- **Delay**: 500-800ms (simulates real network latency)
- **Data**: Random prices, categories, and Unsplash images

### Image Loading
- Images use `loading="eager"` (not lazy-loaded)
- Large images (800x600) for accurate LCP measurement
- Unsplash placeholder URLs

### No Optimization
- No aggressive caching
- No image optimization (for testing purposes)
- No prefetching
- Pure rendering comparison

## Key Takeaways

1. **CSR** is best for highly interactive dashboards where SEO isn't critical
2. **SSR** is ideal for SEO-critical pages with dynamic content
3. **Edge** provides the fastest performance globally and is perfect for e-commerce

## Technologies

- **Next.js 14+** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React** (icons)

## License

MIT
