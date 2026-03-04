import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider'
import { Home } from './pages/Home'

export const App = () => {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}
