import { defineMiddleware } from "astro:middleware";

const BLOCKED_USER_AGENTS = [
    'bot', 'crawler', 'spider', 'scraper', 'parser',
    'gptbot', 'chatgpt', 'ccbot', 'anthropic', 'claude',
    'perplexity', 'bingbot', 'googlebot', 'facebookbot',
    'python-requests', 'curl', 'wget', 'scrapy',
    'selenium', 'phantomjs', 'headless'
  ];
  
  export const onRequest = defineMiddleware(async (context, next) => {
    const userAgent = context.request.headers.get('user-agent')?.toLowerCase() || '';
    
    const isBlocked = BLOCKED_USER_AGENTS.some(blocked => 
      userAgent.includes(blocked)
    );
    
    if (isBlocked) {
      return new Response("Access denied", { status: 403 });
    }
    
    return next();
  });