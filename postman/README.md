# ⚙️ Setting Up Postman for Magic Mirror on the Wall

Follow these steps to configure Postman for testing the Magic Mirror on the Wall API.

---

### ⬇️ Download Required Files

- `Magic Mirror.postman_collection.json`
  (Contains the API request collection)
- `Magic Mirror on the Wall.postman_environment.json`
  (Contains the environment variables)

---

### 🏗️ Configure Environment Variables

Before using the environment file, update the following secrets in `Magic Mirror on the Wall.postman_environment.json`:

- 🌤️ `accuweatherAPI`

  - Obtain your API key from [AccuWeather Developer Portal](https://developer.accuweather.com/apis).
  - Paste the key into the `"value"` field for `accuweatherAPI`.

- 🖥️ `ipInfoApi`

  - Obtain your API key from [IPInfo](https://ipinfo.io/).
  - Paste the key into the `"value"` field for `ipInfoApi`.

- 📍 `locationKey`

  - Use the following API to retrieve the locationKey for your desired ZIP code: `http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey={{accuweatherAPI}}&q={{ZIP CODE}}`
    - Replace `{{accuweatherAPI}}` with your AccuWeather API key.
    - Replace `{{ZIP CODE}}` with the desired ZIP code.
    - Copy the Key value from the response and paste it into the `"value"` field for `locationKey`.

- 🗞️ `newsAPI`

  - Obtain your API key from [News API](https://newsapi.org).
  - Paste the key into the `"value"` field for `newsAPI`.

- 🤖 `openAI`

  - Obtain your API key from OpenAI.
  - Paste the key into the "value" field for openAI.

---

### ⬆️ Import Files into Postman

1. Open Postman.
1. Import the following files:

   - Magic Mirror.postman_collection.json
   - Magic Mirror on the Wall.postman_environment.json

1. Set the active environment to Magic Mirror on the Wall in Postman.

---

### 🚀 You're Ready to Go!

You can now use Postman to test the Magic Mirror on the Wall API. Make sure your environment variables are correctly set, and enjoy exploring the API!
