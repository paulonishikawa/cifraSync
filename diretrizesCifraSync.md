# CIFRASYNC — DIRETRIZES MESTRAS DO PROJETO

Versão: 1.0
Objetivo: Construir um aplicativo de leitura e sincronização de cifras para grupos de louvor, utilizando o projeto também como ferramenta prática de aprendizado de React moderno e TypeScript.

---

# 1. VISÃO DO PROJETO

O CifraSync será um aplicativo para músicos que permite visualizar cifras e letras de músicas de forma sincronizada.

A ideia principal:

> Todos os músicos do grupo acompanham a mesma posição da música em seus celulares, com mudança automática de seção baseada no BPM e na quantidade de compassos.

Exemplo:

Música: Mais Que Vencedores
BPM: 82
Compasso: 4/4

```
INTRO — 4 compassos
   ↓
VERSO — 8 compassos
   ↓
PRÉ-REFRÃO — 4 compassos
   ↓
REFRÃO — 8 compassos
   ↓
PONTE — 8 compassos
   ↓
REFRÃO — 8 compassos
```

No futuro, um líder poderá iniciar/controlar a música e todos os integrantes acompanharão a execução em tempo real.

---

# 2. OBJETIVO EDUCACIONAL

Este projeto não serve apenas para criar um aplicativo.

Ele será utilizado como projeto prático para aprender:

* React moderno;
* TypeScript;
* JavaScript moderno;
* gerenciamento de estado;
* Hooks;
* componentes;
* APIs;
* Node.js;
* REST;
* SQL;
* PostgreSQL;
* comunicação em tempo real;
* WebSockets;
* Git/GitHub;
* posteriormente React Native e Expo.

O usuário terminou um curso de React cujo conteúdo estava parcialmente desatualizado e ainda não iniciou os estudos de TypeScript.

Portanto:

> O projeto deve ensinar React moderno e TypeScript enquanto o aplicativo é desenvolvido.

Não assumir que o usuário já domina TypeScript.

---

# 3. FILOSOFIA DE DESENVOLVIMENTO

## 3.1 Construir aos poucos

O projeto deverá evoluir gradualmente.

Não tentar criar o aplicativo completo inicialmente.

Cada etapa deve gerar uma versão funcional.

## 3.2 Aprender fazendo

Sempre que surgir um conceito novo:

1. explicar o problema;
2. explicar o conceito;
3. mostrar um exemplo simples;
4. explicar como ele se aplica ao projeto;
5. implementar no projeto.

Evitar entregar grandes blocos de código sem explicação.

## 3.3 Simplicidade primeiro

Não adicionar:

* bibliotecas;
* frameworks;
* padrões arquiteturais;
* abstrações;
* banco de dados;
* backend;

antes de existir uma necessidade real.

## 3.4 O projeto é também um curso

Quando possível, preferir uma implementação que permita compreender o conceito.

Não escolher automaticamente a solução mais rápida se ela esconder justamente aquilo que estamos tentando aprender.

---

# 4. STACK PLANEJADA

## Inicial

* React
* TypeScript
* Vite
* HTML
* CSS
* Git
* GitHub

## Backend

Posteriormente:

* Node.js
* TypeScript
* API REST
* PostgreSQL
* Prisma

## Tempo real

Posteriormente:

* WebSocket ou Socket.IO

## Mobile

Posteriormente:

* React Native
* Expo

A stack poderá ser alterada se surgir uma razão técnica ou didática relevante.

---

# 5. ARQUITETURA PREVISTA

A arquitetura final deverá evoluir aproximadamente assim:

```
                CifraSync
                   │
                   ▼
          React + TypeScript
                   │
                   ▼
            Motor Musical
                   │
                   ▼
            Dados da Música
                   │
                   ▼
              API REST
                   │
                   ▼
          Node.js + TypeScript
                   │
                   ▼
              PostgreSQL
                   │
                   ▼
          WebSocket / Socket.IO
                   │
         ┌─────────┼─────────┐
         ▼         ▼         ▼
        🎸        🎹        🥁
      músico    músico    músico
```

No início, entretanto, teremos apenas:

```
React + TypeScript
```

Sem backend.

---

# 6. CONCEITO FUNDAMENTAL DO MOTOR MUSICAL

O coração do aplicativo será um motor capaz de transformar:

```
BPM
  ↓
duração da batida
  ↓
duração do compasso
  ↓
quantidade de compassos
  ↓
duração da seção
  ↓
posição atual da música
```

Exemplo:

120 BPM em 4/4:

```
1 batida = 0,5 segundo
1 compasso = 2 segundos
```

Portanto:

```
4 compassos = 8 segundos
8 compassos = 16 segundos
```

Esse mecanismo deverá funcionar primeiro em um único dispositivo.

Somente depois será implementada a sincronização entre dispositivos.

---

# 7. MODELO INICIAL DE DADOS

Uma música inicialmente terá:

```
Song
  ├── title
  ├── bpm
  ├── beatsPerBar
  └── sections
          ├── name
          └── bars
```

Exemplo conceitual:

```
{
  title: "Minha Música",
  bpm: 82,
  beatsPerBar: 4,
  sections: [
    {
      name: "Intro",
      bars: 4
    },
    {
      name: "Verso",
      bars: 8
    },
    {
      name: "Refrão",
      bars: 8
    }
  ]
}
```

Esse modelo será expandido posteriormente para incluir letras, acordes e outras informações.

---

# 8. ETAPAS DO PROJETO

==================================================
ETAPA 0 — PREPARAÇÃO
====================

Objetivo:

Preparar o ambiente e iniciar o projeto.

Aprender/revisar:

* Node.js;
* npm;
* Vite;
* estrutura de projeto React;
* TypeScript básico;
* Git;
* GitHub.

Resultado esperado:

Um projeto React + TypeScript funcionando localmente e versionado com Git.

---

==================================================
ETAPA 1 — PRIMEIRO PROTÓTIPO
============================

Objetivo:

Criar uma tela simples representando uma música.

Deve mostrar:

* título;
* BPM;
* fórmula de compasso;
* seção atual;
* compasso atual;
* Play;
* Pause;
* Reiniciar.

Exemplo:

```
MAIS QUE VENCEDORES

82 BPM
4/4

REFRÃO

Compasso 5 / 8

[████████░░]

▶ PLAY
⏸ PAUSE
↻ REINICIAR
```

Conceitos:

* componentes;
* JSX/TSX;
* props;
* useState;
* eventos;
* renderização condicional;
* listas;
* TypeScript básico.

---

==================================================
ETAPA 2 — MOTOR MUSICAL
=======================

Objetivo:

Fazer o aplicativo compreender tempo, batidas e compassos.

Implementar funções para:

* calcular duração da batida;
* calcular duração do compasso;
* calcular posição atual;
* identificar o compasso;
* identificar a seção;
* calcular progresso.

Conceitos:

* useEffect;
* useRef;
* timers;
* atualização de estado;
* diferença entre state e ref;
* custom hooks;
* tipos TypeScript.

IMPORTANTE:

Ainda não implementar sincronização entre celulares.

Primeiro o motor precisa funcionar corretamente em um único dispositivo.

---

==================================================
ETAPA 3 — ESTRUTURA DE MÚSICAS
==============================

Objetivo:

Parar de usar uma música fixa diretamente no código.

Criar modelos de dados tipados.

Conceitos:

* type;
* interface;
* arrays tipados;
* objetos tipados;
* union types quando necessário;
* props tipadas;
* formulários.

Resultado:

O aplicativo poderá trabalhar com diferentes músicas.

---

==================================================
ETAPA 4 — EDITOR DE MÚSICAS
===========================

Objetivo:

Permitir criar e editar músicas.

Funcionalidades:

* criar música;
* alterar título;
* alterar BPM;
* alterar fórmula de compasso;
* adicionar seção;
* remover seção;
* alterar quantidade de compassos;
* reorganizar seções.

Conceitos:

* estado complexo;
* useReducer;
* formulários;
* componentes reutilizáveis;
* imutabilidade;
* custom hooks.

---

==================================================
ETAPA 5 — CIFRAS E LETRAS
=========================

Objetivo:

Adicionar o conteúdo musical.

Uma seção poderá conter:

* letra;
* acordes;
* eventualmente indicações de execução.

Exemplo:

```
REFRÃO

G              D
Tu és digno de todo louvor

Em             C
Para sempre cantarei
```

Conceitos:

* modelagem de dados;
* componentes de apresentação;
* edição de texto;
* formatação;
* responsividade;
* acessibilidade.

---

==================================================
ETAPA 6 — PERSISTÊNCIA LOCAL
============================

Objetivo:

As músicas não desaparecerem quando o navegador for fechado.

Possibilidades:

* IndexedDB;
* outra solução apropriada.

Ainda NÃO utilizar PostgreSQL.

---

==================================================
ETAPA 7 — BACKEND E API
=======================

Objetivo:

Criar uma aplicação com dados centralizados.

Arquitetura:

```
React
  ↓
API REST
  ↓
Node.js
  ↓
PostgreSQL
```

Aprender:

* HTTP;
* REST;
* endpoints;
* CRUD;
* requests;
* responses;
* tratamento de erros;
* Node.js;
* PostgreSQL;
* SQL;
* Prisma.

---

==================================================
ETAPA 8 — USUÁRIOS E GRUPOS
===========================

Objetivo:

Permitir que músicos utilizem grupos de louvor.

Conceito:

```
GRUPO DE LOUVOR

    Líder
    ├── Guitarra
    ├── Baixo
    ├── Teclado
    └── Bateria
```

Possíveis funcionalidades:

* cadastro;
* login;
* criação de grupo;
* entrada através de código;
* integrantes;
* permissões.

Não implementar antes do núcleo musical estar funcionando.

---

==================================================
ETAPA 9 — SINCRONIZAÇÃO EM TEMPO REAL
=====================================

Objetivo:

Este é o grande diferencial do CifraSync.

Um líder inicia a música.

Os demais dispositivos acompanham a mesma posição.

Conceito:

```
              LÍDER
                │
                ▼
             SERVIDOR
          /      |      \
         /       |       \
        ▼        ▼        ▼
       🎸       🎹       🥁
```

A sincronização NÃO deve simplesmente mandar:

```
"vá para a seção 2"

"vá para a seção 3"

"vá para a seção 4"
```

Isso pode gerar diferenças entre os dispositivos.

A ideia é trabalhar com uma referência temporal compartilhada.

Exemplo conceitual:

```
{
  type: "PLAY",
  songId: "abc123",
  startedAt: ...,
  bpm: 82
}
```

Cada dispositivo calcula sua posição utilizando essa referência.

O servidor poderá enviar correções de sincronização quando necessário.

Conceitos:

* WebSocket;
* Socket.IO, se escolhido;
* eventos;
* latência;
* reconexão;
* sincronização de estado;
* relógio compartilhado.

---

==================================================
ETAPA 10 — MODO ENSAIO
======================

Possíveis funcionalidades:

* metrônomo;
* contagem de entrada;
* avançar seção;
* voltar seção;
* repetir seção;
* alterar BPM;
* iniciar de determinada seção;
* visualizar próxima seção.

---

==================================================
ETAPA 11 — APLICATIVO MOBILE
============================

Somente depois da aplicação web estar madura.

Tecnologia:

* React Native;
* Expo.

Objetivo:

Disponibilizar a aplicação em:

* Android;
* iPhone.

A lógica musical deverá ser mantida o mais independente possível da interface para permitir reutilização.

---

# 9. FUNCIONALIDADES FUTURAS — BACKLOG

Estas funcionalidades NÃO fazem parte do MVP:

* visualização específica para cada instrumento;
* capo;
* transposição de tom;
* metrônomo avançado;
* contagem de entrada;
* mudança de BPM durante a música;
* marcações especiais por compasso;
* mudanças de dinâmica;
* modo escuro;
* controle por tablet;
* repertórios;
* agenda de cultos;
* compartilhamento de músicas;
* importação/exportação;
* integração com backing tracks;
* sincronização com áudio;
* controle de equipamentos;
* inteligência artificial.

Novas ideias devem ser colocadas no backlog em vez de interromper a etapa atual.

---

# 10. REGRAS PARA O CHATGPT DURANTE O PROJETO

## REGRA 1 — NÃO PULAR ETAPAS

Não avançar para:

* backend;
* banco;
* WebSocket;
* React Native;

antes de o projeto estar preparado para isso.

---

## REGRA 2 — ENSINAR ANTES DE ABSTRAIR

Quando surgir um conceito novo:

```
Problema
   ↓
Conceito
   ↓
Exemplo simples
   ↓
Aplicação no projeto
   ↓
Código
```

---

## REGRA 3 — NÃO ENTREGAR CÓDIGO GIGANTE

Preferir pequenas implementações.

O usuário deve conseguir entender o que está escrevendo.

---

## REGRA 4 — TYPE SCRIPT PROGRESSIVO

O usuário ainda está iniciando TypeScript.

Portanto:

* explicar tipos;
* explicar interfaces;
* explicar generics quando surgirem;
* explicar unions;
* explicar tipagem de props;
* explicar tipagem de eventos;
* explicar hooks tipados.

Não assumir conhecimento prévio.

---

## REGRA 5 — REACT MODERNO

Priorizar práticas atuais de React.

Evitar padrões legados quando existir uma abordagem moderna apropriada.

Sempre que uma técnica antiga aparecer em material do curso do usuário, explicar se ela ainda é utilizada e qual é a abordagem moderna.

---

## REGRA 6 — DEPENDÊNCIAS COM MODERAÇÃO

Antes de adicionar uma biblioteca:

1. verificar se React/TypeScript resolve;
2. verificar se realmente precisamos da biblioteca;
3. explicar por que ela será utilizada.

Não adicionar dependências apenas por conveniência.

---

## REGRA 7 — CADA ETAPA DEVE FUNCIONAR

Não passar muito tempo criando arquitetura sem uma aplicação executável.

Sempre que possível:

```
implementar
    ↓
testar
    ↓
corrigir
    ↓
entender
    ↓
commit
```

---

## REGRA 8 — GIT DESDE O COMEÇO

Utilizar Git desde o primeiro projeto.

Criar commits pequenos e significativos.

Exemplo:

```
git commit -m "feat: create initial song player"
```

---

## REGRA 9 — EXPLICAR DECISÕES IMPORTANTES

Quando houver uma decisão técnica relevante, explicar:

* qual problema estamos resolvendo;
* quais alternativas existem;
* por que escolhemos determinada solução.

Não precisa transformar toda decisão em uma aula extensa.

---

## REGRA 10 — NÃO INVENTAR PROGRESSO

Se algo não foi implementado, não dizer que foi.

Se houver dúvida sobre o estado atual do projeto:

* perguntar;
* pedir o código;
* pedir os arquivos;
* verificar o que realmente existe.

Nunca assumir que uma funcionalidade foi concluída.

---

# 11. MODO "ANTI-DELÍRIO"

Se o usuário disser:

> "Você está delirando."

ou:

> "Volte às diretrizes."

ou:

> "Consulte o plano do projeto."

O ChatGPT deverá:

1. parar de adicionar funcionalidades aleatórias;
2. voltar a este documento;
3. identificar a etapa atual;
4. verificar o que já foi realmente implementado;
5. identificar qualquer desvio;
6. explicar o desvio;
7. retomar o desenvolvimento do ponto correto.

Não inventar etapas concluídas.

Não avançar por conta própria.

---

# 12. CRITÉRIO PARA CONCLUIR UMA ETAPA

Uma etapa só é considerada concluída quando:

* a funcionalidade principal funciona;
* o usuário entende os conceitos principais;
* o código está minimamente organizado;
* não existe erro conhecido bloqueando a funcionalidade;
* existe uma versão estável no Git.

Depois:

```
REVISAR
   ↓
COMMIT
   ↓
PRÓXIMA ETAPA
```

---

# 13. PRIMEIRA META DO PROJETO

A primeira versão será propositalmente pequena.

Criar uma aplicação React + TypeScript capaz de:

1. exibir uma música;
2. exibir BPM;
3. exibir fórmula de compasso;
4. exibir seção atual;
5. exibir compasso atual;
6. iniciar a contagem;
7. pausar;
8. reiniciar;
9. avançar automaticamente para a próxima seção.

A primeira versão NÃO terá:

* login;
* banco de dados;
* backend;
* WebSocket;
* usuários;
* grupos;
* React Native;
* sistema completo de cifras.

---

# 14. ESTADO ATUAL

ETAPA ATUAL:

```
ETAPA 0 — PREPARAÇÃO
```

PRÓXIMO OBJETIVO:

Preparar o ambiente e criar o projeto React + TypeScript utilizando Vite.

Depois:

```
Git
  ↓
primeiro commit
  ↓
estrutura inicial
  ↓
ETAPA 1
  ↓
primeiro protótipo
```

---

# 15. REGRA PRINCIPAL

O projeto deve crescer assim:

```
PEQUENO
   ↓
FUNCIONAL
   ↓
COMPREENDIDO
   ↓
MELHORADO
   ↓
MAIS COMPLETO
```

Nunca:

```
IDEIA
   ↓
15 BIBLIOTECAS
   ↓
BACKEND
   ↓
WEBSOCKET
   ↓
BANCO
   ↓
REACT NATIVE
   ↓
CONFUSÃO
```

O objetivo é construir um aplicativo real enquanto o usuário se torna progressivamente um desenvolvedor React/TypeScript melhor.

---

FIM DAS DIRETRIZES — CIFRASYNC v1.0
