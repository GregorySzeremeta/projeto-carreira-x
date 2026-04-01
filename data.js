// Dados das profissões
const careers = [
  {
    id: "desenvolvedor-software",
    title: "Desenvolvedor de Software",
    category: "Tecnologia",
    description: "Profissional responsável por criar, testar e manter aplicações e sistemas computacionais.",
    salary: "R$ 5.000 - R$ 15.000",
    education: "Superior em Ciência da Computação, Engenharia de Software ou áreas relacionadas",
    skills: ["Programação", "Lógica", "Resolução de Problemas", "Trabalho em Equipe"],
    marketOutlook: "Excelente - alta demanda no mercado",
    image: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZ3xlbnwxfHx8fDE3NzQzMzU5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O desenvolvedor de software é responsável por projetar, desenvolver, testar e manter sistemas e aplicações de software. Trabalha com diversas linguagens de programação e frameworks, colaborando com equipes multidisciplinares para criar soluções tecnológicas que atendam às necessidades dos usuários e empresas.",
    responsibilities: [
      "Escrever código limpo e eficiente",
      "Realizar testes e debugging de aplicações",
      "Colaborar com designers e gerentes de projeto",
      "Manter e atualizar sistemas existentes",
      "Documentar processos e soluções técnicas"
    ],
    pros: [
      "Alta demanda no mercado",
      "Salários competitivos",
      "Possibilidade de trabalho remoto",
      "Aprendizado contínuo",
      "Oportunidades em diversos setores"
    ],
    cons: [
      "Necessidade de atualização constante",
      "Pode ser estressante em períodos de entrega",
      "Longas horas em frente ao computador",
      "Problemas complexos podem ser desafiadores"
    ]
  },
  {
    id: "medico",
    title: "Médico",
    category: "Saúde",
    description: "Profissional da saúde responsável por diagnosticar, tratar e prevenir doenças e condições de saúde.",
    salary: "R$ 8.000 - R$ 30.000+",
    education: "Superior em Medicina + Residência Médica",
    skills: ["Empatia", "Conhecimento Técnico", "Tomada de Decisão", "Comunicação"],
    marketOutlook: "Excelente - sempre em demanda",
    image: "https://images.unsplash.com/photo-1758691461513-88a0aef72160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NDM0MzYzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O médico é um profissional de saúde que diagnostica e trata doenças, lesões e outras condições de saúde. Realiza exames físicos, solicita e interpreta exames laboratoriais, prescreve medicamentos e tratamentos, e orienta pacientes sobre prevenção e cuidados com a saúde.",
    responsibilities: [
      "Examinar e diagnosticar pacientes",
      "Prescrever tratamentos e medicamentos",
      "Interpretar exames e resultados de testes",
      "Realizar procedimentos médicos e cirurgias",
      "Orientar pacientes sobre saúde preventiva"
    ],
    pros: [
      "Profissão respeitada e gratificante",
      "Altos rendimentos",
      "Impacto direto na vida das pessoas",
      "Diversas especialidades disponíveis",
      "Estabilidade profissional"
    ],
    cons: [
      "Formação longa e cara",
      "Longas horas de trabalho",
      "Alta responsabilidade",
      "Estresse emocional",
      "Plantões noturnos e finais de semana"
    ]
  },
  {
    id: "arquiteto",
    title: "Arquiteto",
    category: "Engenharia e Construção",
    description: "Profissional que projeta e planeja espaços construídos, integrando funcionalidade, estética e sustentabilidade.",
    salary: "R$ 4.500 - R$ 12.000",
    education: "Superior em Arquitetura e Urbanismo",
    skills: ["Criatividade", "Visão Espacial", "Desenho Técnico", "Conhecimento de Softwares"],
    marketOutlook: "Bom - mercado em crescimento",
    image: "https://images.unsplash.com/photo-1721132537184-5494c01ed87f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBibHVlcHJpbnRzfGVufDF8fHx8MTc3NDQ0MjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O arquiteto projeta edifícios, espaços internos e externos, considerando aspectos funcionais, estéticos, sustentáveis e econômicos. Trabalha em conjunto com engenheiros, designers e clientes para criar ambientes que atendam às necessidades específicas de cada projeto.",
    responsibilities: [
      "Desenvolver projetos arquitetônicos",
      "Criar plantas, maquetes e renderizações",
      "Acompanhar obras e construções",
      "Realizar estudos de viabilidade",
      "Coordenar equipes multidisciplinares"
    ],
    pros: [
      "Trabalho criativo e desafiador",
      "Possibilidade de deixar legado visual",
      "Projetos diversificados",
      "Reconhecimento profissional",
      "Pode atuar como autônomo"
    ],
    cons: [
      "Mercado competitivo",
      "Pressão de prazos e orçamentos",
      "Necessidade de atualização constante",
      "Responsabilidade técnica significativa"
    ]
  },
  {
    id: "professor",
    title: "Professor",
    category: "Educação",
    description: "Profissional dedicado ao ensino e formação de alunos em diversos níveis educacionais.",
    salary: "R$ 2.500 - R$ 8.000",
    education: "Licenciatura na área de atuação",
    skills: ["Comunicação", "Paciência", "Didática", "Empatia"],
    marketOutlook: "Estável - demanda constante",
    image: "https://images.unsplash.com/photo-1544191046-397b734b0891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwY2xhc3Nyb29tJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc3NDQyMDE1M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O professor é responsável por transmitir conhecimentos, desenvolver competências e formar cidadãos. Planeja aulas, elabora materiais didáticos, avalia o progresso dos alunos e contribui para o desenvolvimento integral dos estudantes.",
    responsibilities: [
      "Planejar e ministrar aulas",
      "Elaborar materiais didáticos",
      "Avaliar o desempenho dos alunos",
      "Participar de reuniões pedagógicas",
      "Orientar e apoiar o desenvolvimento estudantil"
    ],
    pros: [
      "Impacto positivo na formação de pessoas",
      "Férias escolares",
      "Oportunidade de aprendizado contínuo",
      "Reconhecimento social",
      "Diversos níveis de atuação possíveis"
    ],
    cons: [
      "Salários nem sempre competitivos",
      "Desafios comportamentais em sala",
      "Trabalho levado para casa",
      "Falta de recursos em algumas instituições"
    ]
  },
  {
    id: "engenheiro-civil",
    title: "Engenheiro Civil",
    category: "Engenharia e Construção",
    description: "Profissional que projeta, gerencia e supervisiona obras de infraestrutura e construção.",
    salary: "R$ 6.000 - R$ 15.000",
    education: "Superior em Engenharia Civil",
    skills: ["Cálculo", "Gestão de Projetos", "Liderança", "Conhecimento Técnico"],
    marketOutlook: "Bom - ligado ao desenvolvimento urbano",
    image: "https://images.unsplash.com/photo-1674062333283-41a1b59f0408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NzQ0NDI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O engenheiro civil planeja, projeta e supervisiona construções de edifícios, pontes, estradas e outras estruturas. Realiza cálculos estruturais, gerencia equipes, controla custos e prazos, e garante que as obras atendam às normas técnicas e de segurança.",
    responsibilities: [
      "Elaborar projetos estruturais",
      "Supervisionar obras e construções",
      "Gerenciar equipes e fornecedores",
      "Controlar custos e prazos",
      "Garantir conformidade com normas técnicas"
    ],
    pros: [
      "Bons salários",
      "Projetos desafiadores",
      "Diversas áreas de atuação",
      "Reconhecimento profissional",
      "Oportunidades em setor público e privado"
    ],
    cons: [
      "Responsabilidade técnica elevada",
      "Pode exigir viagens e deslocamentos",
      "Pressão por prazos e resultados",
      "Mercado cíclico conforme economia"
    ]
  },
  {
    id: "advogado",
    title: "Advogado",
    category: "Direito",
    description: "Profissional do direito que representa e defende interesses de clientes em questões jurídicas.",
    salary: "R$ 4.000 - R$ 20.000+",
    education: "Superior em Direito + OAB",
    skills: ["Argumentação", "Análise Crítica", "Oratória", "Ética"],
    marketOutlook: "Competitivo - mercado saturado em algumas áreas",
    image: "https://images.unsplash.com/photo-1627990316935-9c473904206e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBsZWdhbCUyMG9mZmljZXxlbnwxfHx8fDE3NzQ0NDI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O advogado atua na defesa de direitos e interesses de pessoas físicas, empresas e instituições. Elabora documentos jurídicos, representa clientes em processos judiciais e administrativos, presta consultoria legal e busca soluções para conflitos através de negociação e mediação.",
    responsibilities: [
      "Elaborar peças processuais",
      "Representar clientes em audiências",
      "Prestar consultoria jurídica",
      "Analisar contratos e documentos",
      "Acompanhar processos judiciais"
    ],
    pros: [
      "Profissão tradicional e respeitada",
      "Diversas áreas de especialização",
      "Possibilidade de altos rendimentos",
      "Autonomia para atuar como autônomo",
      "Impacto na defesa de direitos"
    ],
    cons: [
      "Mercado competitivo",
      "Necessidade de aprovação na OAB",
      "Burocracia e prazos rígidos",
      "Início de carreira pode ser difícil",
      "Atualização constante da legislação"
    ]
  },
  {
    id: "profissional-marketing",
    title: "Profissional de Marketing",
    category: "Comunicação e Marketing",
    description: "Especialista em criar estratégias para promover produtos, serviços e marcas no mercado.",
    salary: "R$ 3.500 - R$ 12.000",
    education: "Superior em Marketing, Publicidade ou áreas relacionadas",
    skills: ["Criatividade", "Análise de Dados", "Comunicação", "Estratégia"],
    marketOutlook: "Excelente - em constante evolução",
    image: "https://images.unsplash.com/photo-1749793716288-a5ab5ed3b0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzQ0NDI0NTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O profissional de marketing desenvolve e implementa estratégias para promover marcas, produtos e serviços. Realiza pesquisas de mercado, cria campanhas publicitárias, gerencia mídias sociais, analisa métricas e trabalha para aumentar a visibilidade e vendas de empresas.",
    responsibilities: [
      "Desenvolver estratégias de marketing",
      "Criar e gerenciar campanhas",
      "Analisar métricas e resultados",
      "Gerenciar presença digital da marca",
      "Realizar pesquisas de mercado"
    ],
    pros: [
      "Área criativa e dinâmica",
      "Constante inovação",
      "Oportunidades em diversos setores",
      "Possibilidade de trabalho remoto",
      "Crescimento com marketing digital"
    ],
    cons: [
      "Pressão por resultados",
      "Mudanças rápidas no mercado",
      "Pode exigir disponibilidade fora do horário",
      "Métricas constantes de performance"
    ]
  },
  {
    id: "chef-cozinha",
    title: "Chef de Cozinha",
    category: "Gastronomia",
    description: "Profissional especializado em preparar alimentos e criar experiências culinárias únicas.",
    salary: "R$ 3.000 - R$ 15.000",
    education: "Curso técnico ou superior em Gastronomia",
    skills: ["Criatividade", "Paladar Apurado", "Gestão", "Resistência Física"],
    marketOutlook: "Bom - setor gastronômico em expansão",
    image: "https://images.unsplash.com/photo-1592498546551-222538011a27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzc0MzM0MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O chef de cozinha é responsável pela criação de pratos, gestão da cozinha, coordenação de equipes e manutenção da qualidade dos alimentos. Desenvolve cardápios, experimenta novas receitas, controla custos e garante que os padrões de higiene e segurança alimentar sejam seguidos.",
    responsibilities: [
      "Criar e desenvolver cardápios",
      "Preparar pratos especiais",
      "Gerenciar equipe de cozinha",
      "Controlar estoque e custos",
      "Manter padrões de qualidade e higiene"
    ],
    pros: [
      "Profissão criativa",
      "Reconhecimento e prestígio",
      "Possibilidade de empreender",
      "Trabalho com paixão",
      "Oportunidades internacionais"
    ],
    cons: [
      "Horários irregulares",
      "Trabalho em finais de semana e feriados",
      "Ambiente de alta pressão",
      "Exigência física",
      "Início de carreira pode ser difícil"
    ]
  },
  {
    id: "designer-grafico",
    title: "Designer Gráfico",
    category: "Design e Criação",
    description: "Profissional criativo que desenvolve identidades visuais, layouts e materiais gráficos.",
    salary: "R$ 2.500 - R$ 10.000",
    education: "Superior em Design Gráfico ou áreas relacionadas",
    skills: ["Criatividade", "Softwares de Design", "Senso Estético", "Comunicação Visual"],
    marketOutlook: "Bom - demanda crescente no digital",
    image: "https://images.unsplash.com/photo-1709803312782-0c3b175875ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMGNyZWF0aXZlJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NDQzMjk4MHww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O designer gráfico cria conceitos visuais para comunicar ideias que inspiram, informam e cativam consumidores. Desenvolve layouts para diversos materiais como anúncios, brochures, revistas, relatórios corporativos, embalagens e websites, combinando arte e tecnologia.",
    responsibilities: [
      "Criar identidades visuais",
      "Desenvolver layouts e materiais gráficos",
      "Trabalhar com ilustração e tipografia",
      "Adaptar designs para diferentes mídias",
      "Apresentar conceitos criativos para clientes"
    ],
    pros: [
      "Trabalho criativo",
      "Possibilidade de trabalho remoto/freelance",
      "Portfólio diversificado",
      "Constante aprendizado",
      "Flexibilidade de atuação"
    ],
    cons: [
      "Mercado competitivo",
      "Pressão por prazos",
      "Necessidade de acompanhar tendências",
      "Feedback subjetivo",
      "Pode haver períodos sem projetos (freelance)"
    ]
  },
  {
    id: "contador",
    title: "Contador",
    category: "Finanças",
    description: "Profissional responsável pela gestão financeira, contábil e fiscal de empresas e pessoas.",
    salary: "R$ 3.500 - R$ 12.000",
    education: "Superior em Ciências Contábeis + CRC",
    skills: ["Organização", "Análise Numérica", "Atenção aos Detalhes", "Conhecimento Tributário"],
    marketOutlook: "Estável - sempre necessário",
    image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50YW50JTIwZmluYW5jaWFsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzc0NDQyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O contador gerencia as finanças e registros contábeis de empresas e indivíduos. Elabora demonstrações financeiras, realiza planejamento tributário, garante conformidade com legislações fiscais e contábeis, e fornece análises para auxiliar na tomada de decisões estratégicas.",
    responsibilities: [
      "Elaborar demonstrações financeiras",
      "Realizar apuração de impostos",
      "Manter registros contábeis",
      "Fazer planejamento tributário",
      "Orientar sobre questões fiscais"
    ],
    pros: [
      "Profissão essencial para empresas",
      "Estabilidade de carreira",
      "Possibilidade de trabalho autônomo",
      "Diversos setores de atuação",
      "Conhecimento valorizado"
    ],
    cons: [
      "Responsabilidade legal elevada",
      "Mudanças frequentes na legislação",
      "Trabalho repetitivo em alguns períodos",
      "Pressão em épocas de entrega de obrigações",
      "Necessidade de atualização constante"
    ]
  },
  {
    id: "jornalista",
    title: "Jornalista",
    category: "Comunicação e Marketing",
    description: "Profissional que investiga, coleta, produz e divulga informações de interesse público.",
    salary: "R$ 2.500 - R$ 10.000",
    education: "Superior em Jornalismo ou Comunicação Social",
    skills: ["Escrita", "Investigação", "Comunicação", "Ética"],
    marketOutlook: "Em transformação - migração para digital",
    image: "https://images.unsplash.com/photo-1711439858551-c96a3c310075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmFsaXN0JTIwcmVwb3J0ZXIlMjBuZXdzfGVufDF8fHx8MTc3NDM2OTQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    detailedDescription: "O jornalista apura, investiga e relata notícias e eventos de interesse público através de diversos meios de comunicação. Realiza entrevistas, pesquisa informações, escreve matérias, produz conteúdo multimídia e contribui para manter a sociedade informada sobre assuntos relevantes.",
    responsibilities: [
      "Investigar e apurar notícias",
      "Realizar entrevistas",
      "Escrever matérias jornalísticas",
      "Produzir conteúdo para diferentes mídias",
      "Verificar fontes e informações"
    ],
    pros: [
      "Trabalho dinâmico e variado",
      "Impacto social significativo",
      "Oportunidade de conhecer pessoas",
      "Aprendizado constante",
      "Liberdade criativa"
    ],
    cons: [
      "Prazos apertados",
      "Pressão constante",
      "Salários nem sempre competitivos",
      "Mercado em transformação",
      "Pode envolver situações de risco"
    ]
  }
];
