# Cloudflare Security Baseline (StratoTech)

This is a practical baseline for protecting the production site using Cloudflare.
Names may vary slightly in the Cloudflare UI, but the intent and settings remain the same.

## DNS + SSL/TLS
1. DNS records should be proxied (orange cloud) for the main hostname and `www`.
2. SSL/TLS mode: Full (strict).
3. Enable "Always Use HTTPS".
4. Enable "Automatic HTTPS Rewrites".

## HSTS
1. Enable HSTS at the zone level.
2. Use `max-age=63072000` (2 years).
3. Include subdomains.
4. Preload if the domain is ready for it.

## WAF and Managed Rules
1. Enable Cloudflare Managed Rules.
2. Enable OWASP Managed Rules.
3. Set sensitivity to medium or high.
4. Disable legacy/beta rules unless required.

## Bot and Abuse Protection
1. Enable Bot Fight Mode (or Bot Management if available).
2. Enable "Browser Integrity Check".
3. Set Security Level to Medium or High.

## Rate Limiting
Create a rate limit for the contact endpoint:
- Path: `/api/contact`
- Threshold: 60 requests per 1 minute per IP
- Action: Block or Managed Challenge

## Logging and Alerts
1. Enable Security Events logging.
2. Configure alerts for spikes in 4xx/5xx, WAF blocks, and rate limits.

## Notes
- Review these settings after the first week of traffic.
- If any external services are added later (analytics, video, etc.),
  update the CSP allowlist accordingly.
