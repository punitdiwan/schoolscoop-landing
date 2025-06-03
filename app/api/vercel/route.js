// app/api/vercel/route.js

export const dynamic = 'force-dynamic'

export async function GET(request) {

  
  const token = process.env.VERCEL_TOKEN;

  // Set 'to' date (end of today)
  const to = new Date();
  to.setHours(23, 59, 59, 999);

  // Set 'from' date (29 days ago, start of the day)
  const from = new Date();
  from.setDate(from.getDate() - 29);
  from.setHours(0, 0, 0, 0);

  // Convert to ISO strings
  const fromISO = from.toISOString();
  const toISO = to.toISOString();

  // Construct the Vercel Analytics URL
  const url = `https://vercel.com/api/web-analytics/stats?&limit=250&type=path&projectId=edusparsh&teamId=team_qrXJCkE6eCryc3LyWQhmLlwJ&from=${encodeURIComponent(fromISO)}&to=${encodeURIComponent(toISO)}`;

  try {
    const response = await fetch(url, {
      cache: 'no-store', // prevents fetch caching
      headers: {
       Authorization: `Bearer ${token}`,
       'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
      },
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',   
        'Cache-Control': 'no-store'
      },
    });
  } catch (error) {
    console.error('Error fetching Vercel stats:', error);

    return new Response(
      JSON.stringify({ error: 'Failed to fetch Vercel data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
