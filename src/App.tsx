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
    title: 'Sobre a Limpay',
    items: [
      {
        question: 'O que é a Limpay?',
        answer: [
          'A Limpay é uma plataforma digital que conecta pessoas que precisam de uma faxina a profissionais de limpeza autônomos, verificados e avaliados. Todo o processo acontece pelo aplicativo: você agenda, paga e confirma o serviço em um só lugar.',
        ],
      },
      {
        question: 'A Limpay é uma empresa de limpeza? Vocês contratam as profissionais?',
        answer: [
          'Não. A Limpay não presta serviços de limpeza e não contrata as profissionais. Nós somos a tecnologia que faz a ponte entre quem precisa e quem oferece o serviço, além de cuidar do pagamento com segurança.',
          'As profissionais são autônomas e independentes: definem os próprios horários, aceitam ou recusam os serviços que quiserem e podem atuar em outras plataformas. Não existe vínculo empregatício com a Limpay.',
        ],
      },
      {
        question: 'Em quais cidades a Limpay funciona?',
        answer: [
          'Estamos crescendo — se a sua região ainda não aparece no app, cadastre-se mesmo assim e avisaremos assim que chegarmos aí.',
        ],
      },
      {
        question: 'Quanto custa usar a Limpay?',
        answer: [
          'Não há mensalidade nem taxa de cadastro. A Limpay cobra uma taxa de serviço apenas sobre os serviços efetivamente contratados: 15% para quem contrata e 5% para o profissional.',
        ],
      },
    ],
  },
  {
    title: 'Para quem vai contratar',
    items: [
      {
        question: 'Como contrato uma faxina?',
        answer: [
          'Você cria sua conta com foto de perfil, informa o endereço e os dados do imóvel, escolhe o dia e o horário e faz o pagamento pelo app. A partir daí a solicitação é enviada aos profissionais disponíveis e você recebe a confirmação.',
        ],
      },
      {
        question: 'Como funciona o pagamento?',
        answer: [
          'O pagamento é feito no momento do agendamento, dentro do aplicativo, por Pix ou cartão de crédito, através do Mercado Pago.',
          'O valor não vai direto para a profissional: ele fica retido em conta da Limpay até o serviço ser realizado. Só depois da execução e da confirmação é que o repasse acontece.',
        ],
      },
      {
        question: 'Por que o dinheiro fica retido?',
        answer: [
          'É a sua segurança. Enquanto o serviço não é executado, o valor não pertence à profissional e não fica disponível para ela. Se a faxina não acontecer, por qualquer motivo, o dinheiro volta integralmente para você.',
        ],
      },
      {
        question: 'Preciso fornecer os produtos e materiais de limpeza?',
        answer: [
          'Isso é combinado diretamente entre você e a profissional antes do serviço. A Limpay não fornece materiais nem equipamentos. Nossa recomendação é deixar isso alinhado no chat do app, para que não haja surpresa no dia.',
        ],
      },
      {
        question: 'Preciso estar em casa durante a faxina?',
        answer: [
          'Não é obrigatório, mas alguém precisa garantir o acesso ao imóvel no horário combinado. Você é responsável pelas pessoas, animais e objetos presentes no local durante o serviço.',
        ],
      },
      {
        question: 'Como confirmo que o serviço foi realizado?',
        answer: [
          'Quando a profissional finaliza, ela registra a conclusão no app e você recebe uma notificação para confirmar ou relatar um problema.',
        ],
        bullets: [
          'Passo 1 - a profissional marca o serviço como concluído.',
          'Passo 2 - você tem 24 horas para confirmar ou contestar.',
          'Passo 3 - confirmado, o pagamento é processado em até 48 horas.',
          'Se você não responder dentro de 24 horas, o serviço é considerado confirmado automaticamente e o pagamento segue para a profissional.',
        ],
      },
      {
        question: 'A profissional não apareceu, ou o serviço não foi realizado. O que faço?',
        answer: [
          'Registre a contestação no aplicativo dentro do prazo de 24 horas após a notificação de conclusão. Enquanto a contestação está em análise, o valor continua retido e não é repassado.',
          'A contestação serve para fatos objetivos: a profissional não compareceu, quem apareceu foi outra pessoa, o serviço não foi iniciado ou foi interrompido sem justificativa, houve cobrança por fora do app ou indício de fraude. Confirmada a situação, o valor é devolvido a você.',
          'O prazo é curto porque a limpeza é verificável na hora: o resultado muda com o uso normal da casa nos dias seguintes. Por isso, confira o serviço ainda no mesmo dia.',
        ],
      },
      {
        question: 'Não gostei da qualidade da faxina. Posso pedir o dinheiro de volta?',
        answer: [
          'A Limpay conecta você a profissionais autônomos e não avalia nem garante o resultado do trabalho, que é responsabilidade de quem executa. Se o serviço foi realizado, o valor é devido à profissional.',
          'O que você pode fazer é registrar sua avaliação e seu relato — eles ficam visíveis para outros usuários e fazem parte dos critérios de permanência na plataforma — e acionar o suporte, que pode mediar a conversa. Na próxima faxina, você escolhe outro profissional.',
          'A devolução do valor se aplica quando o serviço não foi realizado, e não quando o resultado ficou aquém do esperado.',
        ],
      },
      {
        question: 'Posso cancelar? Recebo o dinheiro de volta?',
        answer: [
          'Os prazos de crédito do estorno seguem o Mercado Pago e a operadora do seu cartão.',
        ],
        bullets: [
          'Você cancelou antes do dia do serviço: reembolso de 100%.',
          'Você cancelou no mesmo dia: não há reembolso. Como a profissional reservou a agenda dela para o seu atendimento, o valor é repassado a ela a título de compensação pela reserva.',
          'A profissional cancelou no dia: reembolso de 100% para você, e ela não recebe nada.',
          'A profissional não apareceu, sem cancelar: reembolso de 100% para você.',
          'Ninguém aceitou o serviço em até 2 horas após o pagamento: cancelamento automático com reembolso de 100%.',
        ],
      },
      {
        question: 'Apareceu uma pessoa diferente da que eu contratei. O que faço?',
        answer: [
          'Recuse o serviço e acione o suporte imediatamente. A conta na Limpay é pessoal e intransferível: só pode executar o serviço a profissional cujo perfil você viu e contratou, porque é ela quem passou pela nossa verificação de identidade.',
          'Nesse caso o serviço é tratado como não executado e o valor é devolvido integralmente a você.',
        ],
      },
      {
        question: 'As profissionais são verificadas?',
        answer: [
          'Sim. Para ativar a conta, a profissional envia CPF válido, selfie e documento de identidade, e o cadastro é revisado manualmente pela equipe da Limpay antes da liberação. A foto de perfil é obrigatória, precisa ser real e atual, e mostrar claramente o rosto.',
          'Você também vê as avaliações e o histórico de serviços de cada profissional antes de contratar.',
        ],
      },
      {
        question: 'E se algo for danificado ou desaparecer durante o serviço?',
        answer: [
          'Registre imediatamente um boletim de ocorrência na delegacia. Furto, dano e qualquer outro crime são apurados pelas autoridades competentes — a Limpay não investiga fatos, não produz provas e não decide quem tem razão.',
          'Depois de registrar, comunique o ocorrido pelo canal oficial de atendimento, informando o número do B.O. Com isso podemos adotar medidas na conta envolvida, como a restrição preventiva de acesso, o bloqueio de novos agendamentos entre as pessoas envolvidas e o encerramento definitivo do cadastro.',
          'Fornecemos as informações que temos mediante requisição da polícia ou da Justiça. Por proteção de dados, não repassamos dados pessoais de um usuário para outro.',
          'Essa regra vale nos dois sentidos: também protege a profissional que sofra furto, agressão ou assédio durante o atendimento.',
        ],
      },
      {
        question: 'Como funciona a avaliação?',
        answer: [
          'Depois de cada serviço você pode dar uma nota e deixar um comentário. As avaliações ajudam outros clientes a escolher e fazem parte dos critérios que usamos para manter o padrão da plataforma. Conteúdos ofensivos ou inverídicos podem ser removidos.',
        ],
      },
    ],
  },
  {
    title: 'Para quem vai trabalhar',
    items: [
      {
        question: 'Como faço para me cadastrar como profissional?',
        answer: [
          'Baixe o app, escolha o perfil de profissional e envie seus dados: nome completo, CPF válido, foto de perfil, selfie e documento de identidade, além da sua chave Pix para receber.',
          'A conta é criada com status “pendente de aprovação” e só é ativada depois da revisão manual da nossa equipe.',
        ],
      },
      {
        question: 'Preciso pagar alguma coisa para me cadastrar?',
        answer: [
          'Não. O cadastro é gratuito e não existe mensalidade. A Limpay só ganha quando você ganha: a taxa é de 5% sobre o valor do serviço, descontada no repasse.',
        ],
      },
      {
        question: 'Quando eu recebo pelo serviço?',
        answer: [
          'Em até 72 horas após a conclusão do serviço:',
        ],
        bullets: [
          '24 horas - prazo do cliente para confirmar ou contestar. Se ele não responder, o sistema confirma automaticamente.',
          '+ 48 horas - prazo de processamento do pagamento pela instituição financeira.',
          'No cartão de crédito, o crédito segue também a modalidade de recebimento que você escolheu junto ao Mercado Pago.',
        ],
      },
      {
        question: 'O cliente não confirmou o serviço. Vou receber?',
        answer: [
          'Sim. Se o cliente não se manifestar em 24 horas, o serviço é considerado automaticamente confirmado e o pagamento é liberado normalmente.',
        ],
      },
      {
        question: 'O cliente contestou o serviço. E agora?',
        answer: [
          'O valor fica retido enquanto a Limpay analisa. Você será ouvida e poderá enviar fotos e sua versão do que aconteceu. Concluída a análise, o valor é liberado para você ou devolvido ao cliente, conforme o resultado.',
        ],
      },
      {
        question: 'E se o cliente cancelar no dia do serviço?',
        answer: [
          'Você recebe. Como a data já estava reservada para aquele atendimento, o cancelamento feito pelo cliente no mesmo dia não gera reembolso a ele: o valor é repassado a você a título de compensação pela reserva, em até 48 horas contadas do cancelamento, com as taxas normais.',
          'Se o cancelamento partir de você, no dia do serviço, o cliente recebe 100% de volta e não há valor a repassar.',
        ],
      },
      {
        question: 'Sou funcionária da Limpay?',
        answer: [
          'Não. Você atua como profissional autônoma e independente. Você define seus horários, aceita ou recusa os serviços que quiser, usa seus próprios métodos de trabalho e pode atuar em outras plataformas ao mesmo tempo. Não há exclusividade nem vínculo empregatício.',
          'Como autônoma, você é responsável pelos seus próprios tributos e obrigações legais.',
        ],
      },
      {
        question: 'Posso recusar um serviço?',
        answer: [
          'Sim, sempre — sem precisar justificar. Você também não tem meta, jornada mínima ou obrigação de estar disponível em determinado horário. Em contrapartida, a Limpay não garante um volume mínimo de serviços ou de renda.',
        ],
      },
      {
        question: 'Posso mandar outra pessoa no meu lugar se eu não puder ir?',
        answer: [
          'Não. A conta é pessoal e intransferível, e o cliente contratou o perfil que passou pela nossa verificação de identidade — é uma questão de segurança de quem abre a porta de casa.',
          'Se você não puder comparecer, cancele pelo aplicativo. O serviço volta para a plataforma e pode ser aceito por outra profissional cadastrada e verificada. Enviar terceiro não cadastrado leva à suspensão da conta e, em caso de fraude ou reincidência, ao encerramento definitivo.',
        ],
      },
      {
        question: 'O cliente quer me pagar por fora. Posso aceitar?',
        answer: [
          'Não. Todo pagamento de serviço contratado no app deve acontecer dentro da plataforma. Também é proibido cobrar valores extras por fora de um serviço já pago no aplicativo.',
          'Além de ser motivo de banimento permanente, o pagamento por fora te deixa desprotegida: sem o registro no app, você não tem o valor retido garantindo o seu recebimento, nem suporte em caso de problema.',
        ],
      },
      {
        question: 'Preciso levar os produtos e materiais de limpeza?',
        answer: [
          'Isso é combinado diretamente com o cliente antes do serviço. Deixe claro no chat do app o que você leva e o que espera encontrar no local.',
        ],
      },
      {
        question: 'Preciso cancelar um serviço já aceito. O que acontece?',
        answer: [
          'Cancelamentos feitos no dia do serviço geram reembolso integral ao cliente e você não recebe nada por aquele agendamento. Cancelamentos frequentes podem levar à suspensão da conta, porque afetam a confiança na plataforma.',
        ],
      },
      {
        question: 'Meu acesso foi restringido ou minha conta foi encerrada. Por quê?',
        answer: [
          'A Limpay não aplica advertências, punições ou sanções — não somos empregadores, não avaliamos desempenho e não temos poder disciplinar sobre ninguém. O que existe é um contrato de uso da plataforma, que pode ser encerrado por qualquer uma das partes.',
          'Os motivos mais comuns são informações falsas no cadastro, execução do serviço por pessoa não verificada, cobrança fora do aplicativo, indícios de fraude, comunicação de ocorrência grave e o não atendimento aos critérios objetivos de permanência — que valem igualmente para quem contrata e para quem presta o serviço.',
          'O encerramento não afeta valores já devidos por serviços que você executou regularmente: eles são repassados normalmente. Você também continua livre para trabalhar por conta própria ou em outras plataformas.',
          'Se quiser entender o motivo ou pedir reanálise, escreva para o suporte — sua manifestação será analisada e o acesso pode ser restabelecido.',
        ],
      },
    ],
  },
  {
    title: 'Segurança, dados e suporte',
    items: [
      {
        question: 'Para que vocês usam meu CPF, minha selfie e meus documentos?',
        answer: [
          'Exclusivamente para verificar identidade, viabilizar a intermediação dos serviços, processar pagamentos, prevenir fraudes e manter a segurança da plataforma. A revisão é feita pela nossa equipe antes da ativação da conta.',
        ],
      },
      {
        question: 'Meus dados são compartilhados ou vendidos?',
        answer: [
          'Não. A Limpay não comercializa, vende ou compartilha dados pessoais com terceiros, exceto o necessário para processar pagamentos pela instituição financeira intermediadora (Mercado Pago) ou por determinação legal. O tratamento segue a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).',
        ],
      },
      {
        question: 'Como excluo minha conta e meus dados?',
        answer: [
          'É só pedir pelo aplicativo ou escrever para o suporte. Sua conta é encerrada e seu perfil deixa de aparecer na plataforma.',
          'Alguns dados continuam guardados em base de acesso restrito mesmo depois do encerramento, como permite o artigo 16 da LGPD: os registros das transações, por obrigação fiscal e financeira; os registros de acesso ao aplicativo, pelo prazo mínimo de 6 meses previsto no Marco Civil da Internet; e as informações necessárias para responder a eventual solicitação da Justiça ou de autoridades.',
          'Esses dados não são usados para nenhuma outra finalidade, não aparecem para outros usuários e são eliminados ou anonimizados quando os prazos legais terminam. O encerramento também não cancela obrigações financeiras pendentes.',
        ],
      },
      {
        question: 'Recebi uma mensagem pedindo Pix ou pagamento fora do app. É golpe?',
        answer: [
          'Sim, trate como golpe. A Limpay nunca envia mensagens, e-mails ou notificações pedindo transferências ou pagamentos por fora do aplicativo. Não responda, não pague e reporte imediatamente ao nosso suporte.',
        ],
      },
      {
        question: 'Como falo com o suporte?',
        answer: [
          'Pelo canal de atendimento dentro do aplicativo ou pelo e-mail limpayconect.suporte@gmail.com',
        ],
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
