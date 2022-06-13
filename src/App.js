import NavBar from './components/NavBar/NavBar.js'
import Main from './components/Main/Main.js'

function App() {
    return (
        <div
            className="App"
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
            }}
        >
            <NavBar />
            <Main />
        </div>
    )
}

export default App
