import { Container } from './components/Container'
import { Countdown } from './components/Countdown'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
export const App = () => {
  return (
    <div>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>
    </div>
  )
}
