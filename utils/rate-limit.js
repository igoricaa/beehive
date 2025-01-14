export const rateLimit = (options) => {
  const tokenCache = new Map();
  const { interval, uniqueTokenPerInterval } = options;

  return {
    check: (req, limit) => {
      const tokenCount = tokenCache.get(req.ip) || [0];
      const currentTime = Date.now();
      const timeWindow = currentTime - interval;

      // Filter out old timestamps
      const tokens = tokenCount.filter((timestamp) => timestamp > timeWindow);

      // Check if we've exceeded our limit
      if (tokens.length >= limit) {
        throw { statusCode: 429, error: 'Rate limit exceeded' };
      }

      // Add the current request
      tokens.push(currentTime);
      tokenCache.set(req.ip, tokens);

      // Cleanup old entries
      if (tokenCache.size > uniqueTokenPerInterval) {
        const firstKey = tokenCache.keys().next().value;
        tokenCache.delete(firstKey);
      }
    },
  };
};
