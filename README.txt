<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Rednorte Inmobiliaria | Venta, Renta e Inversión en Monterrey</title>
<meta name="description" content="Conectamos propiedades con decisiones inteligentes mediante asesoría profesional, análisis de mercado y una amplia red inmobiliaria en Monterrey y Nuevo León.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: 'Poppins', sans-serif;
  color: #1a1208;
  background: #faf8f5;
  font-size: 16px;
  line-height: 1.6;
}

/* ===== COLOR TOKENS ===== */
:root {
  --terracota: #C4622D;
  --terracota-dark: #A04E22;
  --terracota-light: #F0DDD3;
  --vino: #6B2737;
  --vino-dark: #4E1927;
  --cafe: #4A3728;
  --negro: #1a1208;
  --crema: #FAF8F5;
  --crema-dark: #F0ECE4;
  --gris-claro: #E8E2D9;
  --gris-medio: #9A8F85;
  --blanco: #FFFFFF;
  --whatsapp: #25D366;
  --sombra: rgba(26,18,8,0.10);
  --sombra-md: rgba(26,18,8,0.15);
}

/* ===== PAGES ===== */
.page { display: none; }
.page.active { display: block; }

/* ===== HEADER ===== */
header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  background: rgba(250,248,245,0.97);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--gris-claro);
}
.header-inner {
  max-width: 1200px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 2rem; height: 72px;
}
.logo {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none; cursor: pointer;
}
.logo-mark {
  width: 40px; height: 40px;
  background: var(--terracota);
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700; font-size: 16px; letter-spacing: -0.5px;
}
.logo-text {
  display: flex; flex-direction: column;
}
.logo-name { font-weight: 700; font-size: 17px; color: var(--negro); line-height: 1.1; }
.logo-sub { font-size: 10px; color: var(--gris-medio); letter-spacing: 1.5px; text-transform: uppercase; }

nav { display: flex; align-items: center; gap: 0.25rem; }
nav a {
  text-decoration: none; color: var(--cafe);
  font-size: 13.5px; font-weight: 500;
  padding: 0.4rem 0.75rem; border-radius: 6px;
  transition: all 0.2s; cursor: pointer;
}
nav a:hover { background: var(--terracota-light); color: var(--terracota-dark); }
nav a.active { color: var(--terracota); }

.nav-cta {
  display: flex; align-items: center; gap: 0.75rem; margin-left: 0.5rem;
}
.btn-valua {
  background: var(--vino); color: white;
  border: none; border-radius: 8px;
  padding: 0.5rem 1.1rem; font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: 'Poppins', sans-serif;
  transition: background 0.2s; text-decoration: none;
  white-space: nowrap;
}
.btn-valua:hover { background: var(--vino-dark); }
.btn-wa-nav {
  background: var(--whatsapp); color: white;
  border: none; border-radius: 8px;
  padding: 0.5rem 1rem; font-size: 13px; font-weight: 600;
  cursor: pointer; font-family: 'Poppins', sans-serif;
  display: flex; align-items: center; gap: 6px;
  transition: background 0.2s; text-decoration: none;
}
.btn-wa-nav:hover { background: #1fb857; }

/* Hamburger */
.hamburger {
  display: none; background: none; border: none;
  cursor: pointer; padding: 8px; flex-direction: column; gap: 5px;
}
.hamburger span {
  display: block; width: 22px; height: 2px; background: var(--cafe); border-radius: 2px;
  transition: all 0.3s;
}
.mobile-menu {
  display: none; position: fixed; top: 72px; left: 0; right: 0;
  background: white; border-bottom: 1px solid var(--gris-claro);
  padding: 1rem 2rem 1.5rem; z-index: 999;
  flex-direction: column; gap: 0.25rem;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  text-decoration: none; color: var(--cafe);
  font-size: 15px; font-weight: 500; padding: 0.65rem 0;
  border-bottom: 1px solid var(--gris-claro); cursor: pointer;
}
.mobile-menu a:last-of-type { border-bottom: none; }
.mobile-menu .btn-valua, .mobile-menu .btn-wa-nav {
  margin-top: 0.5rem; text-align: center; justify-content: center;
}

/* ===== PAGE WRAPPER ===== */
.page-content { padding-top: 72px; }

/* ===== HERO ===== */
.hero {
  background: linear-gradient(135deg, var(--cafe) 0%, var(--negro) 60%, #2d1a0e 100%);
  min-height: 88vh; display: flex; align-items: center;
  position: relative; overflow: hidden;
}
.hero::before {
  content: '';
  position: absolute; top: 0; right: 0; width: 55%; height: 100%;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><rect width="400" height="600" fill="%23C4622D" opacity="0.12"/><rect x="40" y="40" width="320" height="220" rx="12" fill="%23C4622D" opacity="0.08"/><rect x="40" y="280" width="150" height="100" rx="8" fill="%23C4622D" opacity="0.06"/><rect x="210" y="280" width="150" height="100" rx="8" fill="%23C4622D" opacity="0.06"/></svg>') center/cover;
  opacity: 0.4;
}
.hero-inner {
  max-width: 1200px; margin: 0 auto; padding: 5rem 2rem;
  position: relative; z-index: 1;
  display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
}
.hero-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: rgba(196,98,45,0.2); border: 1px solid rgba(196,98,45,0.4);
  border-radius: 20px; padding: 4px 14px;
  font-size: 12px; font-weight: 600; color: #f0a882;
  letter-spacing: 0.5px; margin-bottom: 1.25rem;
}
.hero h1 {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800; color: white; line-height: 1.2;
  margin-bottom: 1.25rem;
}
.hero h1 span { color: var(--terracota); }
.hero p {
  font-size: 1.05rem; color: rgba(255,255,255,0.75);
  margin-bottom: 2rem; line-height: 1.7; max-width: 480px;
}
.hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
.btn-primary {
  background: var(--terracota); color: white;
  border: none; border-radius: 10px;
  padding: 0.85rem 1.75rem; font-size: 15px; font-weight: 600;
  cursor: pointer; font-family: 'Poppins', sans-serif;
  transition: all 0.2s; text-decoration: none;
  display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary:hover { background: var(--terracota-dark); transform: translateY(-1px); }
.btn-outline-white {
  background: transparent; color: white;
  border: 1.5px solid rgba(255,255,255,0.4); border-radius: 10px;
  padding: 0.85rem 1.75rem; font-size: 15px; font-weight: 600;
  cursor: pointer; font-family: 'Poppins', sans-serif;
  transition: all 0.2s; text-decoration: none;
}
.btn-outline-white:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.7); }
.hero-stats {
  display: flex; gap: 2rem; margin-top: 2.5rem;
}
.hero-stat { text-align: left; }
.hero-stat-num { font-size: 1.8rem; font-weight: 800; color: white; line-height: 1; }
.hero-stat-label { font-size: 12px; color: rgba(255,255,255,0.55); margin-top: 2px; }

/* Hero search box */
.hero-search {
  background: white; border-radius: 16px;
  padding: 2rem; box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.hero-search h3 { font-size: 1.1rem; font-weight: 700; color: var(--negro); margin-bottom: 1.25rem; }
.search-tabs {
  display: flex; gap: 0; margin-bottom: 1.25rem;
  border: 1.5px solid var(--gris-claro); border-radius: 8px; overflow: hidden;
}
.search-tab {
  flex: 1; padding: 0.5rem; font-size: 13px; font-weight: 600;
  background: none; border: none; cursor: pointer;
  font-family: 'Poppins', sans-serif; color: var(--gris-medio);
  transition: all 0.2s;
}
.search-tab.active { background: var(--terracota); color: white; }
.search-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1rem; }
.search-field label { font-size: 11px; font-weight: 600; color: var(--gris-medio); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 4px; }
.search-field select, .search-field input {
  width: 100%; padding: 0.55rem 0.75rem;
  border: 1.5px solid var(--gris-claro); border-radius: 8px;
  font-size: 13px; font-family: 'Poppins', sans-serif; color: var(--negro);
  background: var(--crema); outline: none; appearance: none;
}
.search-field select:focus, .search-field input:focus { border-color: var(--terracota); }
.btn-search {
  width: 100%; padding: 0.8rem; background: var(--terracota); color: white;
  border: none; border-radius: 10px; font-size: 14px; font-weight: 700;
  cursor: pointer; font-family: 'Poppins', sans-serif; transition: background 0.2s;
}
.btn-search:hover { background: var(--terracota-dark); }

/* ===== SECTIONS ===== */
section { padding: 5rem 0; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
.section-label {
  font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
  color: var(--terracota); margin-bottom: 0.5rem;
}
.section-title {
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 800; color: var(--negro); line-height: 1.25; margin-bottom: 1rem;
}
.section-sub { font-size: 1rem; color: var(--gris-medio); max-width: 560px; line-height: 1.7; }
.section-header { margin-bottom: 3rem; }
.section-header.center { text-align: center; }
.section-header.center .section-sub { margin: 0 auto; }

/* ===== PROPERTY CARDS ===== */
.props-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.prop-card {
  background: white; border-radius: 14px;
  border: 1px solid var(--gris-claro);
  overflow: hidden; transition: all 0.25s; cursor: pointer;
}
.prop-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px var(--sombra-md); }
.prop-img {
  height: 200px; position: relative; overflow: hidden;
  background: var(--crema-dark);
}
.prop-img-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--crema-dark), var(--gris-claro));
  font-size: 2.5rem; color: var(--gris-medio);
}
.prop-badge {
  position: absolute; top: 12px; left: 12px;
  background: var(--terracota); color: white;
  font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px;
  letter-spacing: 0.3px;
}
.prop-badge.renta { background: var(--vino); }
.prop-code {
  position: absolute; bottom: 12px; right: 12px;
  background: rgba(26,18,8,0.6); color: white;
  font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 4px;
}
.prop-body { padding: 1.25rem; }
.prop-price { font-size: 1.3rem; font-weight: 800; color: var(--terracota); line-height: 1; margin-bottom: 4px; }
.prop-price-label { font-size: 11px; color: var(--gris-medio); margin-bottom: 0.6rem; }
.prop-title { font-size: 0.9rem; font-weight: 600; color: var(--negro); margin-bottom: 0.4rem; }
.prop-location { font-size: 12px; color: var(--gris-medio); margin-bottom: 0.9rem; display: flex; align-items: center; gap: 4px; }
.prop-features {
  display: flex; gap: 1rem; padding-top: 0.75rem;
  border-top: 1px solid var(--gris-claro);
}
.prop-feat { font-size: 12px; color: var(--cafe); display: flex; align-items: center; gap: 4px; font-weight: 500; }
.prop-feat span { font-size: 16px; }

/* CRM badge */
.crm-tag {
  display: inline-flex; align-items: center; gap: 4px;
  background: #e8f4e8; color: #2d7a2d;
  font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 4px;
  letter-spacing: 0.3px; float: right; margin-top: 2px;
}

/* ===== CATEGORIES ===== */
.cats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
.cat-card {
  background: white; border-radius: 14px; border: 1px solid var(--gris-claro);
  padding: 2rem 1.5rem; text-align: center; cursor: pointer;
  transition: all 0.25s; text-decoration: none; color: inherit;
  display: block;
}
.cat-card:hover { border-color: var(--terracota); transform: translateY(-3px); box-shadow: 0 8px 30px var(--sombra); }
.cat-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
.cat-title { font-size: 1.05rem; font-weight: 700; color: var(--negro); margin-bottom: 0.4rem; }
.cat-desc { font-size: 13px; color: var(--gris-medio); line-height: 1.5; }
.cat-count { font-size: 12px; font-weight: 600; color: var(--terracota); margin-top: 0.6rem; }

/* ===== SERVICES MINI ===== */
.services-mini { background: var(--negro); color: white; }
.services-mini .section-title { color: white; }
.services-mini .section-sub { color: rgba(255,255,255,0.6); }
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
.service-block {
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px; padding: 1.75rem 1.5rem;
  transition: all 0.25s; cursor: pointer;
}
.service-block:hover { background: rgba(196,98,45,0.15); border-color: var(--terracota); }
.service-icon { font-size: 1.75rem; margin-bottom: 1rem; }
.service-name { font-size: 1rem; font-weight: 700; color: white; margin-bottom: 0.5rem; }
.service-desc { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; margin-bottom: 1rem; }
.service-link { font-size: 13px; font-weight: 600; color: var(--terracota); text-decoration: none; cursor: pointer; }
.service-link:hover { color: #e07a4a; }

/* ===== NOSOTROS MINI ===== */
.nosotros-mini { background: var(--crema-dark); }
.nosotros-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
.nosotros-img {
  aspect-ratio: 4/3; background: linear-gradient(135deg, var(--cafe), var(--negro));
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  font-size: 4rem; color: rgba(255,255,255,0.3);
}
.nosotros-text .section-label { margin-bottom: 0.4rem; }
.nosotros-list { list-style: none; margin: 1.25rem 0; display: flex; flex-direction: column; gap: 0.6rem; }
.nosotros-list li { font-size: 14px; color: var(--cafe); display: flex; align-items: center; gap: 8px; }
.nosotros-list li::before { content: '✓'; color: var(--terracota); font-weight: 800; }

/* ===== CTA VALUACION ===== */
.cta-valuacion {
  background: linear-gradient(135deg, var(--vino), var(--vino-dark));
  border-radius: 20px; padding: 4rem; text-align: center;
  margin: 0 2rem;
}
.cta-valuacion h2 { font-size: 2rem; font-weight: 800; color: white; margin-bottom: 0.75rem; }
.cta-valuacion p { font-size: 1rem; color: rgba(255,255,255,0.75); margin-bottom: 2rem; }
.cta-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }
.btn-white {
  background: white; color: var(--vino);
  border: none; border-radius: 10px;
  padding: 0.85rem 1.75rem; font-size: 15px; font-weight: 700;
  cursor: pointer; font-family: 'Poppins', sans-serif;
  transition: all 0.2s; text-decoration: none;
}
.btn-white:hover { transform: translateY(-1px); box-shadow: 0 4px 16px rgba(0,0,0,0.2); }

/* ===== ZONAS ===== */
.zonas-list {
  display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem;
}
.zona-chip {
  background: white; border: 1.5px solid var(--gris-claro);
  border-radius: 20px; padding: 0.45rem 1rem;
  font-size: 13px; font-weight: 500; color: var(--cafe);
  cursor: pointer; transition: all 0.2s; text-decoration: none;
}
.zona-chip:hover { border-color: var(--terracota); color: var(--terracota); background: var(--terracota-light); }

/* ===== FOOTER ===== */
footer { background: var(--negro); color: rgba(255,255,255,0.7); }
.footer-top {
  max-width: 1200px; margin: 0 auto; padding: 4rem 2rem 3rem;
  display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem;
}
.footer-brand {}
.footer-logo { display: flex; align-items: center; gap: 10px; margin-bottom: 1rem; }
.footer-logo .logo-mark { width: 36px; height: 36px; font-size: 14px; }
.footer-logo .logo-name { color: white; }
.footer-logo .logo-sub { color: rgba(255,255,255,0.4); }
.footer-desc { font-size: 13.5px; line-height: 1.7; margin-bottom: 1.25rem; }
.footer-address { font-size: 12.5px; line-height: 1.7; }
.footer-col h4 { font-size: 12px; font-weight: 700; color: white; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 1rem; }
.footer-links { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.footer-links a { font-size: 13px; color: rgba(255,255,255,0.6); text-decoration: none; cursor: pointer; transition: color 0.2s; }
.footer-links a:hover { color: var(--terracota); }
.footer-social { display: flex; gap: 0.75rem; margin-top: 1rem; }
.social-btn {
  width: 36px; height: 36px; border-radius: 8px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  display: flex; align-items: center; justify-content: center;
  font-size: 15px; cursor: pointer; transition: all 0.2s; text-decoration: none; color: white;
}
.social-btn:hover { background: var(--terracota); border-color: var(--terracota); }
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  max-width: 1200px; margin: 0 auto; padding: 1.25rem 2rem;
  display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;
}
.footer-bottom p { font-size: 12px; color: rgba(255,255,255,0.4); }
.footer-bottom-links { display: flex; gap: 1.25rem; }
.footer-bottom-links a { font-size: 12px; color: rgba(255,255,255,0.4); text-decoration: none; cursor: pointer; }
.footer-bottom-links a:hover { color: rgba(255,255,255,0.7); }

/* ===== WA FLOAT ===== */
.wa-float {
  position: fixed; bottom: 2rem; right: 2rem; z-index: 999;
  width: 56px; height: 56px; border-radius: 50%;
  background: var(--whatsapp); color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.6rem; box-shadow: 0 4px 20px rgba(37,211,102,0.5);
  cursor: pointer; transition: all 0.2s; text-decoration: none;
  animation: pulse-wa 2s infinite;
}
.wa-float:hover { transform: scale(1.1); }
@keyframes pulse-wa {
  0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
  50% { box-shadow: 0 4px 30px rgba(37,211,102,0.75); }
}

/* ===== BREADCRUMB ===== */
.breadcrumb {
  background: var(--crema-dark); border-bottom: 1px solid var(--gris-claro);
  padding: 0.75rem 0;
}
.breadcrumb-inner {
  max-width: 1200px; margin: 0 auto; padding: 0 2rem;
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 13px; color: var(--gris-medio);
}
.breadcrumb-inner a { color: var(--terracota); text-decoration: none; cursor: pointer; font-weight: 500; }
.breadcrumb-inner span { color: var(--gris-claro); }

/* ===== PROPIEDADES PAGE ===== */
.propiedades-layout {
  display: grid; grid-template-columns: 280px 1fr; gap: 2rem;
  max-width: 1200px; margin: 0 auto; padding: 2rem 2rem 4rem;
}
.filters-panel {
  background: white; border-radius: 14px; border: 1px solid var(--gris-claro);
  padding: 1.5rem; height: fit-content; position: sticky; top: 88px;
}
.filters-panel h3 { font-size: 14px; font-weight: 700; color: var(--negro); margin-bottom: 1.25rem; }
.filter-group { margin-bottom: 1.25rem; }
.filter-group label { font-size: 11px; font-weight: 700; color: var(--gris-medio); text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-bottom: 0.4rem; }
.filter-group select, .filter-group input {
  width: 100%; padding: 0.5rem 0.65rem;
  border: 1.5px solid var(--gris-claro); border-radius: 8px;
  font-size: 13px; font-family: 'Poppins', sans-serif; color: var(--negro);
  background: var(--crema); outline: none; appearance: none;
}
.filter-group select:focus, .filter-group input:focus { border-color: var(--terracota); }
.price-range { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; }
.btn-clear-filters {
  width: 100%; padding: 0.6rem; background: none; border: 1.5px solid var(--gris-claro);
  border-radius: 8px; font-size: 13px; font-weight: 600; color: var(--gris-medio);
  cursor: pointer; font-family: 'Poppins', sans-serif; transition: all 0.2s; margin-top: 0.5rem;
}
.btn-clear-filters:hover { border-color: var(--terracota); color: var(--terracota); }

.props-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;
}
.props-count { font-size: 14px; color: var(--gris-medio); }
.props-count strong { color: var(--negro); }
.props-sort {
  display: flex; align-items: center; gap: 0.5rem;
}
.props-sort label { font-size: 13px; color: var(--gris-medio); }
.props-sort select {
  padding: 0.4rem 0.65rem; border: 1.5px solid var(--gris-claro); border-radius: 8px;
  font-size: 13px; font-family: 'Poppins', sans-serif; background: white; outline: none;
}
.crm-indicator {
  display: inline-flex; align-items: center; gap: 6px;
  background: #e8f4e8; color: #1a6b1a; border: 1px solid #b8ddb8;
  border-radius: 6px; padding: 4px 10px; font-size: 11px; font-weight: 600;
  margin-bottom: 1rem;
}
.crm-dot { width: 6px; height: 6px; border-radius: 50%; background: #25a025; animation: blink 2s infinite; }
@keyframes blink { 0%,100%{opacity:1}50%{opacity:0.4} }

/* Pagination */
.pagination { display: flex; gap: 0.5rem; justify-content: center; margin-top: 2.5rem; }
.pag-btn {
  width: 36px; height: 36px; border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 600; cursor: pointer;
  border: 1.5px solid var(--gris-claro); background: white; color: var(--cafe);
  transition: all 0.2s;
}
.pag-btn.active { background: var(--terracota); border-color: var(--terracota); color: white; }
.pag-btn:hover:not(.active) { border-color: var(--terracota); color: var(--terracota); }

/* ===== PROP DETAIL ===== */
.prop-detail { max-width: 1200px; margin: 0 auto; padding: 2rem 2rem 4rem; }
.prop-detail-grid { display: grid; grid-template-columns: 1fr 380px; gap: 2.5rem; align-items: start; }
/* === GALLERY FICHA === */
.gallery {
  background: var(--crema-dark); border-radius: 14px; overflow: hidden;
  aspect-ratio: 16/9; position: relative;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 0.75rem;
}
.gallery-placeholder { font-size: 4rem; color: var(--gris-medio); }
.gallery-main-img { width:100%; height:100%; object-fit:cover; display:block; transition: opacity 0.3s; }
.gallery-nav {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(26,18,8,0.55); color: white; border: none;
  width: 36px; height: 36px; border-radius: 50%; font-size: 16px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; z-index: 2;
}
.gallery-nav:hover { background: rgba(196,98,45,0.85); }
.gallery-nav.prev { left: 10px; }
.gallery-nav.next { right: 10px; }
.gallery-counter {
  position: absolute; bottom: 10px; right: 12px;
  background: rgba(26,18,8,0.6); color: white;
  font-size: 11px; font-weight: 600; padding: 3px 8px; border-radius: 10px;
}
.gallery-thumbs { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; margin-bottom: 1rem; }
.gallery-thumb {
  aspect-ratio: 4/3; background: var(--gris-claro); border-radius: 8px;
  overflow: hidden; cursor: pointer; transition: all 0.2s;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.25rem; color: var(--gris-medio);
}
.gallery-thumb img { width:100%; height:100%; object-fit:cover; display:block; }
.gallery-thumb:hover { opacity: 0.8; }
.gallery-thumb.active { outline: 2px solid var(--terracota); outline-offset: 1px; }
/* === CARD MINI-CAROUSEL === */
.card-carousel { position: relative; height: 200px; overflow: hidden; background: var(--crema-dark); border-radius: 14px 14px 0 0; }
.card-carousel-track { display: flex; height: 100%; transition: transform 0.35s ease; }
.card-carousel-slide {
  min-width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  font-size: 2.8rem; color: var(--gris-medio); flex-shrink: 0;
}
.card-carousel-slide img { width:100%; height:100%; object-fit:cover; display:block; }
.card-carousel-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  background: rgba(26,18,8,0.5); color: white; border: none;
  width: 28px; height: 28px; border-radius: 50%; font-size: 13px;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; z-index: 3; opacity: 0;
}
.card-carousel:hover .card-carousel-btn { opacity: 1; }
.card-carousel-btn.prev { left: 7px; }
.card-carousel-btn.next { right: 7px; }
.card-carousel-dots { position: absolute; bottom: 8px; left: 50%; transform: translateX(-50%); display: flex; gap: 4px; z-index: 3; }
.card-dot { width: 5px; height: 5px; border-radius: 50%; background: rgba(255,255,255,0.5); transition: background 0.2s; }
.card-dot.active { background: white; }

.prop-info { }
.prop-detail-badge {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--terracota-light); color: var(--terracota);
  font-size: 11px; font-weight: 700; padding: 3px 10px; border-radius: 20px;
  margin-bottom: 0.5rem;
}
.prop-detail-title { font-size: 1.5rem; font-weight: 800; color: var(--negro); margin-bottom: 0.5rem; }
.prop-detail-code { font-size: 12px; color: var(--gris-medio); margin-bottom: 1rem; }
.prop-detail-price { font-size: 2rem; font-weight: 800; color: var(--terracota); margin-bottom: 0.25rem; }
.prop-detail-price-sub { font-size: 13px; color: var(--gris-medio); margin-bottom: 1.5rem; }
.prop-features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.5rem; }
.prop-feature-item {
  background: var(--crema-dark); border-radius: 10px; padding: 0.75rem;
  text-align: center;
}
.prop-feature-val { font-size: 1.1rem; font-weight: 800; color: var(--negro); }
.prop-feature-name { font-size: 11px; color: var(--gris-medio); margin-top: 1px; }
.prop-section-title { font-size: 14px; font-weight: 700; color: var(--negro); margin-bottom: 0.75rem; padding-top: 1.25rem; border-top: 1px solid var(--gris-claro); margin-top: 1.25rem; }
.prop-description { font-size: 14px; color: var(--cafe); line-height: 1.7; }
.amenities-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.amenity-chip {
  background: var(--crema-dark); border: 1px solid var(--gris-claro);
  border-radius: 6px; padding: 0.35rem 0.75rem; font-size: 12px; color: var(--cafe);
}
.prop-map {
  background: linear-gradient(135deg, #e8f4e8, #d4ecd4);
  border-radius: 12px; height: 200px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid #b8ddb8; color: #2d7a2d; font-size: 13px; font-weight: 600;
  margin-top: 1rem; flex-direction: column; gap: 0.5rem;
}

/* Sidebar sticky */
.prop-sidebar {
  background: white; border-radius: 14px; border: 1px solid var(--gris-claro);
  padding: 1.5rem; position: sticky; top: 88px;
}
.advisor-card { display: flex; align-items: center; gap: 12px; margin-bottom: 1.25rem; }
.advisor-avatar {
  width: 48px; height: 48px; border-radius: 50%;
  background: linear-gradient(135deg, var(--terracota), var(--vino));
  display: flex; align-items: center; justify-content: center;
  color: white; font-weight: 700; font-size: 16px;
}
.advisor-name { font-size: 14px; font-weight: 700; color: var(--negro); }
.advisor-role { font-size: 12px; color: var(--gris-medio); }
.btn-wa-big {
  width: 100%; padding: 0.9rem; background: var(--whatsapp); color: white;
  border: none; border-radius: 10px; font-size: 14px; font-weight: 700;
  cursor: pointer; font-family: 'Poppins', sans-serif; margin-bottom: 0.75rem;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: background 0.2s;
}
.btn-wa-big:hover { background: #1fb857; }
.btn-share {
  width: 100%; padding: 0.75rem; background: none; border: 1.5px solid var(--gris-claro);
  border-radius: 10px; font-size: 13px; font-weight: 600; color: var(--cafe);
  cursor: pointer; font-family: 'Poppins', sans-serif; transition: all 0.2s;
  display: flex; align-items: center; justify-content: center; gap: 6px;
}
.btn-share:hover { border-color: var(--terracota); color: var(--terracota); }
.share-icons { display: flex; gap: 0.5rem; margin-top: 0.75rem; }
.share-icon {
  flex: 1; padding: 0.5rem; border-radius: 8px; text-align: center;
  font-size: 13px; font-weight: 600; cursor: pointer; border: 1.5px solid;
  transition: all 0.2s;
}
.share-wa { border-color: #25D366; color: #25D366; background: #f0fdf4; }
.share-fb { border-color: #1877f2; color: #1877f2; background: #f0f4ff; }
.share-li { border-color: #0077b5; color: #0077b5; background: #f0f7ff; }
.share-wa:hover { background: #25D366; color: white; }
.share-fb:hover { background: #1877f2; color: white; }
.share-li:hover { background: #0077b5; color: white; }

/* ===== SERVICIOS ===== */
.servicios-page { max-width: 1000px; margin: 0 auto; padding: 3rem 2rem 5rem; }
.servicios-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.5rem; margin-top: 2.5rem; }
.servicio-card {
  background: white; border-radius: 14px; border: 1px solid var(--gris-claro);
  padding: 2rem; transition: all 0.25s;
}
.servicio-card:hover { border-color: var(--terracota); box-shadow: 0 8px 30px var(--sombra); }
.servicio-icon-big { font-size: 2.5rem; margin-bottom: 1rem; }
.servicio-name { font-size: 1.1rem; font-weight: 700; color: var(--negro); margin-bottom: 0.5rem; }
.servicio-desc { font-size: 13.5px; color: var(--gris-medio); line-height: 1.7; margin-bottom: 1.25rem; }
.btn-contactar {
  display: inline-flex; align-items: center; gap: 6px;
  background: var(--terracota-light); color: var(--terracota);
  border: 1.5px solid var(--terracota); border-radius: 8px;
  padding: 0.55rem 1.1rem; font-size: 13px; font-weight: 700;
  cursor: pointer; font-family: 'Poppins', sans-serif; transition: all 0.2s;
}
.btn-contactar:hover { background: var(--terracota); color: white; }

/* ===== VALUACION ===== */
.valuacion-page { max-width: 960px; margin: 0 auto; padding: 3rem 2rem 5rem; }
.valuacion-grid { display: grid; grid-template-columns: 1fr 380px; gap: 3rem; align-items: start; }
.form-card {
  background: white; border-radius: 14px; border: 1px solid var(--gris-claro);
  padding: 2rem;
}
.form-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--negro); margin-bottom: 1.5rem; }
.form-group { margin-bottom: 1.1rem; }
.form-group label { font-size: 12px; font-weight: 600; color: var(--cafe); display: block; margin-bottom: 0.35rem; }
.form-group input, .form-group select, .form-group textarea {
  width: 100%; padding: 0.6rem 0.85rem;
  border: 1.5px solid var(--gris-claro); border-radius: 8px;
  font-size: 14px; font-family: 'Poppins', sans-serif; color: var(--negro);
  background: var(--crema); outline: none; transition: border 0.2s; appearance: none;
}
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: var(--terracota); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.form-check { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 1rem; }
.form-check input { width: auto; margin-top: 3px; }
.form-check label { font-size: 12px; color: var(--gris-medio); line-height: 1.5; }
.btn-primary-full {
  width: 100%; padding: 0.9rem; background: var(--terracota); color: white;
  border: none; border-radius: 10px; font-size: 15px; font-weight: 700;
  cursor: pointer; font-family: 'Poppins', sans-serif; margin-bottom: 0.75rem;
  transition: background 0.2s;
}
.btn-primary-full:hover { background: var(--terracota-dark); }
.btn-wa-full {
  width: 100%; padding: 0.85rem; background: var(--whatsapp); color: white;
  border: none; border-radius: 10px; font-size: 14px; font-weight: 600;
  cursor: pointer; font-family: 'Poppins', sans-serif;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: background 0.2s;
}
.btn-wa-full:hover { background: #1fb857; }
.valuacion-info { }
.valuacion-info h3 { font-size: 1.1rem; font-weight: 700; color: var(--negro); margin-bottom: 1rem; }
.proceso-steps { display: flex; flex-direction: column; gap: 1.25rem; }
.paso {
  display: flex; align-items: flex-start; gap: 12px;
  background: white; border-radius: 10px; padding: 1rem 1.1rem; border: 1px solid var(--gris-claro);
}
.paso-num {
  width: 28px; height: 28px; border-radius: 50%;
  background: var(--terracota); color: white;
  display: flex; align-items: center; justify-content: center;
  font-size: 12px; font-weight: 700; flex-shrink: 0;
}
.paso-text h4 { font-size: 13px; font-weight: 700; color: var(--negro); margin-bottom: 2px; }
.paso-text p { font-size: 12px; color: var(--gris-medio); line-height: 1.5; }
.valuacion-cta-box {
  background: var(--vino); border-radius: 12px; padding: 1.5rem; margin-top: 1.5rem;
  text-align: center;
}
.valuacion-cta-box h4 { color: white; font-size: 15px; font-weight: 700; margin-bottom: 0.4rem; }
.valuacion-cta-box p { color: rgba(255,255,255,0.7); font-size: 13px; margin-bottom: 1rem; }

/* ===== NOSOTROS PAGE ===== */
.nosotros-page { max-width: 1000px; margin: 0 auto; padding: 3rem 2rem 5rem; }
.nosotros-hero-img {
  width: 100%; height: 320px;
  background: linear-gradient(135deg, var(--cafe), var(--negro));
  border-radius: 16px; display: flex; align-items: center; justify-content: center;
  margin-bottom: 3rem; font-size: 5rem; color: rgba(255,255,255,0.2);
}
.stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin: 2.5rem 0; }
.stat-box {
  background: white; border-radius: 12px; border: 1px solid var(--gris-claro);
  padding: 1.5rem; text-align: center;
}
.stat-num { font-size: 2rem; font-weight: 800; color: var(--terracota); }
.stat-label { font-size: 12px; color: var(--gris-medio); margin-top: 4px; }
.diferenciadores { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 2rem 0; }
.dif-item {
  background: var(--crema-dark); border-radius: 10px; padding: 1.25rem;
  border-left: 3px solid var(--terracota);
}
.dif-title { font-size: 14px; font-weight: 700; color: var(--negro); margin-bottom: 0.35rem; }
.dif-desc { font-size: 13px; color: var(--gris-medio); line-height: 1.5; }
.mision-box {
  background: linear-gradient(135deg, var(--negro), var(--cafe));
  border-radius: 14px; padding: 2.5rem; text-align: center; margin: 2rem 0;
}
.mision-box h3 { font-size: 1.25rem; font-weight: 800; color: white; margin-bottom: 0.75rem; }
.mision-box p { color: rgba(255,255,255,0.75); line-height: 1.7; font-size: 15px; }
.equipo-placeholder {
  background: var(--crema-dark); border-radius: 14px;
  padding: 3rem; text-align: center; border: 2px dashed var(--gris-claro);
}
.equipo-placeholder p { color: var(--gris-medio); font-size: 14px; margin-top: 1rem; }
.btn-contactar-nos {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--terracota); color: white;
  border-radius: 10px; padding: 0.85rem 1.75rem;
  font-size: 15px; font-weight: 700; cursor: pointer;
  font-family: 'Poppins', sans-serif; border: none; margin-top: 2rem;
  transition: background 0.2s;
}
.btn-contactar-nos:hover { background: var(--terracota-dark); }

/* ===== CONTACTO ===== */
.contacto-page { max-width: 1100px; margin: 0 auto; padding: 3rem 2rem 5rem; }
.contacto-grid { display: grid; grid-template-columns: 1fr 400px; gap: 3rem; }
.motivos { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.25rem; }
.motivo-btn {
  background: white; border: 1.5px solid var(--gris-claro);
  border-radius: 20px; padding: 0.4rem 1rem; font-size: 13px; font-weight: 500;
  color: var(--cafe); cursor: pointer; font-family: 'Poppins', sans-serif;
  transition: all 0.2s;
}
.motivo-btn.active { background: var(--terracota); border-color: var(--terracota); color: white; }
.motivo-btn:hover:not(.active) { border-color: var(--terracota); color: var(--terracota); }
.contacto-info { }
.info-card {
  background: white; border-radius: 14px; border: 1px solid var(--gris-claro);
  padding: 1.5rem; margin-bottom: 1rem;
}
.info-card h4 { font-size: 13px; font-weight: 700; color: var(--negro); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 1px; }
.info-item { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 0.75rem; }
.info-item:last-child { margin-bottom: 0; }
.info-icon { font-size: 18px; margin-top: 1px; color: var(--terracota); }
.info-text { font-size: 13.5px; color: var(--cafe); line-height: 1.5; }
.info-label { font-size: 11px; color: var(--gris-medio); font-weight: 600; display: block; }
.map-embed {
  background: linear-gradient(135deg, #e8f4e8, #d4ecd4);
  border-radius: 12px; height: 200px;
  display: flex; align-items: center; justify-content: center;
  border: 1px solid #b8ddb8; color: #2d7a2d; font-size: 13px; font-weight: 600;
  flex-direction: column; gap: 0.5rem; margin-top: 0.75rem;
  cursor: pointer; transition: all 0.2s;
}
.map-embed:hover { opacity: 0.9; }
.btn-como-llegar {
  width: 100%; padding: 0.7rem; background: none; border: 1.5px solid var(--terracota);
  border-radius: 10px; font-size: 13px; font-weight: 700; color: var(--terracota);
  cursor: pointer; font-family: 'Poppins', sans-serif; margin-top: 0.75rem;
  transition: all 0.2s;
}
.btn-como-llegar:hover { background: var(--terracota); color: white; }
.redes-row { display: flex; gap: 0.5rem; margin-top: 0.75rem; }
.red-btn {
  flex: 1; padding: 0.6rem; border-radius: 8px; text-align: center;
  font-size: 12px; font-weight: 600; cursor: pointer; border: 1.5px solid;
  transition: all 0.2s; font-family: 'Poppins', sans-serif;
}

/* ===== 404 ===== */
.not-found {
  min-height: 60vh; display: flex; align-items: center; justify-content: center;
  text-align: center; padding: 4rem 2rem;
}
.not-found-inner { max-width: 480px; }
.not-found-num { font-size: 8rem; font-weight: 800; color: var(--terracota); line-height: 1; opacity: 0.25; }
.not-found-title { font-size: 1.5rem; font-weight: 700; color: var(--negro); margin-bottom: 0.75rem; }
.not-found-desc { font-size: 14px; color: var(--gris-medio); margin-bottom: 2rem; }

/* ===== AVISO PRIVACIDAD ===== */
.legal-page { max-width: 800px; margin: 0 auto; padding: 3rem 2rem 5rem; }
.legal-page h1 { font-size: 1.75rem; font-weight: 800; color: var(--negro); margin-bottom: 0.5rem; }
.legal-date { font-size: 13px; color: var(--gris-medio); margin-bottom: 2rem; }
.legal-section { margin-bottom: 2rem; }
.legal-section h2 { font-size: 1.05rem; font-weight: 700; color: var(--negro); margin-bottom: 0.75rem; }
.legal-section p, .legal-section li { font-size: 14px; color: var(--cafe); line-height: 1.8; }
.legal-section ul { padding-left: 1.25rem; margin-top: 0.5rem; }
.legal-section li { margin-bottom: 0.3rem; }

/* ===== COOKIE BANNER ===== */
.cookie-banner {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 998;
  background: var(--negro); color: white;
  padding: 1.25rem 2rem;
  display: flex; align-items: center; justify-content: space-between; gap: 2rem;
  flex-wrap: wrap;
}
.cookie-banner p { font-size: 13px; color: rgba(255,255,255,0.8); flex: 1; min-width: 200px; }
.cookie-banner p a { color: var(--terracota); text-decoration: none; }
.cookie-actions { display: flex; gap: 0.75rem; }
.btn-cookie-accept {
  background: var(--terracota); color: white; border: none; border-radius: 8px;
  padding: 0.55rem 1.25rem; font-size: 13px; font-weight: 700; cursor: pointer;
  font-family: 'Poppins', sans-serif;
}
.btn-cookie-reject {
  background: none; color: rgba(255,255,255,0.6); border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px; padding: 0.55rem 1rem; font-size: 13px; cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

/* ===== SUCCESS MODAL ===== */
.modal-overlay {
  position: fixed; inset: 0; z-index: 2000;
  background: rgba(26,18,8,0.6); backdrop-filter: blur(4px);
  display: none; align-items: center; justify-content: center;
}
.modal-overlay.open { display: flex; }
.modal-box {
  background: white; border-radius: 20px; padding: 2.5rem;
  max-width: 440px; width: 90%; text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
}
.modal-icon { font-size: 3rem; margin-bottom: 1rem; }
.modal-box h3 { font-size: 1.25rem; font-weight: 800; color: var(--negro); margin-bottom: 0.5rem; }
.modal-box p { font-size: 14px; color: var(--gris-medio); margin-bottom: 1.5rem; }
.btn-modal-close {
  background: var(--terracota); color: white; border: none; border-radius: 10px;
  padding: 0.75rem 2rem; font-size: 14px; font-weight: 700;
  cursor: pointer; font-family: 'Poppins', sans-serif;
}

/* ===== AI MODAL ===== */
.ai-modal-box {
  background: linear-gradient(135deg, var(--negro), var(--cafe));
  color: white; border-radius: 20px; padding: 2.5rem;
  max-width: 440px; width: 90%; text-align: center;
}
.ai-modal-box h3 { font-size: 1.25rem; font-weight: 800; color: white; margin-bottom: 0.5rem; }
.ai-modal-box p { font-size: 14px; color: rgba(255,255,255,0.7); margin-bottom: 1.5rem; }
.coming-soon-badge {
  display: inline-block; background: var(--terracota); color: white;
  font-size: 12px; font-weight: 700; padding: 4px 12px; border-radius: 20px;
  letter-spacing: 1px; margin-bottom: 1.25rem;
}
.btn-modal-close-dark {
  background: rgba(255,255,255,0.15); color: white; border: 1px solid rgba(255,255,255,0.2);
  border-radius: 10px; padding: 0.75rem 2rem; font-size: 14px; font-weight: 600;
  cursor: pointer; font-family: 'Poppins', sans-serif; margin-top: 0.5rem;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 900px) {
  nav, .nav-cta { display: none; }
  .hamburger { display: flex; }
  .hero-inner { grid-template-columns: 1fr; gap: 2rem; }
  .hero { min-height: auto; }
  .hero-search { display: none; }
  .cats-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
  .nosotros-grid { grid-template-columns: 1fr; }
  .footer-top { grid-template-columns: 1fr 1fr; }
  .propiedades-layout { grid-template-columns: 1fr; }
  .filters-panel { position: static; }
  .prop-detail-grid { grid-template-columns: 1fr; }
  .prop-features-grid { grid-template-columns: repeat(2, 1fr); }
  .stats-row { grid-template-columns: repeat(2, 1fr); }
  .diferenciadores { grid-template-columns: 1fr; }
  .servicios-grid { grid-template-columns: 1fr; }
  .valuacion-grid { grid-template-columns: 1fr; }
  .contacto-grid { grid-template-columns: 1fr; }
  .cta-valuacion { margin: 0; border-radius: 0; }
  .hero-stats { flex-wrap: wrap; gap: 1rem; }
  .search-grid { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .footer-top { grid-template-columns: 1fr; }
  .props-grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 1.65rem; }
  section { padding: 3rem 0; }
}
</style>
</head>
<body>

<!-- ===== HEADER ===== -->
<header>
  <div class="header-inner">
    <a class="logo" onclick="navTo('inicio')">
      <div class="logo-mark">RN</div>
      <div class="logo-text">
        <span class="logo-name">Rednorte</span>
        <span class="logo-sub">Inmobiliaria</span>
      </div>
    </a>
    <nav>
      <a onclick="navTo('inicio')" id="nav-inicio" class="active">Inicio</a>
      <a onclick="navTo('propiedades')" id="nav-propiedades">Propiedades</a>
      <a onclick="navTo('servicios')" id="nav-servicios">Servicios</a>
      <a onclick="navTo('nosotros')" id="nav-nosotros">Nosotros</a>
      <a onclick="navTo('contacto')" id="nav-contacto">Contacto</a>
    </nav>
    <div class="nav-cta">
      <button class="btn-valua" onclick="navTo('valuacion')">Valúa tu propiedad</button>
      <a class="btn-wa-nav" href="https://wa.me/528110000000" target="_blank">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        WhatsApp
      </a>
    </div>
    <button class="hamburger" id="hamburger" onclick="toggleMenu()" aria-label="Menú">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
<div class="mobile-menu" id="mobile-menu">
  <a onclick="navTo('inicio');toggleMenu()">Inicio</a>
  <a onclick="navTo('propiedades');toggleMenu()">Propiedades</a>
  <a onclick="navTo('servicios');toggleMenu()">Servicios</a>
  <a onclick="navTo('nosotros');toggleMenu()">Nosotros</a>
  <a onclick="navTo('contacto');toggleMenu()">Contacto</a>
  <button class="btn-valua" onclick="navTo('valuacion');toggleMenu()">Valúa tu propiedad</button>
  <a class="btn-wa-nav" href="https://wa.me/528110000000" target="_blank">💬 WhatsApp</a>
</div>

<!-- ===== WA FLOAT ===== -->
<a class="wa-float" href="https://wa.me/528110000000" target="_blank" title="Escríbenos por WhatsApp">
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>

<!-- ===== MODAL ÉXITO ===== -->
<div class="modal-overlay" id="successModal">
  <div class="modal-box">
    <div class="modal-icon">✅</div>
    <h3>¡Mensaje enviado!</h3>
    <p>Recibimos tu solicitud. Uno de nuestros asesores se comunicará contigo en menos de 24 horas.</p>
    <button class="btn-modal-close" onclick="closeModal('successModal')">Aceptar</button>
  </div>
</div>

<!-- ===== MODAL IA ===== -->
<div class="modal-overlay" id="aiModal">
  <div class="modal-box" style="background:none;padding:0;max-width:440px;">
    <div class="ai-modal-box">
      <div style="font-size:2.5rem;margin-bottom:0.75rem;">🤖</div>
      <div class="coming-soon-badge">PRÓXIMAMENTE</div>
      <h3>Buscar con Inteligencia Artificial</h3>
      <p>Pronto podrás describir en lenguaje natural la propiedad que buscas y nuestra IA encontrará las mejores opciones del inventario para ti.</p>
      <p style="color:rgba(255,255,255,0.5);font-size:12px;">Ej: "Busco casa en San Pedro con alberca, 3 recámaras y menos de 8 millones"</p>
      <button class="btn-modal-close-dark" onclick="closeModal('aiModal')">Cerrar</button>
    </div>
  </div>
</div>

<!-- ===== COOKIE BANNER ===== -->
<div class="cookie-banner" id="cookieBanner">
  <p>Usamos cookies para mejorar tu experiencia. Al continuar navegando aceptas nuestra <a onclick="navTo('aviso')">Política de Cookies</a>.</p>
  <div class="cookie-actions">
    <button class="btn-cookie-reject" onclick="closeCookies()">Solo necesarias</button>
    <button class="btn-cookie-accept" onclick="closeCookies()">Aceptar todas</button>
  </div>
</div>

<!-- ================================================================ -->
<!-- ===== PÁGINAS ===== -->
<!-- ================================================================ -->

<!-- ===== INICIO ===== -->
<div class="page active" id="page-inicio">
  <div class="page-content">

    <!-- HERO -->
    <section class="hero">
      <div class="hero-inner">
        <div>
          <div class="hero-badge">🏡 Especialistas en Nuevo León</div>
          <h1>Venta, renta e inversión inmobiliaria en <span>Monterrey y Nuevo León</span></h1>
          <p>Conectamos propiedades con decisiones inteligentes mediante asesoría profesional, análisis de mercado y una amplia red inmobiliaria.</p>
          <div class="hero-actions">
            <button class="btn-primary" onclick="navTo('propiedades')">Ver propiedades →</button>
            <button class="btn-outline-white" onclick="navTo('valuacion')">Valúa tu propiedad</button>
            <button class="btn-outline-white" onclick="openModal('aiModal')" style="border-color:rgba(196,98,45,0.5);color:#f0a882;">🤖 Buscar con IA</button>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-num">+500</div>
              <div class="hero-stat-label">Propiedades en inventario</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">15+</div>
              <div class="hero-stat-label">Años de experiencia</div>
            </div>
            <div class="hero-stat">
              <div class="hero-stat-num">12</div>
              <div class="hero-stat-label">Zonas cubiertas</div>
            </div>
          </div>
        </div>
        <div class="hero-search">
          <h3>🔍 Busca tu propiedad ideal</h3>
          <div class="search-tabs">
            <button class="search-tab active" onclick="setSearchTab(this,'Venta')">Venta</button>
            <button class="search-tab" onclick="setSearchTab(this,'Renta')">Renta</button>
          </div>
          <div class="search-grid">
            <div class="search-field">
              <label>Tipo de propiedad</label>
              <select>
                <option>Todos</option>
                <option>Casa</option>
                <option>Departamento</option>
                <option>Local comercial</option>
                <option>Bodega industrial</option>
                <option>Terreno</option>
              </select>
            </div>
            <div class="search-field">
              <label>Municipio / Zona</label>
              <select>
                <option>Todos</option>
                <option>San Pedro Garza García</option>
                <option>Monterrey Centro</option>
                <option>San Nicolás</option>
                <option>Guadalupe</option>
                <option>Santa Catarina</option>
              </select>
            </div>
            <div class="search-field">
              <label>Precio máximo</label>
              <select>
                <option>Sin límite</option>
                <option>Hasta $2M</option>
                <option>Hasta $5M</option>
                <option>Hasta $10M</option>
                <option>Hasta $20M</option>
              </select>
            </div>
            <div class="search-field">
              <label>Recámaras</label>
              <select>
                <option>Cualquiera</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
          </div>
          <button class="btn-search" onclick="navTo('propiedades')">Buscar propiedades</button>
        </div>
      </div>
    </section>

    <!-- PROPIEDADES DESTACADAS -->
    <section>
      <div class="container">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;">
          <div>
            <p class="section-label">Inventario del CRM</p>
            <h2 class="section-title">Propiedades destacadas</h2>
          </div>
          <span class="crm-tag"><span class="crm-dot"></span> Datos en tiempo real del CRM</span>
          <a style="font-size:14px;font-weight:600;color:var(--terracota);text-decoration:none;cursor:pointer;" onclick="navTo('propiedades')">Ver todo el inventario →</a>
        </div>
        <div class="props-grid" id="featured-props"></div>
      </div>
    </section>

    <!-- CATEGORÍAS -->
    <section style="background:var(--crema-dark);padding:3.5rem 0;">
      <div class="container">
        <div class="section-header center">
          <p class="section-label">Nuestro inventario</p>
          <h2 class="section-title">¿Qué tipo de propiedad buscas?</h2>
        </div>
        <div class="cats-grid">
          <a class="cat-card" onclick="navTo('propiedades')">
            <div class="cat-icon">🏠</div>
            <div class="cat-title">Residencial</div>
            <div class="cat-desc">Casas y departamentos en las mejores zonas de Nuevo León</div>
            <div class="cat-count">+320 propiedades</div>
          </a>
          <a class="cat-card" onclick="navTo('propiedades')">
            <div class="cat-icon">🏢</div>
            <div class="cat-title">Comercial</div>
            <div class="cat-desc">Locales, oficinas y espacios comerciales estratégicos</div>
            <div class="cat-count">+95 propiedades</div>
          </a>
          <a class="cat-card" onclick="navTo('propiedades')">
            <div class="cat-icon">🏭</div>
            <div class="cat-title">Industrial</div>
            <div class="cat-desc">Bodegas, naves y parques industriales en Nuevo León</div>
            <div class="cat-count">+85 propiedades</div>
          </a>
        </div>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section class="services-mini">
      <div class="container">
        <div class="section-header" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:1rem;">
          <div>
            <p class="section-label" style="color:#e07a4a;">Lo que hacemos</p>
            <h2 class="section-title">Nuestros servicios</h2>
            <p class="section-sub">Asesoría integral en bienes raíces residenciales, comerciales e industriales en todo Nuevo León.</p>
          </div>
          <a style="font-size:14px;font-weight:600;color:var(--terracota);text-decoration:none;cursor:pointer;" onclick="navTo('servicios')">Ver todos →</a>
        </div>
        <div class="services-grid">
          <div class="service-block">
            <div class="service-icon">🏷️</div>
            <div class="service-name">Venta de propiedades</div>
            <div class="service-desc">Comercializamos tu propiedad con estrategia de marketing digital, valuación profesional y red de compradores activos.</div>
            <a class="service-link" onclick="navTo('servicios')">Más información →</a>
          </div>
          <div class="service-block">
            <div class="service-icon">🔑</div>
            <div class="service-name">Renta de propiedades</div>
            <div class="service-desc">Encontramos el arrendatario ideal y gestionamos contratos, garantías y administración del arrendamiento.</div>
            <a class="service-link" onclick="navTo('servicios')">Más información →</a>
          </div>
          <div class="service-block">
            <div class="service-icon">📊</div>
            <div class="service-name">Asesoría para inversionistas</div>
            <div class="service-desc">Análisis de mercado, identificación de oportunidades y estrategias de portafolio inmobiliario.</div>
            <a class="service-link" onclick="navTo('servicios')">Más información →</a>
          </div>
          <div class="service-block">
            <div class="service-icon">🏗️</div>
            <div class="service-name">Propiedades industriales</div>
            <div class="service-desc">Naves industriales, bodegas y parques logísticos en los principales corredores de Nuevo León.</div>
            <a class="service-link" onclick="navTo('servicios')">Más información →</a>
          </div>
          <div class="service-block">
            <div class="service-icon">🏬</div>
            <div class="service-name">Propiedades comerciales</div>
            <div class="service-desc">Locales en planta baja, pisos de oficinas y espacios mixtos en ubicaciones estratégicas.</div>
            <a class="service-link" onclick="navTo('servicios')">Más información →</a>
          </div>
          <div class="service-block">
            <div class="service-icon">📋</div>
            <div class="service-name">Valuación gratuita</div>
            <div class="service-desc">Conoce el valor real de tu inmueble con nuestro análisis profesional de mercado sin costo.</div>
            <a class="service-link" onclick="navTo('valuacion')">Solicitar valuación →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- NOSOTROS MINI -->
    <section class="nosotros-mini">
      <div class="container">
        <div class="nosotros-grid">
          <div class="nosotros-img">👨‍👩‍👧‍👦</div>
          <div class="nosotros-text">
            <p class="section-label">Quiénes somos</p>
            <h2 class="section-title">Más de 15 años conectando personas con propiedades</h2>
            <p style="font-size:14.5px;color:var(--cafe);line-height:1.7;margin-bottom:1rem;">En Rednorte Inmobiliaria somos un equipo de asesores profesionales con profundo conocimiento del mercado de Nuevo León. Trabajamos con integridad, transparencia y resultados.</p>
            <ul class="nosotros-list">
              <li>Especialistas en residencial, comercial e industrial</li>
              <li>Cobertura en los 12 municipios principales de NL</li>
              <li>Red de más de 500 propiedades en inventario activo</li>
              <li>Proceso ágil y acompañamiento hasta el cierre</li>
            </ul>
            <button class="btn-primary" onclick="navTo('nosotros')" style="margin-top:0.5rem;">Conoce al equipo →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- ZONAS -->
    <section style="background:white;">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Cobertura</p>
          <h2 class="section-title">Zonas principales</h2>
          <p class="section-sub">Trabajamos en los municipios y colonias con mayor demanda inmobiliaria de Nuevo León.</p>
        </div>
        <div class="zonas-list">
          <a class="zona-chip" onclick="navTo('propiedades')">San Pedro Garza García</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Monterrey Centro</a>
          <a class="zona-chip" onclick="navTo('propiedades')">San Nicolás de los Garza</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Guadalupe</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Santa Catarina</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Apodaca</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Escobedo</a>
          <a class="zona-chip" onclick="navTo('propiedades')">San Agustín</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Valle Oriente</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Cumbres</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Del Valle</a>
          <a class="zona-chip" onclick="navTo('propiedades')">Mitras</a>
        </div>
      </div>
    </section>

    <!-- CTA VALUACION -->
    <section style="padding:4rem 0;">
      <div class="cta-valuacion">
        <h2>¿Quieres saber cuánto vale tu propiedad?</h2>
        <p>Obtén una valuación profesional gratuita de tu inmueble en Nuevo León. Sin compromiso, sin costo.</p>
        <div class="cta-actions">
          <button class="btn-white" onclick="navTo('valuacion')">Solicitar valuación gratuita</button>
          <a class="btn-wa-nav" href="https://wa.me/528110000000" target="_blank" style="border-radius:10px;padding:0.85rem 1.5rem;font-size:15px;">💬 Contactar por WhatsApp</a>
        </div>
      </div>
    </section>
  </div>

  <!-- FOOTER -->
  <footer>
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <div class="logo-mark">RN</div>
          <div class="logo-text">
            <span class="logo-name">Rednorte</span>
            <span class="logo-sub">Inmobiliaria</span>
          </div>
        </div>
        <p class="footer-desc">Especialistas en venta, renta e inversión inmobiliaria en Monterrey y Nuevo León. Conectamos propiedades con decisiones inteligentes.</p>
        <p class="footer-address">📍 Av. José Vasconcelos Ote. 215, Local 7<br>Residencial San Agustín 1er Sector<br>San Pedro Garza García, N.L. 66260</p>
        <div class="footer-social">
          <a class="social-btn" href="#" title="Facebook">f</a>
          <a class="social-btn" href="#" title="Instagram">in</a>
          <a class="social-btn" href="#" title="LinkedIn">Li</a>
          <a class="social-btn" href="https://wa.me/528110000000" title="WhatsApp">W</a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Propiedades</h4>
        <ul class="footer-links">
          <li><a onclick="navTo('propiedades')">Casas en venta</a></li>
          <li><a onclick="navTo('propiedades')">Departamentos</a></li>
          <li><a onclick="navTo('propiedades')">Casas en renta</a></li>
          <li><a onclick="navTo('propiedades')">Comercial</a></li>
          <li><a onclick="navTo('propiedades')">Industrial</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Servicios</h4>
        <ul class="footer-links">
          <li><a onclick="navTo('servicios')">Venta</a></li>
          <li><a onclick="navTo('servicios')">Renta</a></li>
          <li><a onclick="navTo('valuacion')">Valuación gratuita</a></li>
          <li><a onclick="navTo('servicios')">Inversión</a></li>
          <li><a onclick="navTo('nosotros')">Nosotros</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contacto</h4>
        <ul class="footer-links">
          <li><a href="tel:+528110000000">📞 (811) 000-0000</a></li>
          <li><a href="https://wa.me/528110000000" target="_blank">💬 WhatsApp</a></li>
          <li><a onclick="navTo('contacto')">Formulario de contacto</a></li>
        </ul>
        <h4 style="margin-top:1.25rem;">Horario</h4>
        <ul class="footer-links">
          <li><a>Lun–Vie: 9:00 – 18:00</a></li>
          <li><a>Sáb: 10:00 – 14:00</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom" style="border-top:1px solid rgba(255,255,255,0.08);max-width:1200px;margin:0 auto;padding:1.25rem 2rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
      <p style="font-size:12px;color:rgba(255,255,255,0.4);">© 2024 Rednorte Inmobiliaria. Todos los derechos reservados.</p>
      <div style="display:flex;gap:1.25rem;">
        <a style="font-size:12px;color:rgba(255,255,255,0.4);text-decoration:none;cursor:pointer;" onclick="navTo('aviso')">Aviso de privacidad</a>
        <a style="font-size:12px;color:rgba(255,255,255,0.4);text-decoration:none;cursor:pointer;" onclick="navTo('aviso')">Términos y condiciones</a>
        <a style="font-size:12px;color:rgba(255,255,255,0.4);text-decoration:none;cursor:pointer;" onclick="navTo('aviso')">Política de cookies</a>
      </div>
    </div>
  </footer>
</div>

<!-- ===== PROPIEDADES ===== -->
<div class="page" id="page-propiedades">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <span>Propiedades</span>
      </div>
    </div>
    <div class="crm-indicator" style="margin:1rem 2rem 0;">
      <span class="crm-dot"></span> Inventario actualizado desde CRM &nbsp;·&nbsp; Última sincronización: hace 3 min
    </div>
    <div class="propiedades-layout">
      <!-- FILTERS -->
      <aside class="filters-panel">
        <h3>🔍 Filtrar propiedades</h3>
        <div class="filter-group">
          <label>Operación</label>
          <select><option>Venta y renta</option><option>Venta</option><option>Renta</option></select>
        </div>
        <div class="filter-group">
          <label>Tipo de propiedad</label>
          <select><option>Todos</option><option>Casa</option><option>Departamento</option><option>Local comercial</option><option>Bodega industrial</option><option>Terreno</option><option>Oficina</option></select>
        </div>
        <div class="filter-group">
          <label>Categoría</label>
          <select><option>Todas</option><option>Residencial</option><option>Comercial</option><option>Industrial</option></select>
        </div>
        <div class="filter-group">
          <label>Municipio / Zona</label>
          <select><option>Todos</option><option>San Pedro Garza García</option><option>Monterrey</option><option>San Nicolás</option><option>Guadalupe</option><option>Santa Catarina</option><option>Apodaca</option></select>
        </div>
        <div class="filter-group">
          <label>Precio</label>
          <div class="price-range">
            <input type="text" placeholder="Mínimo">
            <input type="text" placeholder="Máximo">
          </div>
        </div>
        <div class="filter-group">
          <label>Recámaras mínimas</label>
          <select><option>Cualquiera</option><option>1+</option><option>2+</option><option>3+</option><option>4+</option></select>
        </div>
        <div class="filter-group">
          <label>Baños mínimos</label>
          <select><option>Cualquiera</option><option>1+</option><option>2+</option><option>3+</option></select>
        </div>
        <div class="filter-group">
          <label>Superficie (m²)</label>
          <div class="price-range">
            <input type="text" placeholder="Mín m²">
            <input type="text" placeholder="Máx m²">
          </div>
        </div>
        <button class="btn-search" style="margin-top:0.5rem;" onclick="">Aplicar filtros</button>
        <button class="btn-clear-filters">✕ Limpiar filtros</button>
      </aside>

      <!-- RESULTS -->
      <div>
        <div class="props-header">
          <div class="props-count"><strong>48 propiedades</strong> encontradas</div>
          <div class="props-sort">
            <label>Ordenar:</label>
            <select><option>Más recientes</option><option>Precio: menor a mayor</option><option>Precio: mayor a menor</option></select>
          </div>
        </div>
        <div class="props-grid" id="all-props"></div>
        <div class="pagination">
          <button class="pag-btn">‹</button>
          <button class="pag-btn active">1</button>
          <button class="pag-btn">2</button>
          <button class="pag-btn">3</button>
          <button class="pag-btn">4</button>
          <button class="pag-btn">›</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== FICHA PROPIEDAD ===== -->
<div class="page" id="page-ficha">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <a onclick="navTo('propiedades')">Propiedades</a>
        <span>›</span>
        <span>Casa en San Pedro Garza García</span>
      </div>
    </div>
    <div class="prop-detail">
      <div class="prop-detail-grid">
        <div>
          <!-- GALERÍA -->
          <div class="gallery" id="ficha-gallery"><div class="gallery-placeholder">🏡</div></div>
          <div class="gallery-thumbs" id="ficha-thumbs"></div>
          <!-- INFO -->
          <div class="prop-info" style="margin-top:2rem;">
            <div class="prop-detail-badge">🏠 Casa en Venta</div>
            <h1 class="prop-detail-title">Casa residencial en San Pedro Garza García</h1>
            <p class="prop-detail-code">📋 Referencia CRM: <strong>RN-1482</strong> &nbsp;·&nbsp; <span class="crm-tag" style="float:none;display:inline-flex;"><span class="crm-dot"></span> Activo en CRM</span></p>
            <div class="prop-detail-price">$6,500,000 MXN</div>
            <p class="prop-detail-price-sub">Precio de venta · Negociable</p>
            <div class="prop-features-grid">
              <div class="prop-feature-item"><div class="prop-feature-val">🛏 4</div><div class="prop-feature-name">Recámaras</div></div>
              <div class="prop-feature-item"><div class="prop-feature-val">🚿 3.5</div><div class="prop-feature-name">Baños</div></div>
              <div class="prop-feature-item"><div class="prop-feature-val">🚗 2</div><div class="prop-feature-name">Estacionamientos</div></div>
              <div class="prop-feature-item"><div class="prop-feature-val">350 m²</div><div class="prop-feature-name">Terreno</div></div>
              <div class="prop-feature-item"><div class="prop-feature-val">280 m²</div><div class="prop-feature-name">Construcción</div></div>
              <div class="prop-feature-item"><div class="prop-feature-val">📍 SPGG</div><div class="prop-feature-name">Municipio</div></div>
            </div>
            <p class="prop-section-title">Descripción</p>
            <p class="prop-description">Hermosa residencia ubicada en una de las zonas más exclusivas de San Pedro Garza García. Cuenta con acabados de lujo, espacios amplios e iluminados, y áreas verdes privadas. La cocina integral con barra de granito y electrodomésticos de acero inoxidable se comunica con una amplia sala-comedor de doble altura. Ideal para familia.</p>
            <p class="prop-section-title">Amenidades</p>
            <div class="amenities-list">
              <span class="amenity-chip">🏊 Alberca</span>
              <span class="amenity-chip">🌿 Jardín</span>
              <span class="amenity-chip">🔒 Seguridad 24h</span>
              <span class="amenity-chip">🏋️ Cuarto de servicio</span>
              <span class="amenity-chip">🌡️ Aire acond.</span>
              <span class="amenity-chip">🔥 Chimenea</span>
            </div>
            <p class="prop-section-title">Ubicación aproximada</p>
            <div class="prop-map">
              <span style="font-size:2rem;">🗺️</span>
              <span>San Pedro Garza García, Nuevo León</span>
              <span style="font-size:11px;color:#3d8a3d;">Mapa integrado con Google Maps</span>
            </div>
            <p class="prop-section-title">Propiedades similares</p>
            <div class="props-grid" id="similar-props" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr));"></div>
          </div>
        </div>

        <!-- SIDEBAR -->
        <div class="prop-sidebar">
          <p style="font-size:11px;font-weight:700;color:var(--gris-medio);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.75rem;">Asesor asignado</p>
          <div class="advisor-card">
            <div class="advisor-avatar">MR</div>
            <div>
              <div class="advisor-name">María Rodríguez</div>
              <div class="advisor-role">Asesora residencial · SPGG</div>
            </div>
          </div>
          <a class="btn-wa-big" href="https://wa.me/528110000000?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20propiedad%20RN-1482." target="_blank">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Escribir a María
          </a>
          <a class="btn-wa-big" href="https://wa.me/528110000000?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20la%20propiedad%20RN-1482." target="_blank" style="background:var(--terracota);margin-bottom:0.75rem;">
            📞 Llamar al asesor
          </a>
          <button class="btn-share">↗ Compartir propiedad</button>
          <div class="share-icons">
            <div class="share-icon share-wa">W</div>
            <div class="share-icon share-fb">f</div>
            <div class="share-icon share-li">in</div>
          </div>
          <div style="border-top:1px solid var(--gris-claro);margin-top:1.25rem;padding-top:1.25rem;">
            <p style="font-size:11px;font-weight:700;color:var(--gris-medio);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.5rem;">Referencia</p>
            <p style="font-size:13px;color:var(--cafe);">Código: <strong>RN-1482</strong></p>
            <p style="font-size:11px;color:var(--gris-medio);margin-top:4px;">Fuente: <span class="crm-tag" style="float:none;display:inline-flex;font-size:9px;padding:2px 6px;"><span class="crm-dot"></span> CRM oficial</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== SERVICIOS ===== -->
<div class="page" id="page-servicios">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <span>Servicios</span>
      </div>
    </div>
    <div class="servicios-page">
      <div class="section-header">
        <p class="section-label">Lo que hacemos</p>
        <h1 class="section-title">Nuestros servicios inmobiliarios</h1>
        <p class="section-sub">Soluciones profesionales para comprar, vender, rentar e invertir en bienes raíces en Nuevo León.</p>
      </div>
      <div class="servicios-grid">
        <div class="servicio-card">
          <div class="servicio-icon-big">🏷️</div>
          <div class="servicio-name">Venta de propiedades</div>
          <div class="servicio-desc">Comercializamos tu propiedad con una estrategia de marketing digital multicanal, valuación profesional y acceso a nuestra amplia red de compradores calificados. Nos encargamos desde la publicación hasta el cierre notarial.</div>
          <button class="btn-contactar" onclick="navTo('contacto')">Contactar asesor →</button>
        </div>
        <div class="servicio-card">
          <div class="servicio-icon-big">🔑</div>
          <div class="servicio-name">Renta de propiedades</div>
          <div class="servicio-desc">Gestionamos la renta de tu inmueble: selección del arrendatario, investigación de referencias, elaboración de contrato, cobro de depósito y seguimiento mensual. Tu propiedad en las mejores manos.</div>
          <button class="btn-contactar" onclick="navTo('contacto')">Contactar asesor →</button>
        </div>
        <div class="servicio-card">
          <div class="servicio-icon-big">🏬</div>
          <div class="servicio-name">Propiedades comerciales</div>
          <div class="servicio-desc">Locales en planta baja, pisos de oficinas, plazas y espacios mixtos en ubicaciones estratégicas de los principales municipios. Asesoría para negocios en crecimiento.</div>
          <button class="btn-contactar" onclick="navTo('contacto')">Contactar asesor →</button>
        </div>
        <div class="servicio-card">
          <div class="servicio-icon-big">🏭</div>
          <div class="servicio-name">Propiedades industriales</div>
          <div class="servicio-desc">Naves industriales, bodegas, parques logísticos y terrenos industriales en los principales corredores de Nuevo León, incluyendo Apodaca, Escobedo, Santa Catarina y Santiago.</div>
          <button class="btn-contactar" onclick="navTo('contacto')">Contactar asesor →</button>
        </div>
        <div class="servicio-card">
          <div class="servicio-icon-big">📋</div>
          <div class="servicio-name">Valuación gratuita</div>
          <div class="servicio-desc">Conoce el valor real de mercado de tu inmueble sin costo. Nuestros asesores realizan un análisis comparativo de mercado y te entregan un reporte profesional en menos de 48 horas.</div>
          <button class="btn-contactar" onclick="navTo('valuacion')">Solicitar ahora →</button>
        </div>
        <div class="servicio-card">
          <div class="servicio-icon-big">📊</div>
          <div class="servicio-name">Asesoría para inversionistas</div>
          <div class="servicio-desc">Análisis de mercado, identificación de oportunidades con alto rendimiento, estrategias de diversificación de portafolio y acompañamiento en la toma de decisiones de inversión inmobiliaria.</div>
          <button class="btn-contactar" onclick="navTo('contacto')">Contactar asesor →</button>
        </div>
      </div>
      <div style="text-align:center;margin-top:3rem;">
        <div class="cta-valuacion" style="margin:0;border-radius:16px;padding:3rem;">
          <h2 style="font-size:1.5rem;">¿Listo para dar el siguiente paso?</h2>
          <p>Nuestros asesores están disponibles para atenderte de lunes a viernes de 9:00 a 18:00 h.</p>
          <div class="cta-actions">
            <button class="btn-white" onclick="navTo('contacto')">Contactar ahora</button>
            <a class="btn-wa-nav" href="https://wa.me/528110000000" target="_blank" style="border-radius:10px;padding:0.85rem 1.5rem;font-size:14px;">💬 WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== VALUACIÓN ===== -->
<div class="page" id="page-valuacion">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <span>Valuación gratuita</span>
      </div>
    </div>
    <div class="valuacion-page">
      <div class="section-header">
        <p class="section-label">Sin costo · Sin compromiso</p>
        <h1 class="section-title">Valuación gratuita de tu propiedad</h1>
        <p class="section-sub">Conoce el valor real de mercado de tu inmueble. Completa el formulario y uno de nuestros expertos te contactará en menos de 24 horas.</p>
      </div>
      <div class="valuacion-grid">
        <div class="form-card">
          <h3>📋 Datos de tu propiedad</h3>
          <div class="form-row">
            <div class="form-group"><label>Nombre completo *</label><input type="text" placeholder="Tu nombre"></div>
            <div class="form-group"><label>Teléfono *</label><input type="tel" placeholder="+52 (81) 0000-0000"></div>
          </div>
          <div class="form-group"><label>Correo electrónico *</label><input type="email" placeholder="correo@ejemplo.com"></div>
          <div class="form-row">
            <div class="form-group"><label>Tipo de propiedad *</label>
              <select><option>Seleccionar</option><option>Casa</option><option>Departamento</option><option>Terreno</option><option>Local comercial</option><option>Bodega</option></select>
            </div>
            <div class="form-group"><label>Objetivo *</label>
              <select><option>Venta</option><option>Renta</option></select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Municipio / Zona *</label>
              <select><option>Seleccionar</option><option>San Pedro Garza García</option><option>Monterrey</option><option>San Nicolás</option><option>Guadalupe</option><option>Santa Catarina</option></select>
            </div>
            <div class="form-group"><label>Dirección aproximada</label><input type="text" placeholder="Colonia o calle"></div>
          </div>
          <div class="form-row">
            <div class="form-group"><label>Metros de terreno (m²)</label><input type="number" placeholder="ej. 300"></div>
            <div class="form-group"><label>Metros de construcción (m²)</label><input type="number" placeholder="ej. 220"></div>
          </div>
          <div class="form-group"><label>Comentarios adicionales</label><textarea rows="3" placeholder="Características relevantes, estado del inmueble, urgencia..."></textarea></div>
          <div class="form-check">
            <input type="checkbox" id="privacidad">
            <label for="privacidad">Acepto el <a onclick="navTo('aviso')" style="color:var(--terracota);cursor:pointer;">Aviso de Privacidad</a> y consiento que Rednorte contacte mis datos para este trámite.</label>
          </div>
          <button class="btn-primary-full" onclick="openModal('successModal')">📋 Solicitar valuación gratuita</button>
          <a class="btn-wa-full" href="https://wa.me/528110000000?text=Hola%2C%20quiero%20solicitar%20una%20valuaci%C3%B3n%20gratuita%20de%20mi%20propiedad." target="_blank">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Continuar por WhatsApp
          </a>
        </div>
        <div class="valuacion-info">
          <h3>¿Cómo funciona?</h3>
          <div class="proceso-steps">
            <div class="paso"><div class="paso-num">1</div><div class="paso-text"><h4>Envía tu solicitud</h4><p>Completa el formulario con los datos básicos de tu propiedad.</p></div></div>
            <div class="paso"><div class="paso-num">2</div><div class="paso-text"><h4>Te contactamos</h4><p>Un asesor especializado te contactará en menos de 24 horas.</p></div></div>
            <div class="paso"><div class="paso-num">3</div><div class="paso-text"><h4>Análisis de mercado</h4><p>Realizamos un análisis comparativo de propiedades similares en la zona.</p></div></div>
            <div class="paso"><div class="paso-num">4</div><div class="paso-text"><h4>Recibes tu reporte</h4><p>Te entregamos un reporte profesional con el valor estimado de mercado.</p></div></div>
          </div>
          <div class="valuacion-cta-box">
            <h4>¿Prefieres hablar directamente?</h4>
            <p>Nuestros asesores están disponibles en WhatsApp de lunes a sábado.</p>
            <a class="btn-wa-full" href="https://wa.me/528110000000?text=Hola%2C%20quiero%20una%20valuaci%C3%B3n%20gratuita." target="_blank">💬 Escribir ahora</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== NOSOTROS ===== -->
<div class="page" id="page-nosotros">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <span>Nosotros</span>
      </div>
    </div>
    <div class="nosotros-page">
      <div class="nosotros-hero-img">🏙️</div>
      <p class="section-label">Quiénes somos</p>
      <h1 class="section-title">Rednorte Inmobiliaria</h1>
      <p style="font-size:1rem;color:var(--cafe);line-height:1.8;max-width:700px;margin-bottom:2rem;">Somos una empresa inmobiliaria con más de 15 años de presencia en el mercado de Nuevo León. Nació con el propósito de conectar a las personas con el inmueble correcto, en el momento indicado y al precio justo. Hoy somos uno de los equipos de confianza en la región para compra, venta, renta e inversión de propiedades residenciales, comerciales e industriales.</p>
      <div class="stats-row">
        <div class="stat-box"><div class="stat-num">15+</div><div class="stat-label">Años de experiencia</div></div>
        <div class="stat-box"><div class="stat-num">+500</div><div class="stat-label">Propiedades en inventario</div></div>
        <div class="stat-box"><div class="stat-num">12</div><div class="stat-label">Municipios con cobertura</div></div>
        <div class="stat-box"><div class="stat-num">3</div><div class="stat-label">Tipos de mercado: Res. Com. Ind.</div></div>
      </div>
      <h2 class="section-title" style="font-size:1.3rem;margin-bottom:1.25rem;">Nuestros diferenciadores</h2>
      <div class="diferenciadores">
        <div class="dif-item"><div class="dif-title">Inventario propio y actualizado</div><div class="dif-desc">Más de 500 propiedades activas sincronizadas directamente desde nuestro CRM en tiempo real.</div></div>
        <div class="dif-item"><div class="dif-title">Cobertura total en NL</div><div class="dif-desc">Presencia activa en los 12 municipios con mayor demanda inmobiliaria de Nuevo León.</div></div>
        <div class="dif-item"><div class="dif-title">Asesores especializados</div><div class="dif-desc">Cada asesor tiene conocimiento profundo de la zona y el tipo de propiedad que maneja.</div></div>
        <div class="dif-item"><div class="dif-title">Análisis de mercado propio</div><div class="dif-desc">Valuaciones sustentadas en datos reales, no en estimaciones genéricas o fórmulas automáticas.</div></div>
      </div>
      <div class="mision-box">
        <h3>Nuestra misión</h3>
        <p>Conectar propiedades con decisiones inteligentes. Acompañamos a nuestros clientes con información honesta, asesoría profesional y una red inmobiliaria sólida, para que cada decisión de compra, venta o inversión sea la correcta.</p>
      </div>
      <h2 class="section-title" style="font-size:1.3rem;margin:2rem 0 1rem;">Nuestro equipo</h2>
      <div class="equipo-placeholder">
        <div style="font-size:3rem;">👥</div>
        <p>Fotografía del equipo — <em>contenido editable desde CMS</em></p>
      </div>
      <div style="text-align:center;">
        <button class="btn-contactar-nos" onclick="navTo('contacto')">Contacta al equipo →</button>
      </div>
    </div>
  </div>
</div>

<!-- ===== CONTACTO ===== -->
<div class="page" id="page-contacto">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <span>Contacto</span>
      </div>
    </div>
    <div class="contacto-page">
      <div class="section-header">
        <p class="section-label">Estamos para ayudarte</p>
        <h1 class="section-title">Contáctanos</h1>
        <p class="section-sub">Cuéntanos en qué podemos ayudarte. Respondemos en menos de 2 horas en horario de oficina.</p>
      </div>
      <div class="contacto-grid">
        <div class="form-card">
          <h3 style="font-size:14px;font-weight:700;color:var(--gris-medio);text-transform:uppercase;letter-spacing:1px;margin-bottom:0.75rem;">Motivo de contacto</h3>
          <div class="motivos">
            <button class="motivo-btn active">Quiero comprar</button>
            <button class="motivo-btn" onclick="setMotivo(this)">Quiero vender</button>
            <button class="motivo-btn" onclick="setMotivo(this)">Quiero rentar</button>
            <button class="motivo-btn" onclick="setMotivo(this)">Ofrecer en renta</button>
            <button class="motivo-btn" onclick="setMotivo(this)">Valuación</button>
            <button class="motivo-btn" onclick="setMotivo(this)">Quiero invertir</button>
            <button class="motivo-btn" onclick="setMotivo(this)">Info propiedad</button>
          </div>
          <div class="form-row" style="margin-top:1.25rem;">
            <div class="form-group"><label>Nombre *</label><input type="text" placeholder="Tu nombre completo"></div>
            <div class="form-group"><label>Teléfono *</label><input type="tel" placeholder="+52 (81)"></div>
          </div>
          <div class="form-group"><label>Correo electrónico *</label><input type="email" placeholder="correo@ejemplo.com"></div>
          <div class="form-group"><label>Mensaje</label><textarea rows="4" placeholder="Cuéntanos más sobre lo que necesitas..."></textarea></div>
          <div class="form-check">
            <input type="checkbox" id="priv2">
            <label for="priv2">Acepto el <a onclick="navTo('aviso')" style="color:var(--terracota);cursor:pointer;">Aviso de Privacidad</a>.</label>
          </div>
          <button class="btn-primary-full" onclick="openModal('successModal')">Enviar mensaje</button>
          <a class="btn-wa-full" href="https://wa.me/528110000000" target="_blank">💬 Continuar por WhatsApp</a>
        </div>
        <div class="contacto-info">
          <div class="info-card">
            <h4>Información de contacto</h4>
            <div class="info-item"><div class="info-icon">📞</div><div class="info-text"><span class="info-label">Teléfono</span>(811) 000-0000</div></div>
            <div class="info-item"><div class="info-icon">💬</div><div class="info-text"><span class="info-label">WhatsApp</span><a href="https://wa.me/528110000000" style="color:var(--terracota);">+52 (811) 000-0000</a></div></div>
            <div class="info-item"><div class="info-icon">📍</div><div class="info-text"><span class="info-label">Dirección</span>Av. José Vasconcelos Ote. 215, Local 7, Residencial San Agustín 1er Sector, San Pedro Garza García, N.L. 66260</div></div>
            <div class="info-item"><div class="info-icon">🕐</div><div class="info-text"><span class="info-label">Horario</span>Lun–Vie: 9:00 – 18:00 h<br>Sáb: 10:00 – 14:00 h</div></div>
          </div>
          <div class="info-card">
            <h4>Ubicación</h4>
            <div class="map-embed" onclick="window.open('https://maps.google.com/?q=Av.+Vasconcelos+215+San+Pedro+Garza+Garcia','_blank')">
              <span style="font-size:2rem;">🗺️</span>
              <span>Abrir en Google Maps</span>
              <span style="font-size:11px;color:#3d8a3d;">San Pedro Garza García, N.L.</span>
            </div>
            <button class="btn-como-llegar" onclick="window.open('https://maps.google.com/?q=Av.+Vasconcelos+215+San+Pedro+Garza+Garcia','_blank')">📍 Cómo llegar</button>
          </div>
          <div class="info-card">
            <h4>Redes sociales</h4>
            <div class="redes-row">
              <div class="red-btn" style="border-color:#3b5998;color:#3b5998;background:#f0f4ff;">Facebook</div>
              <div class="red-btn" style="border-color:#e1306c;color:#e1306c;background:#fff0f5;">Instagram</div>
              <div class="red-btn" style="border-color:#0077b5;color:#0077b5;background:#f0f7ff;">LinkedIn</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== AVISO ===== -->
<div class="page" id="page-aviso">
  <div class="page-content">
    <div class="breadcrumb">
      <div class="breadcrumb-inner">
        <a onclick="navTo('inicio')">Inicio</a>
        <span>›</span>
        <span>Aviso de privacidad</span>
      </div>
    </div>
    <div class="legal-page">
      <h1>Aviso de Privacidad</h1>
      <p class="legal-date">Última actualización: enero 2024</p>
      <div class="legal-section">
        <h2>Responsable del tratamiento de datos</h2>
        <p>Rednorte Inmobiliaria, con domicilio en Av. José Vasconcelos Ote. 215, Local 7, Residencial San Agustín 1er Sector, San Pedro Garza García, Nuevo León, C.P. 66260, es responsable del uso y protección de sus datos personales.</p>
      </div>
      <div class="legal-section">
        <h2>Datos personales recabados</h2>
        <ul>
          <li>Nombre completo</li>
          <li>Teléfono y correo electrónico</li>
          <li>Información sobre inmuebles de interés</li>
          <li>Datos de navegación y uso del sitio web</li>
        </ul>
      </div>
      <div class="legal-section">
        <h2>Finalidades del tratamiento</h2>
        <p>Sus datos son utilizados para: atender solicitudes de información, valuación o contacto; enviar comunicaciones relacionadas con propiedades; mejorar nuestros servicios y cumplir con obligaciones legales aplicables.</p>
      </div>
      <div class="legal-section">
        <h2>Política de Cookies</h2>
        <p>Este sitio usa cookies para mejorar la experiencia de navegación y analizar el tráfico. Puede configurar su navegador para rechazarlas, aunque algunas funciones del sitio podrían verse afectadas.</p>
      </div>
      <div class="legal-section">
        <h2>Derechos ARCO</h2>
        <p>Usted puede ejercer sus derechos de Acceso, Rectificación, Cancelación y Oposición enviando un correo a privacidad@rednorte.mx</p>
      </div>
    </div>
  </div>
</div>

<!-- ===== 404 ===== -->
<div class="page" id="page-404">
  <div class="page-content">
    <div class="not-found">
      <div class="not-found-inner">
        <div class="not-found-num">404</div>
        <h1 class="not-found-title">Página no encontrada</h1>
        <p class="not-found-desc">Lo sentimos, la página que buscas no existe o fue movida. Puede que la propiedad ya no esté disponible.</p>
        <button class="btn-primary" onclick="navTo('inicio')" style="margin-right:0.75rem;">← Ir al inicio</button>
        <button class="btn-outline-white" onclick="navTo('propiedades')" style="color:var(--cafe);border-color:var(--gris-claro);">Ver propiedades</button>
      </div>
    </div>
  </div>
</div>

<!-- ===== JAVASCRIPT ===== -->
<script>
// ============================================================
// DATOS DE PROPIEDADES — AGREGA TUS FOTOS AQUÍ
// ------------------------------------------------------------
// Cada propiedad tiene un array "imgs" con rutas de imágenes.
// Estructura de carpetas recomendada junto al HTML:
//
//   fotos/
//     RN-1482/   ← una carpeta por propiedad (usa el código CRM)
//       foto1.jpg
//       foto2.jpg
//       foto3.jpg
//     RN-2034/
//       foto1.jpg
//       ...
//
// En cada propiedad escribe las rutas en el array "imgs".
// Si una propiedad aún no tiene fotos, deja imgs:[] y se
// mostrará el ícono automáticamente.
// ============================================================
const properties = [
  {
    id:'RN-1482', title:'Casa residencial', type:'Casa', op:'Venta',
    zone:'San Pedro Garza García', price:'$6,500,000',
    rooms:4, baths:3.5, parking:2, icon:'🏡',
    imgs:[
      /* 'fotos/RN-1482/foto1.jpg', */
      /* 'fotos/RN-1482/foto2.jpg', */
      /* 'fotos/RN-1482/foto3.jpg', */
    ]
  },
  {
    id:'RN-2034', title:'Departamento moderno', type:'Depto', op:'Renta',
    zone:'Valle Oriente, Monterrey', price:'$18,000/mes',
    rooms:2, baths:2, parking:1, icon:'🏢',
    imgs:[
      /* 'fotos/RN-2034/foto1.jpg', */
      /* 'fotos/RN-2034/foto2.jpg', */
    ]
  },
  {
    id:'RN-0891', title:'Casa en coto privado', type:'Casa', op:'Venta',
    zone:'Cumbres, Monterrey', price:'$4,200,000',
    rooms:3, baths:2.5, parking:2, icon:'🏠',
    imgs:[
      /* 'fotos/RN-0891/foto1.jpg', */
    ]
  },
  {
    id:'RN-3310', title:'Local comercial PB', type:'Local', op:'Renta',
    zone:'San Nicolás de los Garza', price:'$22,000/mes',
    rooms:0, baths:1, parking:3, icon:'🏬',
    imgs:[]
  },
  {
    id:'RN-1755', title:'Bodega industrial', type:'Bodega', op:'Venta',
    zone:'Apodaca, N.L.', price:'$12,000,000',
    rooms:0, baths:2, parking:10, icon:'🏭',
    imgs:[]
  },
  {
    id:'RN-2298', title:'Departamento de lujo', type:'Depto', op:'Venta',
    zone:'San Pedro Garza García', price:'$9,800,000',
    rooms:3, baths:3, parking:2, icon:'🏙️',
    imgs:[]
  },
];

// ---- CARRUSEL EN TARJETAS ----
function cardCarousel(p) {
  const hasImgs = p.imgs && p.imgs.length > 0;
  if (!hasImgs) {
    return `<div class="card-carousel">
      <div style="height:100%;display:flex;align-items:center;justify-content:center;font-size:2.8rem;color:var(--gris-medio);">${p.icon}</div>
    </div>`;
  }
  const slides = p.imgs.map(src =>
    `<div class="card-carousel-slide"><img src="${src}" alt="${p.title}" loading="lazy" onerror="this.parentElement.innerHTML='<span style=font-size:2.5rem>${p.icon}</span>'"></div>`
  ).join('');
  const dots = p.imgs.length > 1
    ? `<div class="card-carousel-dots">${p.imgs.map((_,i)=>`<div class="card-dot${i===0?' active':''}" data-i="${i}"></div>`).join('')}</div>`
    : '';
  const btns = p.imgs.length > 1
    ? `<button class="card-carousel-btn prev" onclick="cardPrev(event,this)">‹</button>
       <button class="card-carousel-btn next" onclick="cardNext(event,this)">›</button>`
    : '';
  return `<div class="card-carousel" data-idx="0" data-total="${p.imgs.length}">
    <div class="card-carousel-track">${slides}</div>
    ${dots}${btns}
  </div>`;
}

function cardSlide(carousel, dir) {
  const total = parseInt(carousel.dataset.total);
  let idx = parseInt(carousel.dataset.idx) + dir;
  if (idx < 0) idx = total - 1;
  if (idx >= total) idx = 0;
  carousel.dataset.idx = idx;
  carousel.querySelector('.card-carousel-track').style.transform = `translateX(-${idx*100}%)`;
  carousel.querySelectorAll('.card-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
}
function cardPrev(e, btn) { e.stopPropagation(); cardSlide(btn.closest('.card-carousel'), -1); }
function cardNext(e, btn) { e.stopPropagation(); cardSlide(btn.closest('.card-carousel'),  1); }

// ---- TARJETA DE PROPIEDAD ----
function propCard(p, onclick_) {
  const isRenta = p.op === 'Renta';
  const feats = p.rooms > 0
    ? `<div class="prop-feat"><span>🛏</span>${p.rooms} rec</div>
       <div class="prop-feat"><span>🚿</span>${p.baths} baños</div>
       <div class="prop-feat"><span>🚗</span>${p.parking} est</div>`
    : `<div class="prop-feat"><span>🚗</span>${p.parking} cajones</div>`;
  return `<div class="prop-card" onclick="${onclick_}" style="overflow:hidden;">
    <div class="prop-img" style="padding:0;height:auto;background:none;position:relative;">
      ${cardCarousel(p)}
      <span class="prop-badge${isRenta?' renta':''}" style="position:absolute;top:12px;left:12px;">${p.op}</span>
      <span class="prop-code" style="position:absolute;bottom:12px;right:12px;">${p.id}</span>
    </div>
    <div class="prop-body">
      <div class="prop-price">${p.price}</div>
      <div class="prop-price-label">${isRenta?'Precio mensual':'Precio de venta'} · ${p.type}</div>
      <div class="prop-title">${p.title}</div>
      <div class="prop-location">📍 ${p.zone}</div>
      <div class="prop-features">${feats}</div>
    </div>
  </div>`;
}

// ---- GALERÍA FICHA INDIVIDUAL ----
let fichaImgs = [];
let fichaIdx = 0;

function openFicha(propId) {
  const p = properties.find(x => x.id === propId) || properties[0];
  fichaImgs = (p.imgs && p.imgs.length > 0) ? p.imgs : [];
  fichaIdx = 0;
  renderFichaGallery(p);
  navTo('ficha');
}

function renderFichaGallery(p) {
  const galleryEl = document.getElementById('ficha-gallery');
  const thumbsEl  = document.getElementById('ficha-thumbs');
  if (!galleryEl || !thumbsEl) return;

  if (fichaImgs.length === 0) {
    galleryEl.innerHTML = `<div class="gallery-placeholder">${p ? p.icon : '🏡'}</div>`;
    thumbsEl.innerHTML = '';
    return;
  }

  // Imagen principal
  galleryEl.innerHTML = `
    <img id="ficha-main-img" class="gallery-main-img" src="${fichaImgs[0]}" alt="Foto propiedad"
         onerror="this.src='';this.style.display='none';document.getElementById('ficha-fallback').style.display='flex'">
    <div id="ficha-fallback" class="gallery-placeholder" style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;">${p ? p.icon : '🏡'}</div>
    ${fichaImgs.length > 1 ? `
    <button class="gallery-nav prev" onclick="fichaNav(-1)">‹</button>
    <button class="gallery-nav next" onclick="fichaNav(1)">›</button>
    <span class="gallery-counter" id="ficha-counter">1 / ${fichaImgs.length}</span>` : ''}
  `;

  // Miniaturas (máx 8 visibles)
  const show = fichaImgs.slice(0, 8);
  thumbsEl.innerHTML = show.map((src, i) =>
    `<div class="gallery-thumb${i===0?' active':''}" onclick="fichaGoto(${i})" id="thumb-${i}">
      <img src="${src}" alt="Foto ${i+1}" loading="lazy"
           onerror="this.parentElement.innerHTML='<span style=font-size:1.1rem>🖼️</span>'">
    </div>`
  ).join('');
}

function fichaNav(dir) {
  fichaIdx = (fichaIdx + dir + fichaImgs.length) % fichaImgs.length;
  fichaGoto(fichaIdx);
}

function fichaGoto(i) {
  fichaIdx = i;
  const img = document.getElementById('ficha-main-img');
  const counter = document.getElementById('ficha-counter');
  const fallback = document.getElementById('ficha-fallback');
  if (img) {
    img.style.opacity = '0';
    setTimeout(() => { img.src = fichaImgs[i]; img.style.opacity = '1'; img.style.display = ''; if(fallback) fallback.style.display='none'; }, 150);
  }
  if (counter) counter.textContent = `${i+1} / ${fichaImgs.length}`;
  document.querySelectorAll('.gallery-thumb').forEach((t,j) => t.classList.toggle('active', j===i));
}

function renderProps(containerId, count) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = properties.slice(0, count).map(p => propCard(p, `openFicha('${p.id}')`)).join('');
}

// ---- NAV ----
const pages = ['inicio','propiedades','ficha','servicios','valuacion','nosotros','contacto','aviso','404'];
const navItems = ['inicio','propiedades','servicios','nosotros','contacto'];

function navTo(page) {
  pages.forEach(p => {
    const el = document.getElementById('page-'+p);
    if (el) el.classList.toggle('active', p===page);
  });
  navItems.forEach(n => {
    const el = document.getElementById('nav-'+n);
    if (el) el.classList.toggle('active', n===page);
  });
  window.scrollTo({top:0,behavior:'smooth'});
  if (page==='propiedades') renderProps('all-props', 6);
  if (page==='ficha') renderProps('similar-props', 3);
}

// ---- INIT ----
renderProps('featured-props', 3);
renderProps('all-props', 6);

// ---- SEARCH TABS ----
function setSearchTab(el, val) {
  document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

// ---- MOTIVO ----
function setMotivo(el) {
  document.querySelectorAll('.motivo-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ---- MOBILE MENU ----
function toggleMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ---- MODALS ----
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }

// ---- COOKIES ----
function closeCookies() {
  document.getElementById('cookieBanner').style.display='none';
}

// Close modals on overlay click
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if(e.target===m) m.classList.remove('open'); });
});
</script>
</body>
</html>
