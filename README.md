## Tecnologias
- **Karma**: Test runner JS que roda em Node.js.
- **Jasmine/Jest:** Framework para escrever teste para codigo Js. Jasmine já vem no pacote default do angular.
- **Ferramentas de teste:** Jasmine, Jest, Mocha,QUnit, etc.

## Oque são testes unitários
É uma verificação feita com uma pequena porção do  código.
Cada função ganha uma atenção detalhada, de modo a otimzar o processo de identificação de erros.

## Dicas
1. Teste não pode ser frágil
2. Funções pequenas / metodos (máximo 10 linhas de codigo)
3. Nomeação adequada
4. Responsabilidade unica
5. Acompanhar code coverage

## 3 A's
- **A**rrange: Organize o estado dos dados para configurá-los para teste.
- **A**ct: Aja sobre os dados por meio de algum método que execute uma ação.
- **A**ssert: Afirmar que o resultado de agir sobre esses dados é o que esperamos que seja.

## Etapas antes de escrever o teste
1. Analisar o metodo para saber quantos e quais testes serão necessários 

## Patterns (Fácies de testar)
* State Changes (métodos que modificam o valor de uma ou mais propriedades.)
* Forms
* Events (output properties)
* Services

## UnitTesting Limitations (Limitações nos testes, não é facil testar)
* Routers
* Template bidings (Se clicarmos em um botão no template, não podemos garantir se o método correspondente no componente é chamado ou não)
