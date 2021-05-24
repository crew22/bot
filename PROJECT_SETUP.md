# Project Setup

## Languages

- [English](#English)
- [Türkçe](#T%C3%BCrk%C3%A7e)

### English

#### Requirements:
- Node LTS
- MongoDB (you can use MongoDB Atlas
- Discord API key (for api key, [Discord Devloper Portal](https://discord.com/developers/applications))

#### Setup:

- Clone this repository to your computer first (or download zip).
- Run `npm install` (or `yarn install`) command in the repository directory for installing dependencies.
- Configure the project according to you.
    + Duplicate *~/config/.env.example* file in ~/config direcotory.
    + Rename duplicated file like "*.env"*.
    + Configure the *".env"* file according to your own settings.
- Configure default prefix and default language in ~/config/discord.ts file.
- Run `npm run start` command in command prompt for running bot on production mode.
- *(extra)* Run `npm run dev` command in command prompt for running bot on development mode.

### Türkçe

#### Gereklilikler:

- Node LTS
- MongoDB (MongoDB Atlas kullanabilrisiniz
- Discord API key (api key için, [Discord Geliştiriciler Portalı](https://discord.com/developers/applications))

#### Kurulum:

- Öncelikle bu repository'i bilgisayarınıza clone'layın (ya da zip olarak indirin)
- Bağımlılıkları indirmek için `npm install` (ya da `yarn install`) komutunu, repository lokasyonunda açılmış bir komut penceresinde kullanın.
- Projeyi kendinize göre konfigüre edin.
    + ~/config klasörü içerisindeki *.env.example* dosyasını ~/config klasörü içerisine çifteleyin
    + Çiftelenmiş dosyanın ismini "*.env"* şeklinde değiştirin.
    + *".env"* dosyanızı kendi ayarlarınıza göre konfigüre edin.
- Varsayılan ön-ek ve varsayılan dili ~/config/discord.ts dosyası içerisinden ayarlayın.
- `npm run start` komutunu, botu ürün modunda çalıştırmak için repository lokasyonunda açılmış bir komut penceresinde kullanın.
- *(ekstra)* `npm run start` komutunu, botu geliştirme modunda çalıştırmak için repository lokasyonunda açılmış bir komut penceresinde kullanın.