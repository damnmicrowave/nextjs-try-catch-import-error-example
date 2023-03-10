export const runtime = 'edge' // doesn't work ):

export async function GET() {
  let subtle
  try {
    // Node.js runtime
    subtle = (await import('crypto')).subtle
  } catch {
    // Edge runtime
    subtle = crypto.subtle
  }
  console.log(subtle)
  return new Response('Hello, Next.js!')
}
