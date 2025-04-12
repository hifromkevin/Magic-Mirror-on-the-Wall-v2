package types

import "magic-mirror-on-the-wall-backend/types/weatherTypes"

type WeatherResponse struct {
	Current  weatherTypes.WeatherCurrentResponse    `json:"current"`
	Forecast []weatherTypes.WeatherForecastResponse `json:"forecast"`
}