<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Career Quest — Your Dream Career Starts Here</title>
  <meta name="description" content="Career Quest helps students find the best university and study program through personalized career tests, rankings and expert guidance." />
  <meta name="keywords" content="career test, university rankings, study programs, career guidance, student portfolio, CV help" />
  <style>
    :root{--accent:#ff7b6f;--accent2:#ffd27f;--bg:#fff8f3;--muted:#6b6b6b;--card:#ffffff}
    *{box-sizing:border-box}
    body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; margin:0; background:#f7f8fb; color:#111}
    .container{max-width:1100px;margin:0 auto;padding:28px}
    header{display:flex;align-items:center;justify-content:space-between;padding:16px 0}
    .brand{display:flex;align-items:center;gap:12px}
    .logo{width:56px;height:56px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#00c2ff);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700}
    nav a{margin-left:18px;color:var(--muted);text-decoration:none}
    .hero{display:grid;grid-template-columns:1fr 420px;gap:32px;align-items:center;margin-top:28px}
    .hero h1{font-size:34px;margin:0 0 12px}
    .hero p{color:var(--muted);margin:0 0 20px}
    .cta{display:flex;gap:12px}
    .btn{padding:12px 18px;border-radius:10px;border:0;cursor:pointer}
    .btn-primary{background:var(--accent);color:#fff}
    .btn-ghost{background:transparent;border:1px solid #e6e9ef;color:var(--accent)}
    .card{background:var(--card);border-radius:12px;padding:18px;box-shadow:0 6px 18px rgba(15,23,42,0.06)}
    .price{font-weight:700;font-size:22px}
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px}
    .package h3{margin:0 0 8px}
    .package ul{padding-left:18px;color:var(--muted)}
    section {margin-top:36px}
    footer{margin-top:44px;padding:28px 0;color:var(--muted);font-size:14px}
    @media (max-width:900px){.hero{grid-template-columns:1fr;}.grid-3{grid-template-columns:1fr}}  
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo">CQ</div>
        <div>
          <div style="font-weight:700">Career Quest</div>
          <div style="font-size:13px;color:var(--muted)">Find your path. Apply with confidence.</div>
        </div>
      </div>
      <nav>
        <a href="#how">How it works</a>
        <a href="#packages">Packages</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div>
          <h1>My Dream Career — Personalized guidance for your academic journey</h1>
          <p>Career Quest helps you navigate your academic path with tailored career tests, university and program rankings based on your profile, and expert support — so you choose the right study program with confidence.</p>
          <div class="cta">
            <button class="btn btn-primary">Start free assessment</button>
            <button class="btn btn-ghost">View packages</button>
          </div>

          <section id="how">
            <h2>How Career Quest works</h2>
            <p style="color:var(--muted)">We combine psychological tests, interest diagnostics and real-world data to recommend majors and universities that match your personality, skills and goals.</p>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px">
              <div class="card">
                <strong>1. Take tests</strong>
                <div style="color:var(--muted);font-size:14px;margin-top:8px">Short, research-backed tests to map personality, interests and strengths.</div>
              </div>
              <div class="card">
                <strong>2. Get ranked matches</strong>
                <div style="color:var(--muted);font-size:14px;margin-top:8px">Personalized rankings of universities and programs that fit your profile.</div>
              </div>
              <div class="card">
                <strong>3. Apply with confidence</strong>
                <div style="color:var(--muted);font-size:14px;margin-top:8px">CVs, motivation letters and interview coaching for successful applications.</div>
              </div>
            </div>
          </section>

        </div>

        <aside class="card">
          <h3>Packages</h3>
          <div style="margin-top:10px">
            <div class="package">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <strong>Starter</strong>
                  <div style="font-size:13px;color:var(--muted)">Focus: Self-assessment & orientation</div>
                </div>
                <div class="price">59.99 лв</div>
              </div>
              <ul>
                <li>Tests: Who am I; What I want — What I can; Things I love; My ideal job</li>
                <li>Deliverable: Personalized info card (summary of personality, interests, abilities)</li>
              </ul>
            </div>
            <hr style="margin:12px 0;border:none;border-top:1px solid #eef2ff" />
            <div class="package">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <strong>Advanced</strong>
                  <div style="font-size:13px;color:var(--muted)">Focus: Skills, priorities & social aspects</div>
                </div>
                <div class="price">199.99 лв</div>
              </div>
              <ul>
                <li>Includes Starter tests +:</li>
                <li>Ranking of job qualities; Profession interest diagnostics; Work with information assessment; Career-building ability; Student portfolio</li>
              </ul>
            </div>
            <hr style="margin:12px 0;border:none;border-top:1px solid #eef2ff" />
            <div class="package">
              <div style="display:flex;justify-content:space-between;align-items:center">
                <div>
                  <strong>Master</strong>
                  <div style="font-size:13px;color:var(--muted)">Focus: Real applications & personal support</div>
                </div>
                <div class="price">289.99 лв</div>
              </div>
              <ul>
                <li>Includes Advanced package +:</li>
                <li>Interpersonal meeting, achievements review, CV & motivation letter prep, interview training, meeting with a student from chosen major/university</li>
              </ul>
            </div>
          </div>
          <div style="margin-top:14px">
            <button class="btn btn-primary" style="width:100%">Choose a package</button>
          </div>
        </aside>
      </section>

      <section id="services" class="card" style="margin-top:28px">
        <h2>Our tests & assessments</h2>
        <p style="color:var(--muted)">All tests are research-based and designed by career counselors and psychologists. Typical assessments included in packages:</p>
        <ul style="color:var(--muted)">
          <li><strong>Who am I</strong> — personality and values mapping</li>
          <li><strong>What I want — What I can</strong> — motivation vs skills analysis</li>
          <li><strong>Things I love to do</strong> — interest inventory</li>
          <li><strong>My ideal job</strong> — role fit and day-to-day preferences</li>
          <li><strong>Job qualities ranking</strong> — prioritize what matters at work</li>
          <li><strong>Profession interest diagnostics</strong> — match to real professions</li>
          <li><strong>Work with information</strong> — organization & study environment assessment</li>
          <li><strong>Career-building ability</strong> — readiness and growth potential</li>
        </ul>
      </section>

      <section id="about" class="card">
        <h2>About Career Quest</h2>
        <p style="color:var(--muted)">We believe choosing a profession or university is not just a decision — it is the beginning of your future. Many young people feel confused and lost among advice and options. We're here to help you find your path with confidence. Our team of professional career consultants and psychologists collects and analyzes data about students worldwide, combining this with psychological tests to give accurate recommendations.</p>
      </section>

      <section id="team">
        <h2>Our Team</h2>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:12px">
          <div class="card">
            <strong>Dr. Elena Petrov</strong>
            <div style="color:var(--muted);font-size:13px">Career Psychologist — 10+ years in student career assessment</div>
          </div>
          <div class="card">
            <strong>Ivan Dimitrov</strong>
            <div style="color:var(--muted);font-size:13px">Career Consultant — University admissions expert</div>
          </div>
          <div class="card">
            <strong>Maria Georgieva</strong>
            <div style="color:var(--muted);font-size:13px">Educational Researcher — Data-driven program matching</div>
          </div>
        </div>
      </section>

      <section id="testimonials" class="card">
        <h2>Testimonials</h2>
        <p style="color:var(--muted)"><em>"Career Quest helped me discover a major that fits my strengths. Their guidance made applying to universities easy and stress-free."</em> — A happy student</p>
      </section>

      <section id="contact" class="card">
        <h2>Get started</h2>
        <p style="color:var(--muted)">Ready to find your path? Start with a free assessment or choose a package. We also offer tailored consultation for school counselors and institutions.</p>
        <form style="display:grid;gap:8px;max-width:520px">
          <input type="text" placeholder="Full name" required style="padding:10px;border-radius:8px;border:1px solid #eef2ff" />
          <input type="email" placeholder="Email" required style="padding:10px;border-radius:8px;border:1px solid #eef2ff" />
          <select style="padding:10px;border-radius:8px;border:1px solid #eef2ff">
            <option>Interested in Starter — 59.99 лв</option>
            <option>Interested in Advanced — 199.99 лв</option>
            <option>Interested in Master — 289.99 лв</option>
          </select>
          <textarea placeholder="Tell us a little about your goals" style="padding:10px;border-radius:8px;border:1px solid #eef2ff"></textarea>
          <div style="display:flex;gap:8px">
            <button class="btn btn-primary" type="submit">Send message</button>
            <button class="btn btn-ghost" type="button">Book a free call</button>
          </div>
        </form>
      </section>

    </main>

    <footer>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap">
        <div>© Career Quest — All rights reserved • Designed for Mixo AI Website Builder</div>
        <div style="color:var(--muted)">Contact: hello@careerquest.example | Sofia, Bulgaria</div>
      </div>
    </footer>
  </div>
</body>
</html>
