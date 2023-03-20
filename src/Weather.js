import React from "react";
import WeatherDay from "./WeatherDay";

class Weather extends React.Component {

  render() {
    return (
      <>
        {this.props.weatherData.map((e,index) => {
          return (
            <WeatherDay
                date={e.date}
                key={index}
                description={e.description}
              />
          )
        })}
      </>
    )
  }
}

export default Weather;