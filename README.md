# Campus Multiplataforma

<p align="center">
  <img src="./assets/images/cover.png" alt="Campus Multiplataforma Logo">
</p>

## Descrição

O **Campus Multiplataforma** é um aplicativo desenvolvido como parte da disciplina **Campus Multimídia** do curso de Jornalismo da Universidade de Brasília. Seu objetivo é unificar todas as publicações do jornal _Campus_ em um único aplicativo, centralizando o conteúdo de todos os canais de comunicação (impresso, digital e redes sociais). 

A plataforma faz uso de **inteligência artificial** para otimizar o processo jornalístico, auxiliando na curadoria de conteúdo, sugestão de pautas e distribuição eficiente das notícias, integrando diferentes mídias de forma eficiente e acessível.

Este projeto está sendo desenvolvido com **React Native** no front-end, utilizando o ambiente **Expo**, e **Nest.js** no back-end. Ambas as aplicações utilizam **TypeScript** para garantir um código robusto e escalável. A infraestrutura é totalmente dockerizada para facilitar o desenvolvimento, a implantação e o escalonamento. Além disso, **Python** será utilizado para integrar as funcionalidades de inteligência artificial.

## Integrantes

- **Pedro Henrique** - Engenharia de Software, Universidade de Brasília  
  [LinkedIn](https://www.linkedin.com/in/pedro-henrique-monteiro-nascimento-069b0b2b6) | [GitHub](https://github.com/pedronascimentos)

- **Pedro Fernandes** - Ciências da Computação, Universidade de Brasília  
  [LinkedIn](https://www.linkedin.com/in/pedrofernandss) | [GitHub](https://github.com/pedrofernandss)

## Tecnologias Utilizadas

### Front-end
- **React Native** (Expo)
- **TypeScript**
- **Docker**

### Back-end
- **Nest.js**
- **TypeScript**
- **Docker**
- **Python** (para integração de IA)

## Como Rodar o Projeto

### 1. Clonar o repositório:
```bash
git clone https://github.com/seu-usuario/campus_multiplataforma.git
```

### 2. Acessar o diretório do projeto:
```bash
cd campus_multiplataforma/
```

### 3. Alterar o Dockerfile:
No Dockerfile, altere a variável de ambiente `REACT_NATIVE_PACKAGER_HOSTNAME` para o **IP da sua máquina local**.

```dockerfile
ENV REACT_NATIVE_PACKAGER_HOSTNAME="SEU_IP_LOCAL"
```

Isso permite que o Expo se comunique corretamente com o dispositivo.

### 4. Construir a imagem Docker:
```bash
docker build -t campusmultiplataforma-front .
```

### 5. Iniciar o container e entrar como root:
```bash
docker run -it --rm -p 8081:8081 -p 19006:19006 --user root campusmultiplataforma-front /bin/bash
```


### 6. Acessar o app no celular:
- **Baixe o app Expo Go** (iOS/Android).
- Escaneie o QR Code gerado pelo Expo.
- Certifique-se de que o celular e o computador estão na mesma rede local.


Contribuições são bem-vindas! Para reportar bugs ou sugerir melhorias, por favor, abra uma **issue** ou envie um **pull request**.

## Licença

Este projeto é licenciado sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

<p align="center">
  <em>Desenvolvido por Pedro Henrique e Pedro Fernandes - Universidade de Brasília</em>
</p>
