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

type FaqItem = {
  question: string
  answer: string[]
  bullets?: string[]
}

type FaqSection = {
  title: string
  items: FaqItem[]
  note?: string
}

const faqSections: FaqSection[] = [
  {
    title: 'Sobre a LIMPAY',
    items: [
      {
        question: 'O que é a LIMPAY?',
        answer: ['A LIMPAY é uma plataforma que conecta clientes a profissionais autônomos de limpeza.'],
      },
      {
        question: 'A LIMPAY presta o serviço de limpeza?',
        answer: ['Não. A LIMPAY apenas faz a intermediação entre clientes e profissionais.'],
      },
      {
        question: 'A LIMPAY é responsável pela profissional que realiza o serviço?',
        answer: ['A profissional atua de forma autônoma e é responsável pela execução do serviço.'],
      },
    ],
  },
  {
    title: 'Para profissionais',
    items: [
      {
        question: 'Como faço meu cadastro?',
        answer: ['Você precisa preencher seus dados, adicionar uma foto real e enviar CPF e selfie para verificação.'],
      },
      {
        question: 'Minha conta é aprovada imediatamente?',
        answer: ['Não. O cadastro passa por uma análise antes da ativação.'],
      },
      {
        question: 'Outra pessoa pode realizar o serviço no meu lugar?',
        answer: ['Não. O serviço deve ser realizado pelo profissional cadastrado e contratado.'],
      },
      {
        question: 'Posso escolher os dias em que quero trabalhar?',
        answer: ['Sim. O profissional define sua própria disponibilidade e pode aceitar ou recusar solicitações.'],
      },
      {
        question: 'A LIMPAY garante uma quantidade de serviços?',
        answer: ['Não. A plataforma não garante quantidade mínima de solicitações ou renda.'],
      },
      {
        question: 'O que é a taxa de intermediação?',
        answer: ['É o valor cobrado pela LIMPAY pela utilização da plataforma e pela intermediação dos serviços.'],
      },
      {
        question: 'Quando recebo pelo serviço?',
        answer: ['Após a conclusão e confirmação do serviço, o repasse é processado em até 48 horas.'],
      },
      {
        question: 'Preciso trabalhar exclusivamente pela LIMPAY?',
        answer: ['Não. Você pode trabalhar em outras plataformas ou de forma independente.'],
      },
    ],
  },
  {
    title: 'Para clientes',
    items: [
      {
        question: 'Como contrato um profissional?',
        answer: ['Você escolhe um profissional disponível e agenda o serviço pela plataforma.'],
      },
      {
        question: 'Posso combinar os detalhes do serviço com o profissional?',
        answer: ['Sim. Atividades, horários, materiais e condições do serviço são combinados diretamente entre as partes.'],
      },
      {
        question: 'Quem fornece os materiais de limpeza?',
        answer: ['Isso é combinado diretamente entre cliente e profissional.'],
      },
      {
        question: 'Posso cancelar um serviço?',
        answer: ['Sim. As condições de reembolso dependem do momento do cancelamento.'],
      },
      {
        question: 'Se eu cancelar antes do dia do serviço, recebo meu dinheiro de volta?',
        answer: ['Sim. O reembolso é integral.'],
      },
      {
        question: 'E se eu cancelar no mesmo dia?',
        answer: ['Nesse caso, não há reembolso, e o valor é destinado ao profissional pela reserva da agenda.'],
      },
      {
        question: 'E se o profissional cancelar no dia do serviço?',
        answer: ['Você recebe o reembolso integral.'],
      },
      {
        question: 'E se o profissional não aparecer?',
        answer: ['Você recebe o reembolso integral.'],
      },
      {
        question: 'Posso contestar um serviço?',
        answer: ['Sim. A contestação deve ser registrada em até 24 horas após a notificação de conclusão e nas situações previstas pela plataforma.'],
      },
      {
        question: 'A LIMPAY garante a qualidade da limpeza?',
        answer: ['Não. A execução e a qualidade do serviço são responsabilidade do profissional.'],
      },
    ],
  },
  {
    title: 'Pagamentos',
    items: [
      {
        question: 'Como faço o pagamento?',
        answer: ['Todos os pagamentos devem ser realizados exclusivamente pela plataforma.'],
      },
      {
        question: 'Posso fazer PIX diretamente para o profissional?',
        answer: ['Não. Nunca faça pagamentos fora da LIMPAY.'],
      },
      {
        question: 'A LIMPAY pede pagamento por WhatsApp ou e-mail?',
        answer: ['Não. A LIMPAY nunca solicita pagamentos fora da plataforma.'],
      },
      {
        question: 'O que faço se alguém pedir um pagamento por fora?',
        answer: ['Não faça o pagamento e comunique imediatamente o suporte da LIMPAY.'],
      },
      {
        question: 'O que é a taxa de intermediação?',
        answer: ['É o valor cobrado pela LIMPAY pela utilização da plataforma e pela intermediação dos serviços.'],
      },
    ],
  },
  {
    title: 'Segurança',
    items: [
      {
        question: 'Como a LIMPAY verifica os profissionais?',
        answer: ['Os profissionais enviam CPF e selfie, que são analisados pela equipe da LIMPAY antes da ativação.'],
      },
      {
        question: 'Posso receber uma pessoa diferente da profissional que contratei?',
        answer: ['Não. O serviço deve ser realizado pela pessoa cadastrada e verificada na plataforma.'],
      },
      {
        question: 'O que faço se aparecer outra pessoa no lugar da profissional?',
        answer: ['Não permita a realização do serviço e entre imediatamente em contato com o suporte.'],
      },
      {
        question: 'O que faço em caso de furto, ameaça, agressão ou outro crime?',
        answer: ['Registre imediatamente a ocorrência junto às autoridades e comunique a LIMPAY pelo canal oficial.'],
      },
      {
        question: 'A LIMPAY compartilha meus dados pessoais?',
        answer: ['Não comercializamos seus dados. Eles podem ser compartilhados quando necessário para o funcionamento da plataforma, como no processamento de pagamentos, ou quando exigido por lei.'],
      },
    ],
  },
  {
    title: 'Avaliações',
    items: [
      {
        question: 'Posso avaliar o profissional após o serviço?',
        answer: ['Sim. A plataforma pode utilizar notas, comentários e histórico de serviços.'],
      },
      {
        question: 'O que é a avaliação do profissional?',
        answer: ['As avaliações representam as opiniões dos usuários e não constituem garantia de qualidade pela LIMPAY.'],
      },
    ],
  },
  {
    title: 'Conta e suporte',
    items: [
      {
        question: 'Posso excluir minha conta?',
        answer: ['Sim. O encerramento pode ser solicitado pelo aplicativo ou pelo canal oficial de atendimento.'],
      },
      {
        question: 'Posso ter mais de uma conta?',
        answer: ['O mesmo CPF não pode ser utilizado para dois cadastros do mesmo tipo.'],
      },
      {
        question: 'Como entro em contato com a LIMPAY?',
        answer: ['Pelo e-mail limpayconect@gmail.com ou pelo suporte limpayconect.suporte@gmail.com.'],
      },
    ],
  },
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
        <a className="top-header__terms-link" href="/termos.html">
          Termos
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
          <div className="qr-placeholder" aria-label="Espaço reservado para o QR code do aplicativo">
            <div className="qr-placeholder__frame" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span className="qr-placeholder__center" />
            </div>
            <div className="qr-placeholder__copy">
              <p className="qr-placeholder__eyebrow">QR code do app</p>
              <strong>Espaço reservado</strong>
              <span>O QR code será inserido aqui quando estiver pronto.</span>
            </div>
          </div>
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
          <h2>Tudo o que clientes e diaristas precisam saber.</h2>
        </div>

        <div className="faq-grid">
          {faqSections.map((section) => (
            <article className="faq-card" key={section.title}>
              <div className="faq-card__header">
                <p className="faq-card__eyebrow">FAQ</p>
                <h3>{section.title}</h3>
              </div>

              <div className="faq-card__items">
                {section.items.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>{item.question}</summary>
                    <div className="faq-item__body">
                      {item.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {item.bullets ? (
                        <ul>
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>

              {section.note ? <p className="faq-card__note">{section.note}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="quote-strip" aria-label="Mensagem bíblica">
        <p className="quote-strip__text">
          “Por onde passava, Abraão erguia sua tenda na terra, mas levantava altares ao Senhor — declarando que sua vida não pertencia ao mundo, e sim a Deus.”
        </p>
        <p className="quote-strip__reference">Gênesis 12:7–8</p>
      </section>

      <footer className="site-footer">
        <div>
          <p className="footer-brand">Limpay</p>
          <span>Conectando clientes e diaristas com simplicidade.</span>
        </div>

        <nav aria-label="Rodapé">
          <a href="/politicadeprivacidade.html">Política de Privacidade</a>
          <a href="/termos.html">Termos de Uso</a>
          <a href="#">Redes sociais</a>
          <a href="#">Contato</a>
          
        </nav>
        <span>SUPORTE: limpayconect.suporte@gmail.com</span>
        <p className="footer-copy">Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
