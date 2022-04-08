import logo from './logo.svg';
import './App.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [37.533655, -77.435335]

function App() {
  return (
    <MapContainer center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYm5vcmFsZXMiLCJhIjoiY2wxamc1MXFuMDlncjNjcWdjOTNyc2FyeCJ9.RnFL5S2gg46H2WjVXLoWeA"
        tileSize= {512}
        zoomOffset= {-1}
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default App;
