import { PlayCircleIcon } from 'lucide-react'
import { Container } from './components/Container'
import { Countdown } from './components/Countdown'
import { Cycles } from './components/Cycles'
import { DefaultButton } from './components/DefaultButton'
import { DefaultInput } from './components/DefaultInput'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
export const App = () => {
  return (
    <Container>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Countdown />
      </Container>

      <form action="" className="form">
        <div className="formRow">
          <DefaultInput id="input" type="text" labelText="task" />
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="formRow">
          <Cycles />
        </div>

        <div className="formRow">
          <DefaultButton icon={<PlayCircleIcon />} />
        </div>
      </form>
    </Container>
  )
}
