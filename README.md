# Magic-Mirror-on-the-Wall

A smart, AI-driven Magic Mirror with a Go backend and a React frontend. Displays personalized info like weather, news, jokes, date and time, and more. Features wake-word voice control to open OpenAI conversational responses. Future upgrades include facial recognition to customize UI based on the user.

---

## 📚 Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Getting Started](#getting-started)
   - [Clone the Repo](#clone-the-repo)
   - [Install Dependencies](#install-dependencies)
     - [Frontend](#frontend)
     - [Backend](#backend)
     - [Run Makefile](#run-makefile)
     - [Run Docker](#run-docker)
   - [Requirements](#requirements)
5. [Future Enhancements](#future-enhancements)
6. [License](#license)
7. [Feedback / Contributing](#contributing)
8. [Screenshots](#screenshots)

---

## 🚀 Features

- 🌤️ Live weather updates (AccuWeather API)
- 📰 Current news headlines
- 🤪 Daily dad jokes (icanhazdadjoke API)
- 🧠 Wake-word detection with Porcupine
- 🗣️ Voice-to-text via Web Speech API
- 🧞 Responses powered by OpenAI's Chat API
- 🔊 Text-to-speech responses via OpenAI API
- 🧍 Facial recognition for personalized experiences (planned)
- 📅 Google Calendar integration (coming soon)
- 🎵 Spotify music integration (planned)
- 🚗 Uber ride request integration (planned)

---

## 🧱 Tech Stack

| Frontend       |           Backend            |                     Other |
| :------------- | :--------------------------: | ------------------------: |
| React (Vite)   |           Go (Gin)           |                    Docker |
| TypeScript     |           REST API           |     Porcupine (Wake Word) |
| SCSS           |          OpenAI API          | Web Speech/Text-to-Speech |
| TanStack Query | Facial Recognition (planned) |

---

## 📁 Project Structure

```
magic-mirror-on-the-wall/
├── frontend/ # React frontend (Vite + TS)
├── backend/ # Go backend (API layer, routes)
├── .env # Environment variables
├── Dockerfile # Containerization
├── docker-compose.yml
└── README.md
```

---

## 🌱 Getting Started

### Clone the Repo

```
git clone https://github.com/hifromkevin/Magic-Mirror-on-the-Wall-v2.git
cd Magic-Mirror-on-the-Wall-v2
```

### Install Dependencies

#### Frontend

_From parent directory_

```
cd frontend
npm install
npm run dev
```

#### Backend

_From parent directory_

```
cd backend
go run main.go
```

#### Run Makefile

_From parent directory_

```
make build
```

#### Run Docker

_From parent directory_

```
docker-compose up --build
```

### Requirements

_Tested on the following versions_
**Node Version**: `v23.9.0`
**NPM and NPX Version**: `v10.9.2`
**Go Version**: `go1.24.2`

---

## 🔮 Future Enhancements

- Facial recognition via camera input
- Multi-user profile system
- Spotify playback control
- Uber ride ordering integration
- Smart home API integrations (e.g., Philips Hue, Nest)

---

## 📝 License

MIT License. See the [LICENSE](LICENSE) file for more details.

---

## 💬 Feedback / Contributing

Feel free to open issues or PRs. More features and optimizations are on the horizon!

---

## 📷 Screenshots

![Magic Mirror on the Wall](mirror-ui.png?raw=true)
