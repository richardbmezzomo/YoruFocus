import { Container } from './components/Container'
import { Countdown } from './components/Countdown'
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
          <p>Ciclos</p>
          <span>0000000</span>
        </div>

        <div className="formRow">
          <button>Enviar</button>
        </div>
      </form>
    </Container>
  )
}
