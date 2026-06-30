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