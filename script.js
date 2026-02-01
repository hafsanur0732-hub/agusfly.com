:root{
  --bg:#0b0f14;
  --card:#121a24;
  --muted:#93a4b7;
  --text:#e7eef7;
  --brand:#3ee6b6;
  --brand2:#5aa7ff;
  --border: rgba(255,255,255,.08);
}

*{ box-sizing:border-box; margin:0; padding:0; }
body{
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
  background: radial-gradient(1200px 600px at 20% 0%, rgba(90,167,255,.18), transparent 60%),
              radial-gradient(900px 600px at 80% 10%, rgba(62,230,182,.14), transparent 55%),
              var(--bg);
  color:var(--text);
  line-height:1.6;
}

a{ color:inherit; text-decoration:none; }
.container{ width:min(1100px, 92%); margin-inline:auto; }

.header{
  position:sticky; top:0; z-index:50;
  backdrop-filter: blur(10px);
  background: rgba(11,15,20,.55);
  border-bottom: 1px solid var(--border);
}
.header__inner{
  display:flex; align-items:center; justify-content:space-between;
  padding:14px 0;
}
.logo{ font-weight:800; letter-spacing:.6px; }
.nav{ display:flex; gap:18px; }
.nav a{
  color:var(--muted);
  padding:8px 10px;
  border-radius:10px;
  transition:.2s;
}
.nav a:hover{ color:var(--text); background: rgba(255,255,255,.06); }

.menuBtn{
  display:none;
  border:1px solid var(--border);
  background: rgba(255,255,255,.04);
  color:var(--text);
  border-radius:10px;
  padding:8px 10px;
  cursor:pointer;
}

.hero{ padding:68px 0 48px; }
.hero__inner{
  display:grid;
  grid-template-columns: 1.2fr .8fr;
  gap:22px;
  align-items:stretch;
}
.hero__text h1{ font-size: clamp(30px, 4vw, 46px); line-height:1.15; }
.hero__text p{ margin-top:10px; color:var(--muted); max-width:58ch; }
.hero__cta{ display:flex; gap:12px; margin-top:18px; flex-wrap:wrap; }

.hero__card{
  border:1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
  border-radius:18px;
  padding:18px;
}
.hero__card h3{ margin-bottom:10px; }
.hero__card ul{ list-style:none; display:grid; gap:10px; color:var(--muted); }

.section{ padding:56px 0; }
.section--alt{
  background: rgba(255,255,255,.02);
  border-top:1px solid var(--border);
  border-bottom:1px solid var(--border);
}
.section__head{
  display:grid;
  gap:10px;
  margin-bottom:18px;
}
.section__head p{ color:var(--muted); max-width:70ch; }

.grid3{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:16px;
}

.card{
  border:1px solid var(--border);
  background: rgba(255,255,255,.03);
  border-radius:16px;
  padding:16px;
}
.card p{ color:var(--muted); margin-top:8px; }

.products{
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  gap:16px;
}
.product{
  position:relative;
  border:1px solid var(--border);
  background: rgba(18,26,36,.55);
  border-radius:18px;
  padding:16px;
  overflow:hidden;
}
.product__badge{
  display:inline-block;
  font-size:12px;
  color:#00140d;
  background: linear-gradient(90deg, var(--brand), var(--brand2));
  padding:4px 10px;
  border-radius:999px;
  font-weight:700;
  margin-bottom:10px;
}
.product p{ color:var(--muted); margin:8px 0 14px; }

.btn{
  display:inline-flex; align-items:center; justify-content:center;
  border:1px solid transparent;
  background: linear-gradient(90deg, var(--brand), var(--brand2));
  color:#061016;
  padding:10px 14px;
  border-radius:12px;
  font-weight:800;
  cursor:pointer;
}
.btn--ghost{
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}
.btn--small{ padding:8px 12px; border-radius:10px; font-weight:800; }

.form{
  border:1px solid var(--border);
  background: rgba(255,255,255,.03);
  border-radius:18px;
  padding:16px;
  max-width: 560px;
}
.form__row{ display:grid; gap:8px; margin-bottom:12px; }
label{ color:var(--muted); font-size:14px; }
input, textarea{
  width:100%;
  border:1px solid var(--border);
  background: rgba(0,0,0,.25);
  color:var(--text);
  border-radius:12px;
  padding:10px 12px;
  outline:none;
}
input:focus, textarea:focus{ border-color: rgba(90,167,255,.55); }

.form__note{ margin-top:10px; color:var(--muted); }

.footer{
  border-top:1px solid var(--border);
  padding:18px 0;
  background: rgba(0,0,0,.25);
}
.footer__inner{
  display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap;
  color:var(--muted);
}
.footer__inner a{ color:var(--text); }

.modal{
  position:fixed; inset:0; display:none;
}
.modal.is-open{ display:block; }
.modal__backdrop{
  position:absolute; inset:0; background: rgba(0,0,0,.55);
}
.modal__content{
  position:relative;
  width:min(520px, 92%);
  margin: 12vh auto 0;
  border:1px solid var(--border);
  background: rgba(18,26,36,.95);
  border-radius:18px;
  padding:18px;
}

@media (max-width: 860px){
  .hero__inner{ grid-template-columns: 1fr; }
  .grid3{ grid-template-columns: 1fr; }
  .products{ grid-template-columns: 1fr; }
  .menuBtn{ display:inline-flex; }
  .nav{
    position:absolute;
    top:60px; right:4%;
    flex-direction:column;
    background: rgba(11,15,20,.92);
    border:1px solid var(--border);
    border-radius:14px;
    padding:10px;
    display:none;
    width:min(240px, 92vw);
  }
  .nav.is-open{ display:flex; }
}
