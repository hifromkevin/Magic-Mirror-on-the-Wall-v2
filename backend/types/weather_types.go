package types

import "magic-mirror-on-the-wall-backend/types/weatherTypes"

type WeatherResponse struct {
	Current  weatherTypes.WeatherCurrentData        `json:"current"`
	Forecast weatherTypes.WeatherForecastData       `json:"forecast"`
	Location string                                 `json:"location"`
}