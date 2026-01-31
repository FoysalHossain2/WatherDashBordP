import Header from "./component/header/Header"
import WeatherBord from "./component/weather/WeatherBord"

function App() {

  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <WeatherBord />
        </section>
      </main>
    </div>
  )
}

export default App
