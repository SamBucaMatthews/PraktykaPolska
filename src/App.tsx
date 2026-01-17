import qrUrl from "/qr-url.png";
import './App.css'

function App() {
  return (
    <>
      <div>
        <img src={qrUrl} className="logo" alt="QR code to access the URL via camera" />
      </div>
      <h1>Praktyka Polska</h1>
    </>
  )
}

export default App
