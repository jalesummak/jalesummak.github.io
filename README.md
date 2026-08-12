# TBC Tech AI · Jale Summak Product Studio

Jale Summak'ın 52 veri bilimi ve yapay zekâ projesini sekiz kurulabilir mobil ürün ailesi altında birleştiren, İngilizce/Türkçe TBC Tech AI ürün ve portföy sitesi.

## Ürün aileleri

- EyeGuide AI — health and accessibility
- AgroLens AI — agriculture and nature
- CityPulse AI — cities and environment
- TrustLens AI — trust, safety and language
- RecoMuse AI — personalized discovery
- BizPilot AI — business and forecasting
- CareerPath AI — career and education
- VisionForge AI — CNN and visual intelligence

Her proje kartı GitHub, Kaggle notebook, Hugging Face model kaynağı ve site içinde çalışan ilgili mobil ürünü birbirinden açık biçimde ayırır. Algorithmic Trading çalışması gizli tutulur.

## Local validation

```bash
npm run build
npm test
npm run dev
```

Site, bağımlılıksız Cloudflare Workers uyumlu bir çıktı üretir. Yayın paketi `dist/` klasöründedir.
