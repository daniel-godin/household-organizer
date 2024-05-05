// Imports:
import './output.css'

// Firebase Imports:
import './firebase.ts';


function App() {

  return (
    <>
      <NavUI />
      <MainUI />
      <FooterUI />
    </>
  )
}

export default App

function MainUI() {
  return (
    <main>
      <h1>Welcome to Household Organizer</h1>
    </main>
  )
}

function NavUI() {
  return (
    <nav>
      <header>Household Organizer</header>
      <a href=''>Log In / Sign Up (Profile Button If Logged In)</a>
    </nav>
  )
}

function FooterUI() {
  return (
    <footer>
      <p>Created by <a href='https://danielgodin.org'>Daniel Godin</a> & Joanna Lew</p>
    </footer>
  )
}