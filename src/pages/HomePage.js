import React from 'react';
import '../styles/style.css';


const HomePage = () => {
  return (
    <div>
      <header>
        <div className="boll-image">
          <img src="/images/soccer-ball-png.png" alt="Soccer ball" />
          <img src="/images/soccer-ball-png.png" alt="Soccer ball" />
          <img src="/images/soccer-ball-png.png" alt="Soccer ball" />

        </div>

        <div className="logo-container">
          <a href="/">
            <h1>FotbollZ</h1>
            <img src="/images/fotbollz.png" alt="FotbollZ Logo" />
          </a>
        </div>
      </header>

      <nav className="main-navigation">
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/OFKPage">ÖFK</a></li>
          <li><a href="/Local-news">Local News</a></li>
          <li><a href="/predictions">Predictions</a></li>
        </ul>
      </nav>

      <div className="clearfix">
        <div className="main-content">
          <div className="news-box">
            <h2>Latest News</h2>
            <a href="#article1" className="article-box">
              <article>
                <img src="/images/ofk-weblogo-custom.png" alt="Sidebar Image" />
                <h3>DET SER BRA UT INFÖR SÄSONGEN FÖR ÖFK - ALLA SPELARE ÄR FRISKA</h3>
                <div className="article-content" id="article1">
                  Det känns bra att alla spelare i ÖFK är skadefria och kan deltaga på träningslägret i Alicante.
                </div>
              </article>
            </a>

            <a href="#article2" className="article-box">
              <article>
                <img src="/images/boll.png" alt="Sidebar Image" />
                <h3>TRÄNINGSMATCH HERR</h3>
                <div className="article-content" id="article2">
                  <p>
                    Träningsmatcher Herr JHFF<br />
                    Frösö IF - IFK Östersund<br />
                    18:15, 4 feb. 2024<br />
                    ÖP-hallen
                  </p>
                </div>
              </article>
            </a>
          </div>

          <h2>Matchvideo</h2>
          <video controls>
            <source src="/videos/videoplayback.mp4" type="video/mp4" />
          </video>

          <form id="newsletter-form" action="subscribe.php" method="post">
            <label htmlFor="email">Prenumerera på nyhetsbrev:</label>
            <input type="email" id="email" name="email" required />
            <input type="submit" value="Prenumerera" />
          </form>

          <div id="confirmation-message">
            Tack för att du har prenumererat! Du kommer snart att få vårt nyhetsbrev.
          </div>
        </div>

        <div id="like-button-container"></div>

        <div className="sidebar">
          <div className="klubbar">
            <p>Klubbar</p>
          </div>

          <h3>Superettan</h3>
          <div className="sidebar-item">
            <img src="/images/ofk-weblogo-custom.png" alt="Sidebar Image" />
            <a href="https://superettan.se/">Östersund FK</a>
          </div>

          <h3>Division 2 - Herrar</h3>
          <div className="sidebar-item">
            <img src="/images/764.png" alt="Sidebar Image" />
            <a href="https://www.svenskfotboll.se/serier-cuper/tabell-och-resultat/div-2-norrland-herr-2024/115348/">IFK Östersund</a>
          </div>

          <h3>Division 1 - Damer</h3>
          <div className="sidebar-item">
            <img src="/images/ope.png.cropped.png" alt="Sidebar Image" />
            <a href="https://www.svenskfotboll.se/serier-cuper/tabell-och-resultat/division-2-dam-mellersta-norrland/115527/">Ope IF</a>
          </div>

          <h3>Divison 4 - Herrar</h3>
          <div className="sidebar-item">
            <img src="/images/ifkstromsund.png" alt="Sidebar Image" />
            <a href="https://www.svenskfotboll.se/serier-cuper/tabell-och-resultat/div-5-herr-norra/116546/">IFK Strömsund</a>
          </div>
        </div>
      </div>

      <footer>
        <p>Skapad av: Mohammed | © 2024</p>
      </footer>
    </div>
  );
};

export default HomePage;
