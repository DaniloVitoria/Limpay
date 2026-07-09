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

const faqSections = [
  {
    title: 'Para Clientes',
    items: [
      {
        question: 'Como funciona a Limpay?',
        answer:
          'A Limpay conecta clientes a diaristas autônomas por meio da plataforma. A Limpay não presta serviços de limpeza diretamente, apenas intermedeia a contratação e o pagamento.',
      },
      {
        question: 'Como faço para contratar uma diarista?',
        answer:
          'Basta escolher uma profissional disponível, selecionar a data e horário, realizar o pagamento pela plataforma e aguardar a confirmação.',
      },
      {
        question: 'O pagamento é seguro?',
        answer: 'Sim. Todos os pagamentos são processados pela plataforma utilizando o Mercado Pago.',
      },
      {
        question: 'Posso pagar diretamente para a diarista?',
        answer:
          'Não. Todos os pagamentos devem ser realizados exclusivamente pela plataforma. Pagamentos por fora são proibidos e podem caracterizar tentativa de golpe.',
      },
      {
        question: 'O que acontece se eu cancelar?',
        answer: 'Antes do dia do serviço: reembolso de 100%. No mesmo dia do serviço: não há reembolso.',
      },
      {
        question: 'E se a diarista cancelar?',
        answer: 'Você recebe reembolso integral.',
      },
      {
        question: 'E se a diarista não confirmar o serviço?',
        answer:
          'Caso ela não confirme em até 2 horas após o pagamento, o serviço é cancelado automaticamente e você recebe reembolso integral.',
      },
      {
        question: 'Posso solicitar serviços extras durante a limpeza?',
        answer: 'Somente mediante acordo direto entre você e a diarista.',
      },
      {
        question: 'Quem fornece os materiais de limpeza?',
        answer: 'Cliente e diarista devem combinar previamente quem fornecerá os materiais.',
      },
      {
        question: 'O que faço se outra pessoa aparecer no lugar da diarista contratada?',
        answer:
          'Recuse o serviço e entre imediatamente em contato com o suporte da Limpay.',
      },
      {
        question: 'Como confirmar que o serviço foi concluído?',
        answer:
          'Após a diarista informar a conclusão, você receberá uma notificação para confirmar ou relatar algum problema.',
      },
      {
        question: 'O que acontece se eu não confirmar o serviço?',
        answer: 'Após 48 horas sem manifestação, o serviço será considerado concluído automaticamente.',
      },
    ],
  },
  {
    title: 'Para Diaristas',
    items: [
      {
        question: 'Como faço meu cadastro?',
        answer:
          'É necessário informar seus dados, CPF, enviar uma selfie e uma foto de perfil para verificação.',
      },
      {
        question: 'Quando minha conta será ativada?',
        answer: 'Após a análise e aprovação da documentação pela equipe da Limpay.',
      },
      {
        question: 'Posso recusar serviços?',
        answer: 'Sim. Você decide quais serviços aceita.',
      },
      {
        question: 'Posso definir meus próprios horários?',
        answer: 'Sim. Você trabalha como profissional autônoma e define sua própria agenda.',
      },
      {
        question: 'Existe vínculo empregatício com a Limpay?',
        answer: 'Não. A Limpay não contrata diaristas e não existe vínculo empregatício.',
      },
      {
        question: 'Quanto a Limpay cobra?',
        answer: 'A plataforma retém uma taxa de 5% sobre o valor do serviço da diarista.',
      },
      {
        question: 'Quando recebo meu pagamento?',
        answer:
          'Após a confirmação da conclusão do serviço pelo cliente ou automaticamente após 48 horas, seguindo os prazos do meio de pagamento escolhido.',
      },
      {
        question: 'Posso enviar outra pessoa para realizar o serviço?',
        answer: 'Não. O serviço deve ser realizado exclusivamente pela diarista contratada.',
      },
      {
        question: 'O que acontece se eu recusar muitos serviços?',
        answer:
          'A recusa de três serviços consecutivos pode resultar em bloqueio temporário da conta por 30 dias.',
      },
      {
        question: 'Posso trabalhar em outras plataformas?',
        answer: 'Sim. Não há exclusividade.',
      },
    ],
  },
  {
    title: 'Pagamentos',
    items: [
      {
        question: 'Quais formas de pagamento são aceitas?',
        answer: 'Pix e cartão de crédito.',
      },
      {
        question: 'Como funciona o reembolso?',
        answer:
          'Os reembolsos seguem as regras de cancelamento da plataforma e podem depender dos prazos do Mercado Pago ou da operadora do cartão.',
      },
      {
        question: 'A Limpay pode reter pagamentos?',
        answer:
          'Sim. Em casos de disputa, suspeita de fraude ou necessidade de verificação de segurança.',
      },
    ],
  },
  {
    title: 'Conta e Segurança',
    items: [
      {
        question: 'Posso excluir minha conta?',
        answer:
          'Sim. Você pode excluir sua conta a qualquer momento pelo aplicativo ou solicitar a exclusão por meio dos canais oficiais de atendimento. Em alguns casos, determinadas informações poderão ser mantidas pelo prazo exigido pela legislação aplicável.',
      },
      {
        question: 'A Limpay protege meus dados?',
        answer:
          'Sim. A Limpay adota medidas técnicas e administrativas para proteger os dados pessoais dos usuários, em conformidade com a Lei Geral de Proteção de Dados (LGPD). As informações são utilizadas apenas para viabilizar o funcionamento da plataforma, o processamento de pagamentos, a verificação de identidade, a segurança e outras finalidades previstas na Política de Privacidade e nos Termos de Uso.',
      },
      {
        question: 'Por que minha conta pode ser suspensa ou encerrada?',
        answer:
          'A Limpay poderá suspender ou encerrar contas que violem os Termos de Uso ou que representem risco à segurança, à integridade ou ao bom funcionamento da plataforma.',
        bullets: [
          'fornecimento de informações falsas ou inconsistentes',
          'uso da plataforma em desacordo com os Termos de Uso',
          'suspeita de fraude, abuso ou uso indevido da plataforma',
          'condutas que comprometam a segurança ou a experiência de outros usuários',
        ],
      },
      {
        question: 'A Limpay vende meus dados?',
        answer:
          'Não. Os dados não são comercializados e só são compartilhados quando necessário para processamento de pagamentos ou por obrigação legal.',
      },
    ],
  },
  {
    title: 'Suporte',
    items: [
      {
        question: 'Como entro em contato com o suporte?',
        answer: 'Pelos canais oficiais da Limpay.',
      },
      {
        question: 'Recebi uma mensagem pedindo PIX fora da plataforma. O que fazer?',
        answer:
          'Não realize o pagamento. Considere a mensagem uma tentativa de golpe e informe imediatamente o suporte da Limpay.',
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
                      <p>{item.answer}</p>
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
        <span>SUPORTE: limpayconect.suporte@gmail.com</span>
        <p className="footer-copy">Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

export default App
