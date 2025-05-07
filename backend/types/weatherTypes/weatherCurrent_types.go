package weatherTypes

type WeatherCurrentData struct {
	WeatherText              string      `json:"weatherText"`
	WeatherIcon              int         `json:"weatherIcon"`
	Temperature              float64     `json:"temperature"`
	RealFeelTemperature      float64     `json:"realFeel"`
	RealFeelTemperatureShade float64     `json:"realFeelShade"`
	RelativeHumidity         int         `json:"relativeHumidity"`
	Wind                     WindValues  `json:"wind"`
	UVIndex                  int         `json:"uVIndex"`
	UVIndexText              string      `json:"uVIndexText"`
	Visibility               Measurement `json:"visibility"`
	IsDayTime                bool        `json:"isDayTime"`
}

type WeatherCurrentResponse struct {
	LocalObservationDateTime       string               `json:"LocalObservationDateTime"`
	EpochTime                      int64                `json:"EpochTime"`
	WeatherText                    string               `json:"WeatherText"`
	WeatherIcon                    int                  `json:"WeatherIcon"`
	HasPrecipitation               bool                 `json:"HasPrecipitation"`
	PrecipitationType              *string              `json:"PrecipitationType"`
	IsDayTime                      bool                 `json:"IsDayTime"`
	Temperature                    Temperature          `json:"Temperature"`
	RealFeelTemperature            RealFeelTemperature  `json:"RealFeelTemperature"`
	RealFeelTemperatureShade       RealFeelTemperature  `json:"RealFeelTemperatureShade"`
	RelativeHumidity               int                  `json:"RelativeHumidity"`
	IndoorRelativeHumidity         int                  `json:"IndoorRelativeHumidity"`
	DewPoint                       Measurement          `json:"DewPoint"`
	Wind                           Wind                 `json:"Wind"`
	WindGust                       WindGust             `json:"WindGust"`
	UVIndex                        int                  `json:"UVIndex"`
	UVIndexText                    string               `json:"UVIndexText"`
	Visibility                     Measurement          `json:"Visibility"`
	ObstructionsToVisibility       string               `json:"ObstructionsToVisibility"`
	CloudCover                     int                  `json:"CloudCover"`
	Ceiling                        Measurement          `json:"Ceiling"`
	Pressure                       Measurement          `json:"Pressure"`
	PressureTendency               PressureTendency     `json:"PressureTendency"`
	Past24HourTemperatureDeparture Measurement          `json:"Past24HourTemperatureDeparture"`
	ApparentTemperature            Measurement          `json:"ApparentTemperature"`
	WindChillTemperature           Measurement          `json:"WindChillTemperature"`
	WetBulbTemperature             Measurement          `json:"WetBulbTemperature"`
	WetBulbGlobeTemperature        Measurement          `json:"WetBulbGlobeTemperature"`
	Precip1hr                      Measurement          `json:"Precip1hr"`
	PrecipitationSummary           PrecipitationSummary `json:"PrecipitationSummary"`
	TemperatureSummary             TemperatureSummary   `json:"TemperatureSummary"`
	MobileLink                     string               `json:"MobileLink"`
	Link                           string               `json:"Link"`
}

type Temperature struct {
	Metric   Measurement `json:"Metric"`
	Imperial Measurement `json:"Imperial"`
}

type RealFeelTemperature struct {
	Metric   RealFeelMeasurement `json:"Metric"`
	Imperial RealFeelMeasurement `json:"Imperial"`
}

type RealFeelMeasurement struct {
	Value    float64 `json:"Value"`
	Unit     string  `json:"Unit"`
	UnitType int     `json:"UnitType"`
	Phrase   string  `json:"Phrase"`
}

type Measurement struct {
	Value    float64 `json:"Value"`
	Unit     string  `json:"Unit"`
	UnitType int     `json:"UnitType"`
}

type Wind struct {
	Direction WindDirection `json:"Direction"`
	Speed     Temperature   `json:"Speed"`
}

type WindValues struct {
	Degrees   int     `json:"degrees"`
	Direction string  `json:"direction"`
	Speed     float64 `json:"speed"`
}

type WindDirection struct {
	Degrees   int    `json:"Degrees"`
	Localized string `json:"Localized"`
	English   string `json:"English"`
}

type WindGust struct {
	Speed Temperature `json:"Speed"`
}

type PressureTendency struct {
	LocalizedText string `json:"LocalizedText"`
	Code          string `json:"Code"`
}

type PrecipitationSummary struct {
	Precipitation Measurement `json:"Precipitation"`
	PastHour      Measurement `json:"PastHour"`
	Past3Hours    Measurement `json:"Past3Hours"`
	Past6Hours    Measurement `json:"Past6Hours"`
	Past9Hours    Measurement `json:"Past9Hours"`
	Past12Hours   Measurement `json:"Past12Hours"`
	Past18Hours   Measurement `json:"Past18Hours"`
	Past24Hours   Measurement `json:"Past24Hours"`
}

type TemperatureSummary struct {
	Past6HourRange  TemperatureRangeCurrent `json:"Past6HourRange"`
	Past12HourRange TemperatureRangeCurrent `json:"Past12HourRange"`
	Past24HourRange TemperatureRangeCurrent `json:"Past24HourRange"`
}

type TemperatureRangeCurrent struct {
	Minimum Temperature `json:"Minimum"`
	Maximum Temperature `json:"Maximum"`
}
