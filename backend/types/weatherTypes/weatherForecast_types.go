package weatherTypes

type WeatherForecastData struct {
	WeatherText  string                  `json:"weatherText"`
	ForecastData []WeatherSingleForecast `json:"forecastData"`
}

type WeatherSingleForecast struct {
	Date            string  `json:"date"`
	TemperatureHigh float64 `json:"temperatureHigh"`
	TemperatureLow  float64 `json:"temperatureLow"`
	IconDay         int     `json:"iconDay"`
	IconDayPhrase   string  `json:"iconDayPhrase"`
	IconNight       int     `json:"iconNight"`
	IconNightPhrase string  `json:"iconNightPhrase"`
}

type WeatherForecastResponse struct {
	Headline       Headline        `json:"Headline"`
	DailyForecasts []DailyForecast `json:"DailyForecasts"`
}

type Headline struct {
	EffectiveDate      string `json:"EffectiveDate"`
	EffectiveEpochDate int64  `json:"EffectiveEpochDate"`
	Severity           int    `json:"Severity"`
	Text               string `json:"Text"`
	Category           string `json:"Category"`
	EndDate            string `json:"EndDate"`
	EndEpochDate       int64  `json:"EndEpochDate"`
	MobileLink         string `json:"MobileLink"`
	Link               string `json:"Link"`
}

type DailyForecast struct {
	Date        string                   `json:"Date"`
	EpochDate   int64                    `json:"EpochDate"`
	Temperature TemperatureRangeForecast `json:"Temperature"`
	Day         DayNight                 `json:"Day"`
	Night       DayNight                 `json:"Night"`
	Sources     []string                 `json:"Sources"`
	MobileLink  string                   `json:"MobileLink"`
	Link        string                   `json:"Link"`
}

type TemperatureRangeForecast struct {
	Minimum Measurement `json:"Minimum"`
	Maximum Measurement `json:"Maximum"`
}

type DayNight struct {
	Icon             int    `json:"Icon"`
	IconPhrase       string `json:"IconPhrase"`
	HasPrecipitation bool   `json:"HasPrecipitation"`
}
