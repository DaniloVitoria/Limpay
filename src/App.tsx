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

function App() {
  return (
    <main className="page-shell">
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

      <section className="workflow-section" id="como-funciona">
        <div>
          <p className="eyebrow">Como funciona</p>
          <h2>Uma landpage simples, focada em conversão e clareza.</h2>
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
    </main>
  )
}

export default App
