<html lang="bg">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Career Quest — Мечтана кариера</title>
  <style>
    :root{
      --bg:#f5f7fb; --card:#fff; --nav:#092a6b; --accent:#1ea3ff; --muted:#6b7082; --shadow:0 6px 18px rgba(11,24,48,0.08);
    }
    *{box-sizing:border-box;}
    body{margin:0;font-family:Inter, sans-serif;background:var(--bg);color:#111;}
    a{text-decoration:none;color:inherit;}
    .container{max-width:1100px;margin:0 auto;padding:16px;}

    header{display:flex;justify-content:space-between;align-items:center;padding:12px 0;}
    .brand{display:flex;align-items:center;gap:12px;}
    .brand .logo{width:44px;height:44px;background:linear-gradient(135deg,var(--nav),#1346b6);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;border-radius:8px;}
    nav.desktop{display:flex;gap:18px;}
    nav.desktop a{font-weight:600;color:var(--nav);}
    .hamburger{display:none;cursor:pointer;flex-direction:column;gap:4px;width:30px;height:24px;justify-content:center;}
    .hamburger span{display:block;height:3px;background:var(--nav);border-radius:2px;}

    .hero{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:20px 0;}
    .hero-text{max-width:540px;}
    .hero-text h1{font-size:32px;margin:0 0 12px;}
    .hero-text p{color:var(--muted);margin:0 0 18px;}
    .hero-text button{padding:10px 18px;background:var(--accent);border:none;color:#042339;border-radius:8px;cursor:pointer;font-weight:600;}

    section{margin:28px 0;}
    .card{background:var(--card);padding:18px;border-radius:12px;box-shadow:var(--shadow);}
    .cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;}
    .cards-grid img{width:100%;border-radius:10px;}
    .team-card{text-align:center;}
    .team-card img{width:100%;height:180px;object-fit:cover;border-radius:10px;margin-bottom:8px;}
    .team-card strong{display:block;}

    form{display:grid;gap:8px;max-width:500px;}
    input, textarea{padding:10px;border-radius:8px;border:1px solid #ddd;width:100%;}
    button.submit-btn{background:var(--nav);color:#fff;padding:10px 14px;border:none;border-radius:8px;cursor:pointer;}

    footer{text-align:center;padding:16px 0;color:var(--muted);font-size:14px;}

    @media(max-width:768px){
      .hero{flex-direction:column;}
      nav.desktop{display:none;}
      .hamburger{display:flex;}
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo">CQ</div>
        <div class="title">Career Quest</div>
      </div>
      <nav class="desktop">
        <a href="#hero">Начало</a>
        <a href="#courses">Занятия</a>
        <a href="#packages">Пакети</a>
        <a href="#team">Екип</a>
        <a href="#contact">Контакт</a>
      </nav>
      <div class="hamburger" onclick="document.querySelector('.mobile-menu').classList.toggle('open')">
        <span></span><span></span><span></span>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div class="mobile-menu" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:50;">
      <div style="background:#fff;margin:60px auto;padding:20px;border-radius:12px;max-width:300px;display:flex;flex-direction:column;gap:12px;">
        <a href="#hero">Начало</a>
        <a href="#courses">Занятия</a>
        <a href="#packages">Пакети</a>
        <a href="#team">Екип</a>
        <a href="#contact">Контакт</a>
      </div>
    </div>

    <!-- Hero -->
    <section id="hero" class="hero">
      <div class="hero-text">
        <h1>Намери своята мечтана кариера</h1>
        <p>Персонализирани занятия, тестове и професионални консултации за твоето бъдеще</p>
        <button onclick="location.href='#courses'">Започни сега</button>
      </div>
      <img src="https://picsum.photos/seed/hero/400/300" alt="Hero image">
    </section>

    <!-- Courses -->
    <section id="courses">
      <h2>Нашите занятия</h2>
      <div class="cards-grid">
        <div class="card">
          <img src="https://picsum.photos/seed/course1/300/200" alt="Личностна оценка">
          <strong>Личностна оценка</strong>
          <p class="muted">Открий силните си страни и потенциала си.</p>
        </div>
        <div class="card">
          <img src="https://picsum.photos/seed/course2/300/200" alt="Професионални умения">
          <strong>Професионални умения</strong>
          <p class="muted">Развий уменията, които работодателите търсят.</p>
        </div>
        <div class="card">
          <img src="https://picsum.photos/seed/course3/300/200" alt="Кариерно ориентиране">
          <strong>Кариерно ориентиране</strong>
          <p class="muted">Направи информиран избор за своята специалност.</p>
        </div>
      </div>
    </section>

    <!-- Packages -->
    <section id="packages">
      <h2>Пакети</h2>
      <div class="cards-grid">
        <div class="card">
          <strong>Starter</strong><p class="muted">Самооценка и ориентация</p>
        </div>
        <div class="card">
          <strong>Advanced</strong><p class="muted">Умения, приоритети, социални аспекти</p>
        </div>
        <div class="card">
          <strong>Master</strong><p class="muted">Персонална подкрепа и кандидатстване</p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section id="team">
      <h2>Екип</h2>
      <div class="cards-grid">
        <!-- Първата снимка обновена с професионална докторка -->
        <div class="team-card">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Д-р Елена">
          <strong>Д-р Елена Петрова</strong>
          <p class="muted-small">Кариерен психолог — 10+ години опит</p>
        </div>
        <div class="team-card">
          <img src="https://picsum.photos/seed/team2/300/200" alt="Иван">
          <strong>Иван Димитров</strong>
          <p class="muted-small">Консултант по кандидатстване</p>
        </div>
        <div class="team-card">
          <img src="https://picsum.photos/seed/team3/300/200" alt="Мария">
          <strong>Мария Георгиева</strong>
          <p class="muted-small">Образователен анализатор</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="card">
      <h2>Свържи се с нас</h2>
      <form>
        <input type="text" placeholder="Име и фамилия">
        <input type="email" placeholder="Имейл">
        <textarea placeholder="Съобщение"></textarea>
        <button type="submit" class="submit-btn">Изпрати</button>
      </form>
    </section>

    <footer>
      © Career Quest — Всички права запазени
    </footer>
  </div>

  <script>
    // Mobile menu toggle
    const mobMenu = document.querySelector('.mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', ()=> mobMenu.style.display = mobMenu.style.display==='flex'?'none':'flex');
  </script>
</body>
</html>
