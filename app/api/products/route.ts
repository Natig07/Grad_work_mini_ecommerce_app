import { NextResponse } from 'next/server';
export const runtime = 'edge';

export async function GET() {
  const startTime = Date.now();
  console.log('[API] Product fetch started at:', new Date().toISOString());

  // Artificial delay (500–800ms)
  const delay = Math.floor(Math.random() * 300) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // Fetch real data
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  // Only keep needed fields (especially image)
  const products = data.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    description: item.description,
    image: item.image, // only use real image
    category: item.category,
  }));

  const endTime = Date.now();
  console.log(`[API] Product fetch completed in ${endTime - startTime}ms`);

  return NextResponse.json(products);
}