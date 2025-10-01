# 📚 Buscante - Angular & RxJS  

Projeto desenvolvido durante o curso da **Alura** para explorar conceitos de **programação reativa com RxJS** e o **consumo de APIs no ecossistema Angular**.  
A aplicação consiste em uma **estante de livros virtual** que busca informações em tempo real utilizando a **API do Google Books**.  

---

## ⚙️ Tecnologias e Conceitos Aplicados  

### 🔗 Consumo de API Externa  
- Requisições **GET** à API do Google Books com `HttpClientModule`.  
- Adaptação da resposta da API (JSON) para as **interfaces da aplicação**.  

### ⚡ Programação Reativa com RxJS  
- Uso do padrão **Observer** para lidar com fluxos de dados assíncronos.  
- **Composição de operadores** com `pipe()` para criar streams de dados complexas e legíveis.  
- **Transformação de dados**: `map` para extrair e moldar as informações recebidas.  
- **Performance e Otimização de Buscas**:  
  - `debounceTime` → aguarda o usuário parar de digitar antes da requisição.  
  - `filter` → evita buscas vazias.  
  - `switchMap` → substitui requisições anteriores por novas.  
- **Tratamento de Erros**: `catchError` e `EMPTY` para gerenciar falhas sem quebrar a aplicação.  

### 🏗️ Arquitetura Angular  
- Separação de responsabilidades entre:  
  - **Smart Components (Inteligentes)**.  
  - **Dumb Components (Apresentação)**.  
- Uso do `async` pipe para `subscribe/unsubscribe` automático no template, evitando vazamento de memória.  

### 🛠️ Pipes Customizados  
- Criação de um **pipe customizado** para formatar informações específicas no template.  

---

## 💡 Principais Aprendizados  

Este projeto me permitiu:  

- Construir **fluxos de dados reativos e performáticos** com RxJS (`map`, `switchMap`, `debounceTime`).  
- Integrar uma aplicação Angular com uma **API externa** de forma robusta.  
- Implementar uma **busca dinâmica e otimizada**, melhorando a experiência do usuário.  
- Gerenciar o **ciclo de vida de Observables**, evitando vazamentos de memória com `async pipe`.  
- Desenvolver um **tratamento de erros elegante**, exibindo mensagens claras e garantindo a estabilidade da aplicação.  

---