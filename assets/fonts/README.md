# Self-hosted fonts

The site's stylesheet (`assets/css/style.css`) expects two font files in this directory:

- `Inter-Variable.woff2` — Inter variable font, weights 100–900.
  Get it from: https://github.com/rsms/inter/releases (`Inter.zip` → `Inter Variable/Inter-Variable.woff2`).

- `JetBrainsMono-Regular.woff2` — JetBrains Mono, regular weight (400).
  Get it from: https://github.com/JetBrains/JetBrainsMono/releases (`JetBrainsMono.zip` → `fonts/webfonts/JetBrainsMono-Regular.woff2`).

Drop the two files in here at the names above and the site will pick them up. Until they're present, the browser will fall back to system humanist sans (San Francisco / Segoe UI / Roboto) and system monospace, which still looks reasonable but isn't the intended typography.

Both fonts are open source (Inter is OFL, JetBrains Mono is OFL).
