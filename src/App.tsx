// Imports:
import './output.css'
import { Button } from '@radix-ui/themes';

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
      <div className='nav-buttons'>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
        <a href='' style={{display: 'none'}}>(Profile Button If Logged In)</a>
      </div>
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