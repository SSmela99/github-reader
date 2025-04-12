# Aplikacja w ramach zadania dla firmy Bluebolt

## Opis

Jest to aplikacja stworzona w ramach zadania rekrutacyjnego dla firmy Bluebolt. Aplikacja umożliwia logowanie się przez GitHub i wyświetlanie repozytoriów użytkownika. Została zaprojektowana z uwzględnieniem dwóch głównych części: frontend oraz proxy, które pozwala uniknąć problemów związanych z CORS.

## Struktura projektu

Projekt podzielony jest na dwie główne części:

1. **Frontend** – Interfejs użytkownika, stworzony przy użyciu React. Umożliwia użytkownikowi logowanie się przez GitHub, przeglądanie swoich repozytoriów oraz szczegółowych informacji o pojedynczych repozytoriach.
2. **Proxy** – Backend działający jako proxy do komunikacji z GitHub API, aby uniknąć problemów z CORS. Dzięki temu frontend może w sposób bezpieczny komunikować się z GitHub, nie napotykając na ograniczenia przeglądarki.

## Konfiguracja

Aby aplikacja działała od razu, w projekcie zostały wgrane pliki `.env` z odpowiednimi ustawieniami. Możesz je znaleźć w katologu backend.

## Instalacja

1. Sklonuj repozytorium:

    ```bash
    git clone https://github.com/SSmela99/github-reader.git

    ```

2. Instalacja oraz uruchomienie frontu:

    ```bash
    cd frontend
    npm install
    npm run dev

    ```

    Aplikacja powinna uruchomić się pod adresem http://localhost:5173/

3. Instalacja oraz uruchomienie backendu:

    ```bash
    cd backend
    npm install
    npm run dev
    ```

    Aplikacja powinna uruchomić się pod adresem http://localhost:4000/

## Wymagania

Aby uruchomić aplikację, musisz mieć zainstalowaną wersję Node.js:

-   **Node.js** w wersji **16.x** lub wyższej
-   **npm** (dołączony do Node.js)

Sprawdź wersję Node.js w swoim systemie:

```bash
node -v
```

