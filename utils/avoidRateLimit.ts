let lastFetch = new Date();

export async function avoidRateLimit(delay = 350) {
  const sinceLastFetch = new Date().getTime() - lastFetch.getTime();
  if (sinceLastFetch < delay) {
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  lastFetch = new Date();
}
