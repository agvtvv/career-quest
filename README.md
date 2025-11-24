<!doctype html>
<html lang="bg">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Career Quest — Твоята мечтана кариера</title>
  <meta name="description" content="Career Quest помага на младежи да открият правилната специалност и университет чрез персонализирани тестове и професионални консултации." />
  <style>
    /* ====== Palette & base ====== */
    :root{
      --bg:#f5f7fb;
      --card:#ffffff;
      --nav:#092a6b;
      --accent:#1ea3ff;
      --muted:#6b7082;
      --glass: rgba(255,255,255,0.85);
      --shadow: 0 8px 30px rgba(11,24,48,0.08);
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:#0b1222;background:var(--bg);-webkit-font-smoothing:antialiased}
    a{color:inherit;text-decoration:none}
    .container{max-width:1100px;margin:0 auto;padding:20px}

    /* ====== Header / nav ====== */
    header{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 0}
    .brand {display:flex;align-items:center;gap:12px}
    .brand .mark{width:44px;height:44px;border-radius:8px;background:linear-gradient(135deg,var(--nav),#1346b6);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px}
    .brand .title{font-weight:700;font-size:18px}
    nav.desktop{display:flex;gap:18px;align-items:center}
    nav.desktop a{color:var(--nav);font-weight:600}
    .cta-desktop button{background:var(--accent);color:#042339;border:0;padding:8px 14px;border-radius:8px;font-weight:600;cursor:pointer}

    /* ====== Mobile nav (hamburger) ====== */
    .hamburger{display:none;cursor:pointer;width:44px;height:44px;border-radius:8px;background:var(--glass);align-items:center;justify-content:center;border:1px solid rgba(9,42,107,0.06)}
    .hamburger span{display:block;width:18px;height:2px;background:var(--nav);position:relative}
    .hamburger span::before,.hamburger span::after{content:"";position:absolute;left:0;width:18px;height:2px;background:var(--nav)}
    .hamburger span::before{top:-6px}
    .hamburger span::after{top:6px}

    .mobile-menu{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(6,20,50,0.55);display:none;align-items:center;justify-content:center;z-index:40}
    .mobile-menu .panel{background:var(--card);width:90%;max-width:420px;border-radius:12px;padding:20px;box-shadow:var(--shadow)}
    .mobile-menu a{display:block;padding:10px 0;color:var(--nav);font-weight:700;border-bottom:1px solid #f0f3fb}

    /* ====== Top banner (small) ====== */
    .banner{background:linear-gradient(90deg,#061e4f 0%, #113d91 100%);color:#fff;padding:14px;border-radius:12px;box-shadow:var(--shadow);display:flex;align-items:center;justify-content:space-between;gap:12px}
    .banner .left{font-weight:700}
    .banner .right button{background:transparent;color:#fff;border:1px solid rgba(255,255,255,0.14);padding:8px 12px;border-radius:8px;cursor:pointer}

    /* ====== Sections & grid ====== */
    main{margin-top:18px}
    .grid{display:grid;grid-template-columns:1fr 380px;gap:22px}
    .card{background:var(--card);border-radius:12px;padding:18px;box-shadow:var(--shadow)}
    h2{margin:0 0 10px}
    p.muted{color:var(--muted);margin:0 0 12px}

    /* packages list */
    .packages .pkg{border-radius:10px;padding:12px;border:1px solid #eef4ff;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
    .pkg .left strong{display:block}
    .pkg .price{color:var(--nav);font-weight:700}

    /* team */
    .team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .team-card{display:flex;flex-direction:column;gap:8px;align-items:flex-start}

    /* images */
    .img{width:100%;height:160px;object-fit:cover;border-radius:10px}

    /* footer */
    footer{margin-top:28px;padding:20px;text-align:center;color:var(--muted);font-size:14px}

    /* ====== Animations: appear when in view ====== */
    .animate{opacity:0;transform:translateY(18px);transition:opacity .6s ease, transform .6s ease}
    .in-view{opacity:1;transform:none}

    /* ====== Responsive ====== */
    @media (max-width:980px){
      .grid{grid-template-columns:1fr}
      .team-grid{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:640px){
      .team-grid{grid-template-columns:1fr}
      nav.desktop{display:none}
      .hamburger{display:flex}
      .cta-desktop{display:none}
      .banner{flex-direction:column;align-items:flex-start;gap:8px}
    }

    /* small helpers */
    .muted-small{color:var(--muted);font-size:14px}
    .btn {padding:10px 14px;border-radius:8px;border:0;cursor:pointer}
    .btn-outline{background:transparent;border:1px solid rgba(9,42,107,0.08);color:var(--nav)}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="mark">CQ</div>
        <div>
          <div class="title">Career Quest</div>
          <div class="muted-small">Professional guidance for confident applications</div>
        </div>
      </div>

      <nav class="desktop" aria-label="Main navigation">
        <a href="#about">За нас</a>
        <a href="#packages">Пакети</a>
        <a href="#team">Екип</a>
        <a href="#contact">Контакт</a>
        <div class="cta-desktop"><button onclick="location.href='#contact'">Свържи се</button></div>
      </nav>

      <div class="hamburger" id="hamburger" aria-label="Open menu" role="button" tabindex="0">
        <span></span>
      </div>
    </header>

    <!-- Mobile menu -->
    <div class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <div class="panel" role="dialog" aria-modal="true">
        <a href="#about" onclick="closeMobile()">За нас</a>
        <a href="#packages" onclick="closeMobile()">Пакети</a>
        <a href="#team" onclick="closeMobile()">Екип</a>
        <a href="#contact" onclick="closeMobile()">Контакт</a>
        <div style="padding-top:12px;text-align:right"><button class="btn btn-outline" onclick="closeMobile()">Затвори</button></div>
      </div>
    </div>

    <!-- small banner instead of big hero -->
    <div class="banner animate" data-anim>
      <div class="left">Career Quest — Professional career guidance for students</div>
      <div class="right"><button onclick="location.href='#packages'">Разгледай пакетите</button></div>
    </div>

    <main>
      <div class="grid" style="margin-top:18px">
        <div>
          <section id="about" class="card animate" data-anim>
            <h2>За Career Quest</h2>
            <p class="muted">Ние помагаме на младежи да направят правилния избор за специалност и университет чрез персонализирани тестове и професионални консултации.</p>
            <p class="muted-small">Нашият екип комбинира психологически инструменти с реални данни за университети и програми, за да предложи най-подходящите опции за всеки кандидат.</p>
          </section>

          <section id="packages" class="card animate" data-anim style="margin-top:16px">
            <h2>Пакети</h2>
            <div class="packages" style="margin-top:10px">
              <div class="pkg">
                <div class="left">
                  <strong>Starter</strong>
                  <div class="muted-small">Сфокусирано на самооценка и ориентация</div>
                </div>
                <div class="price">59.99 лв</div>
              </div>

              <div class="pkg">
                <div class="left">
                  <strong>Advanced</strong>
                  <div class="muted-small">Умения, приоритети и социални аспекти</div>
                </div>
                <div class="price">199.99 лв</div>
              </div>

              <div class="pkg">
                <div class="left">
                  <strong>Master</strong>
                  <div class="muted-small">Персонална подкрепа и кандидатстване</div>
                </div>
                <div class="price">289.99 лв</div>
              </div>

              <p class="muted-small" style="margin-top:10px">Кликни на пакетите за повече детайли (могат да водят към отделни страници).</p>
            </div>
          </section>

          <section id="team" class="card animate" data-anim style="margin-top:16px">
            <h2>Екип</h2>
            <p class="muted">Професионални кариерни консултанти и психолози с опит в университетското кандидатстване.</p>
            <div class="team-grid" style="margin-top:12px">
              <div class="team-card">
                <img class="img" src="https://picsum.photos/seed/elena/600/400" alt="Елена">
                <strong>Д-р Елена Петрова</strong>
                <div class="muted-small">Кариерен психолог — 10+ години опит</div>
              </div>
              <div class="team-card">
                <img class="img" src="https://picsum.photos/seed/ivan/600/400" alt="Иван">
                <strong>Иван Димитров</strong>
                <div class="muted-small">Консултант по кандидатстване</div>
              </div>
              <div class="team-card">
                <img class="img" src="https://picsum.photos/seed/maria/600/400" alt="Мария">
                <strong>Мария Георгиева</strong>
                <div class="muted-small">Образователен анализатор</div>
              </div>
            </div>
          </section>

          <section id="contact" class="card animate" data-anim style="margin-top:16px">
            <h2>Свържи се с нас</h2>
            <p class="muted">Готов ли си да започнеш? Изпрати заявка и ние ще се свържем с теб.</p>
            <form style="display:grid;gap:8px;max-width:520px">
              <input type="text" placeholder="Име и фамилия" style="padding:12px;border-radius:8px;border:1px solid #e9eef8" />
              <input type="email" placeholder="Имейл" style="padding:12px;border-radius:8px;border:1px solid #e9eef8" />
              <textarea placeholder="Разкажи накратко за целите си" style="padding:12px;border-radius:8px;border:1px solid #e9eef8;min-height:100px"></textarea>
              <div style="display:flex;gap:8px">
                <button class="btn" type="submit" style="background:var(--nav);color:#fff">Изпрати</button>
                <button class="btn btn-outline" type="button" onclick="location.href='#packages'">Виж пакети</button>
              </div>
            </form>
          </section>
        </div>

        <!-- right column -->
        <aside class="card animate" data-anim>
          <h3>Кратко</h3>
          <p class="muted-small">Персонализирани тестове • Ранкинги за университети • Подготовка за кандидатстване</p>
          <img src="https://picsum.photos/seed/office/800/400" class="img" alt="office" style="margin-top:12px"/>
          <div style="margin-top:12px">
            <button class="btn" style="background:var(--accent);border-radius:10px;color:#042339;font-weight:700;padding:10px 14px" onclick="location.href='#contact'">Запази консултация</button>
          </div>
        </aside>
      </div>
    </main>

    <footer>
      © Career Quest — Всички права запазени
    </footer>
  </div>

  <script>
    // Hamburger open/close
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    function closeMobile(){ mobileMenu.style.display='none'; mobileMenu.setAttribute('aria-hidden','true'); }
    function openMobile(){ mobileMenu.style.display='flex'; mobileMenu.setAttribute('aria-hidden','false'); }
    hamburger.addEventListener('click', ()=> {
      const isOpen = mobileMenu.style.display === 'flex';
      isOpen ? closeMobile() : openMobile();
    });
    // Allow keyboard open
    hamburger.addEventListener('keydown', (e)=> { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hamburger.click(); } });

    // IntersectionObserver for reveal animations
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) { e.target.classList.add('in-view'); io.unobserve(e.target); }
      })
    }, {threshold: 0.12});
    document.querySelectorAll('[data-anim]').forEach(el=> { el.classList.add('animate'); io.observe(el); });
  </script>
</body>
</html>
