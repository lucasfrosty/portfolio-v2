---
slug: '/blog/pt/tc39'
date: '2020-11-19'
title: 'TC39 e o futuro do JavaScript'
---

Olá meu povo bonito, como é que vocês estão?

Faz muito tempo escrevi um artigo e muita coisa aconteceu desde então, mas eu não vou falar sobre isso agora, prefiro deixar esse papo pro final do artigo e ir direto pro que interessa: O TC39.

<hr />

Talvez você já tenha se perguntado como funciona o ciclo de inovação do Javascript e como novas funcionalidades são adicionadas na linguagem. Nesse artigo eu vou tentar explicar mais ou menos como é esse processo e quem são o grupo de pessoas por trás disso.

Mas pra falar sobre esse assunto, eu preciso começar com uma breve resumida na história do JavaScript e do ECMAScript. Vamo nessa?

## JavaScript/ECMAScript e a confusão de nomeclaturas

![javascript-vs-ecmaScript](https://user-images.githubusercontent.com/15235605/99622226-b5e0c680-29f7-11eb-8f0e-c76fcb9c2083.png)

Muita gente se confunde na hora de falar o que é Javascript e o ECMAScript e muitas vezes até pensam que eles são a mesma coisa, então vamo esclarecer essa parada de uma vez por todas. E pra isso vamos esclarecer alguns conceitos:

**ECMA** é uma sigla que significa _European Computer Manufacturers Association_, nada mais é do que uma organização sem fins lucrativos responsável por desenvolver padrões e suas documentações. Basicamente eu diria que eles são tipo um ISO. Ah, em 1994 eles mudaram seu nome e se tornaram a [ECMA internacional](http://www.ecma-international.org/), o que faz sentido uma vez que os padrões criados ultrapassaram as fronteiras Européias.

E, em 1996, foi essa organização que o Netscape escolheu para submeter as especificações do Javascript, então a partir daí o ECMAScript foi criado e suas especificações ficam salvas em um documento chamado [ECMA-262](https://tc39.es/ecma262/).

Então pra resumir:

- JavaScript: a linguagem.
- ECMAScript: as especificações e padrões que o JavaScript usa na sua implementação.

**ps:** O ECMA acabou ficando mais conhecido pelo ECMAScript, porém eles também são responsáveis por padronizar outras linguagens como Dart, C# e até o grande sistema de CLI (Command Line Interface).

<hr />

## Tá, mas e o TC39?

![tc39](https://user-images.githubusercontent.com/15235605/99621800-c2185400-29f6-11eb-819b-abedfa69f1ce.png)

A sigla TC39 significa _Technical Comitee 39_, mas o que seria isso?

Bom, agora precisamos entender que, o ECMA é um organização precisa de comitês que são responsáveis por se reunirem regularmente para discutir e dar continuidade (ou não) às propostas de funcionalidades e também discutir sobre as novas propostas que foram submetidas. Cada comitê é totalmente independente e feito por grupos de pessoas diferentes. No caso do padrão do ECMAScript, esse comitê é o comitê de número 39, e por isso o nome [TC39](https://www.ecma-international.org/memento/tc39.htm).

Lembra que eu falei que o ECMA também é responsável por padronizar outras linguagens? Então, outros exemplos de comitês da organização ECMA são o [TC52](https://www.ecma-international.org/memento/tc52.htm), que é responsável pelos padrões da linguagem Dart, eu o [TC49](https://www.ecma-international.org/memento/tc49.htm) que é responsável por vários padrões como C# e o CLI.

<br />

Bom, agora que você já entendeu o que é o TC39, vamos entender como funciona o processo de adição de novas funcionalidades dentro do ECMAScript.

O processo é dividido em 5 fases, e, caso a proposta chegue até a última fase, a funcionalidade é oficialmente adicionada ao ECMAScript. Vamos a cada uma delas:

<hr />

### Fase 0: Strawperson

Esta é a fase inicial, e acontece caso:

- Uma proposta está para ser apresentada ao comitê por um membro do próprio TC39, ou
- A proposta ja foi apresentada, porém não foi nem rejeitada nem atingiu os critérios para chegar à Fase 1.

Todas as propostas na fase 0 podem ser vistas [aqui](https://github.com/tc39/proposals/blob/master/stage-0-proposals.md).

<hr />

### Fase 1: Proposal

Essa fase acontece quando a proposta já está formalizada e desperta o interesse do comitê. A idéia é que nessa fase o problema passe a explorado de maneira mais experimental, com casos de uso e uma API de alto nível já proposta e discutida. Também é nessa fase que um repositório no Github é criado para capturar todos esses requerimentos.

Todas as propostas na fase 1 podem ser vistas [aqui](https://github.com/tc39/proposals/blob/master/stage-1-proposals.md).

<hr />

### Fase 2: Draft

Nessa fase o comitê espera que a funcionalidade em sí seja desenvolvida, toda a parte principal da semântica da API seja criada, porém alguns detalhes não necessariamente precisam estar finalizados. Também é nessa fase que os desenvolvedores da funcionalidade comecem a desenvolver utilizando um compilador como o Babel.

Todas as propostas na fase 2 podem ser vistas [aqui](https://github.com/tc39/proposals#stage-2).

<hr />

### Fase 3: Candidate

Nessa fase espera-se que a toda a semântica e API já estejam finalizada e a solução já está completa. A idéia desta fase é que o público já comece a usar e dar feedback e apenas mudanças extremamente necessárias vindas desse feedback serão implementadas.

Todas as propostas na fase 3 podem ser vistas [aqui](https://github.com/tc39/proposals#stage-3).

<hr />

### Fase 4: Finished

Uma proposta chega nesta fase quando 2 implementações independentes passam nos testes de aceitação.

As propostas nessa fase serão adicionadas à proxima especificação do ECMAScript, que é atualizada anualmente.

Todas as propostas na fase 4 podem ser vistas [aqui](https://github.com/tc39/proposals/blob/master/finished-proposals.md).

<hr />

## Alguns exemplos de funcionalidades

### [Optional Chaining](https://github.com/tc39/proposal-optional-chaining)

Essa eu também tenho usado já há um tempo através do Babel. Sem dúvidas uma das minhas preferidas. Quem lida com objetos dinâmicos (principalmente os que vêm através de uma API), sabe o quanto é difícil lidar com propriedades que podem ser null ou undefined e o quão complicado é lidar com eles dentro de um check condicional. O Optional Chaining veio pra facilitar nossa vida nesse quesito.

```jsx
// antes
const city = user && user.address && user.address.city;

// depois
const city = user?.address?.city;
```

Existem alguns gotchas no seu uso, porém vale muito a pena. Me salva umas boas linhas de códigos.

Essa funcionalidade chegou à fase 4 em Dezembro de 2019 e foi publicada na especificação de 2020.

<hr />

### [Numeric separator](https://github.com/tc39/proposal-numeric-separator)

Escrever números muito grandes em Javascript é uma tarefa complicada. Essa "nova" funcionalidade nos ajuda a escrever numeros com varios digitos de uma maneira simples de ler:

```js
// antes
const oneMillion = 1000000;

// depois
const oneMillion = 1_000_000;
```

Essa feature já está disponível no Babel eu já venho usando há um tempo. Na verdade eu fiquei até surpreso de saber que essa funcionalidade não fazia parte do ECMAScript ainda.

No momento que eu escrevo este artigo essa proposta está na fase 4 e será publicada na versão do que vem (2021).

<hr />

### [Record and Tuples](https://github.com/tc39/proposal-record-tuple)

Não quero entrar muito em detalhes sobre esse proposal até porque está muito cedo pra isso mas também porque pra explicar a sua importância eu teria que falar sobre tipos primitivos e não primitivos e esse tema por sí só já vale um artigo (quem sabe?). Mas bem resumidamente o que dá pra concluir sobre:

Record seria uma "evolução" do Object. Tuple seria uma "evolução" do Array.

Mas a parte mais importante pra mim é a questão da igualdade, nela você poderia fazer algo como:

```js
const areObjectsEqual = {a: 1, b: 2} === {a: 1, b: 2} // false
const areRecordsEqual = #{a: 1} === #{a: 1} // true

const areArraysEqual = [1, 2] === [1, 2] // false
const areTuplesEqual = #[1, 2] === #[1, 2] // true
```

Isso vai ser extramente poderoso! No React por exemplo, utilizar Records e Tuples vai diminuir e muito a quantidade de re-renders indesejados. Vamos torcer pra chegar na fase 3.

No momento que eu escrevo este artigo essa proposta está na fase 2.

<hr />

### Fontes:

- https://github.com/tc39
- https://tc39.es/
- http://www.ecma-international.org/
- https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript

<hr />

## Isso é tudo, pessoal

Primeiramente obrigado por ter chegado até aqui. Espero que você tenha aprendido algo novo hoje e que esse artigo tenha te ajudado de alguma forma.

Meu último artigo tinha sido escrito em fevereiro de 2018, então fazem quase 3 anos que eu não fazia isso. Desde então muita coisa rolou: eu saí da minha terra natal, larguei minha (segunda) faculdade pra realizar meu sonho de morar em terras Canadenses, e fazendo aquilo que eu amo. Talvez eu escreva algo sobre isso no futuro falando sobre tudo: a empresa que eu trabalho e como é o processo e também algumas dicas pra quem quer seguir o mesmo rumo.

Nessa minha jornada uma das coisas que eu sempre pensava era sobre voltar a escrever. Gastei alguns dias fazendo essa plataforma aqui quase que do 0 (apesar de que o Gatsby ajuda bastante) porque eu acho que chegou o momento de voltar. Então se você gostou desse artigo e quer acompanhar meus próximos posts, se inscreve na minha Newsletter aí em baixo, basta digitar seu email e eu vou te mandar uma notificaçãozinha sempre que tiver um post novo :)

No mais, aqui estão minhas redes sociais caso você queira me seguir:

- [Github](https://github.com/lucasfrosty)
- [Linkedin](https://www.linkedin.com/in/lucasfrosty/)
- [Instagram](https://www.instagram.com/lucasfrosty/)

Acho que é isso, falow!!
