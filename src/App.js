
import ReactDOM from 'react-dom'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChargingStation,faFan,faCloud,fas,faBoltLightning,faTemperatureQuarter,faTemperatureLow, faShieldHalved,faLocationDot,faMagnifyingGlass,faBatteryQuarter,faGear,faDroplet} from '@fortawesome/free-solid-svg-icons'
import {faLightbulb,faUser,faSquareMinus,faBell,faCalendarDays} from '@fortawesome/free-regular-svg-icons'
import { faCloudversify } from '@fortawesome/free-brands-svg-icons'

import Home from '../src/components/Home'
library.add(faCalendarDays,faChargingStation,faFan,faBoltLightning,faTemperatureQuarter,faTemperatureLow,faCloud,fas,faSquareMinus,faShieldHalved,faBell,faMagnifyingGlass,faDroplet,faGear,faLocationDot,faBatteryQuarter,faUser,faLightbulb)
function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
