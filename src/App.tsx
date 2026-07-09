import bannerImage from './assets/aqui.png'
import './App.css'

const highlights = [
  {
    title: 'Rápido',
    description: 'Encontre ajuda perto de você com poucos toques.',
  },
  {
    title: 'Prático',
    description: 'Agende, acompanhe e resolva tudo em um fluxo simples.',
  },
  {
    title: 'Seguro',
    description: 'Profissionais avaliados para trazer mais confiança ao atendimento.',
  },
]

const steps = [
  'Escolha o serviço que você precisa',
  'Veja profissionais disponíveis na sua região',
  'Combine o atendimento e resolva em minutos',
]

const diaristaBenefits = [
  'desejam encontrar novos clientes',
  'querem divulgar seus serviços',
  'buscam mais oportunidades de trabalho',
  'procuram uma plataforma simples de usar',
]

const differentiators = [
  'Plataforma moderna',
  'Experiência intuitiva',
  'Interface simples e elegante',
  'Facilidade para conectar clientes e diaristas',
  'Processo rápido',
  'Pensado para o dia a dia real das pessoas',
]

function App() {
  return (
    <main className="page-shell">
      <header className="top-header" aria-label="Instagram da Limpay">
        <a
          className="top-header__link"
          href="https://www.instagram.com/limpayconect?igsh=MTkwemliZmlhMm9keg=="
          target="_blank"
          rel="noreferrer"
        >
          <span className="top-header__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" role="img" focusable="false">
              <rect x="4" y="4" width="16" height="16" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4.2" />
              <circle cx="17.1" cy="6.9" r="1.1" />
            </svg>
          </span>
          <span className="top-header__handle">@limpayconect</span>
        </a>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="brand-row">
            <div className="brand-mark" aria-hidden="true">
              <span className="brand-mark__roof" />
              <span className="brand-mark__spark brand-mark__spark--one" />
              <span className="brand-mark__spark brand-mark__spark--two" />
            </div>
            <div>
              <p className="eyebrow">Limpay Conect</p>
              <h1>Encontre em minutos.</h1>
            </div>
          </div>

          <p className="hero-text">
            Profissionais avaliados perto de você, prontos para ajudar quando a
            necessidade aparece.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#como-funciona">
              Quero encontrar ajuda
            </a>
            <a className="secondary-action" href="#beneficios">
              Ver benefícios
            </a>
          </div>

          <div className="feature-grid">
            {highlights.map((item) => (
              <article className="feature-card" key={item.title}>
                <span className="feature-card__icon" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-glow visual-glow--left" />
          <div className="visual-glow visual-glow--right" />
          <img
            className="banner-image"
            src={bannerImage}
            alt="Banner principal da landpage Limpay Conect mostrando uma profissional e o aplicativo em destaque"
          />
          <div className="floating-card floating-card--top">
            <span>Resposta rápida</span>
            <strong>Profissionais próximos</strong>
          </div>
          <div className="floating-card floating-card--bottom">
            <span>Atendimento prático</span>
            <strong>Em poucos cliques</strong>
          </div>
        </div>
      </section>

      <section className="info-strip" id="beneficios">
        <article>
          <p className="strip-label">Cobertura</p>
          <strong>Perto de você</strong>
          <span>Busca geolocalizada para encurtar o caminho até o atendimento.</span>
        </article>
        <article>
          <p className="strip-label">Fluxo</p>
          <strong>Sem complicação</strong>
          <span>Do pedido ao contato com o profissional em uma navegação direta.</span>
        </article>
        <article>
          <p className="strip-label">Confiança</p>
          <strong>Perfil verificado</strong>
          <span>Uma experiência pensada para acelerar a decisão com segurança.</span>
        </article>
      </section>

      <section className="dual-section">
        <article className="content-card content-card--bright">
          <p className="eyebrow">Para diaristas</p>
          <h2>Uma plataforma para quem quer mais visibilidade e trabalho.</h2>
          <p className="section-text">
            O Limpay também ajuda diaristas que querem se conectar com novos
            clientes, divulgar seus serviços e ter uma experiência simples para o
            dia a dia.
          </p>

          <ul className="bullet-list">
            {diaristaBenefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="content-card content-card--dark">
          <p className="eyebrow">Diferenciais do Limpay</p>
          <h2>Um fluxo moderno, direto e pensado para conectar pessoas.</h2>
          <ul className="chip-list">
            {differentiators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="story-section">
        <div className="story-heading">
          <p className="eyebrow">Por que usar o Limpay?</p>
          <h2>O Limpay nasceu para facilitar a conexão entre clientes e diaristas.</h2>
        </div>

        <div className="story-copy">
          <p>
            Muitas vezes, encontrar profissionais disponíveis ou divulgar serviços
            pode ser um processo desorganizado e complicado. O Limpay simplifica
            essa conexão, oferecendo uma experiência mais prática, moderna e
            acessível.
          </p>
          <p>
            A plataforma foi desenvolvida para aproximar pessoas de forma simples e
            intuitiva.
          </p>
        </div>
      </section>

      <section className="workflow-section" id="como-funciona">
        <div>
          <p className="eyebrow">Como funciona</p>
          <h2>Como o aplicativo organiza a jornada de clientes e diaristas.</h2>
        </div>

        <ol className="workflow-list">
          {steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Chamada final</p>
          <h2>Simplifique a conexão entre clientes e diaristas</h2>
          <p>
            Baixe o aplicativo e descubra uma maneira moderna de conectar pessoas e
            oportunidades.
          </p>
        </div>

        <a className="primary-action primary-action--dark" href="#">
          Baixar aplicativo
        </a>
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <p className="eyebrow">Perguntas Frequentes</p>
          <h2>Sessão vazia por enquanto.</h2>
        </div>

        <div className="faq-empty" aria-hidden="true">
          Em breve
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">Limpay</p>
          <span>Conectando clientes e diaristas com simplicidade.</span>
        </div>

        <nav aria-label="Rodapé">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Redes sociais</a>
          <a href="#">Contato</a>
        </nav>

        <p className="footer-copy">Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
