// app/api/vercel/route.js

export async function GET(request) {

  
  const token = process.env.VERCEL_TOKEN;
  // Get today's date
  const today = new Date();

  // Set 'to' date (end of today)
  const to = new Date(today);
  to.setHours(23, 59, 59, 999);

  // Set 'from' date (one month ago - 1 day)
  const from = new Date(today);
  from.setMonth(from.getMonth() - 1);
  from.setDate(from.getDate() - 1);
  from.setHours(0, 0, 0, 0);

  // Convert to ISO strings
  const fromISO = from.toISOString();
  const toISO = to.toISOString();

  // Construct the full URL
  
  const url= `https://vercel.com/api/web-analytics/stats?&limit=250&type=path&projectId=edusparsh&teamId=team_qrXJCkE6eCryc3LyWQhmLlwJ&from=${encodeURIComponent(fromISO)}&to=${encodeURIComponent(toISO)}`

  try {
    const response = await fetch(url, {
      headers: {
         Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log('Vercel Stats:', data); // Server log

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
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
