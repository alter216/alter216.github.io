import type { APIRoute } from "astro";

const getRobotsTxt = () => `
User-agent: *
Disallow: /

# Explicitly block common scraping bots
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: YouBot
Disallow: /

User-agent: Meta-ExternalAgent
Disallow: /

User-agent: facebookexternalhit
Disallow: /

User-agent: Twitterbot
Disallow: /

User-agent: LinkedInBot
Disallow: /

User-agent: Applebot
Disallow: /

User-agent: Bingbot
Disallow: /

User-agent: Slurp
Disallow: /

User-agent: DuckDuckBot
Disallow: /

User-agent: Baiduspider
Disallow: /

User-agent: YandexBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /

User-agent: 008
Disallow: /

User-agent: archive.org_bot
Disallow: /

User-agent: ia_archiver
Disallow: /

User-agent: Wayback
Disallow: /

User-agent: SiteAuditBot
Disallow: /

User-agent: ScreamingFrogSEOSpider
Disallow: /

User-agent: DataForSeoBot
Disallow: /

# Block generic patterns
User-agent: *Bot*
Disallow: /

User-agent: *bot*
Disallow: /

User-agent: *spider*
Disallow: /

User-agent: *Spider*
Disallow: /

User-agent: *crawler*
Disallow: /

User-agent: *Crawler*
Disallow: /

User-agent: *scraper*
Disallow: /

User-agent: *Scraper*
Disallow: /

# Set aggressive crawl delay for any bots that ignore disallow
Crawl-delay: 86400

# No sitemap provided
`;

export const GET: APIRoute = () => {
  return new Response(getRobotsTxt(), {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};