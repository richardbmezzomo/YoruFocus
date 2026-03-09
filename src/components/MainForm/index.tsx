import { PlayCircleIcon, StopCircleIcon } from 'lucide-react'
import { Cycles } from '../Cycles'
import { DefaultButton } from '../DefaultButton'
import { DefaultInput } from '../DefaultInput'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import { TaskModel } from '../../models/TaskModel'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'

export const MainForm = () => {
  const { state, setState } = useTaskContext()
  const taskNameInput = useRef<HTMLInputElement>(null)

  const nextCycle = getNextCycle(state.currentCycle)
  const nextCycleType = getNextCycleType(nextCycle)

  const handleCreateTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!taskNameInput.current) return

    const taskName = taskNameInput.current.value.trim()

    if (!taskName) {
      toast('Digite o nome da tarefa!')
      return
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      duration: state.config[nextCycleType],
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      type: nextCycleType
    }

    const secondsRemaining = newTask.duration * 60

    setState(prevState => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: nextCycle,
      secondsRemaining,
      formatedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
      tasks: [...prevState.tasks, newTask]
    }))
  }

  const handleInterruptTask = () => {
    setState(prevState => ({
      ...prevState,
      activeTask: null,
      secondsRemaining: 0,
      formatedSecondsRemaining: '00:00'
    }))
  }
  return (
    <>
      <form onSubmit={handleCreateTask} className="form">
        <div className="formRow">
          <DefaultInput
            id="input"
            type="text"
            labelText="task"
            ref={taskNameInput}
            disabled={!!state.activeTask}
          />
        </div>

        <div className="formRow">
          <p>Lorem ipsum dolor sit amet.</p>
        </div>

        {state.currentCycle > 0 && (
          <div className="formRow">
            <Cycles />
          </div>
        )}

        <div className="formRow">
          {!state.activeTask && (
            <DefaultButton
              type="submit"
              aria-label="Iniciar tarefa"
              title="Iniciar tarefa"
              icon={<PlayCircleIcon />}
            />
          )}
          {state.activeTask && (
            <DefaultButton
            onClick={handleInterruptTask}
              type="button"
              aria-label="Pausar tarefa"
              title="Pausar tarefa"
              state="stop"
              icon={<StopCircleIcon />}
            />
          )}
        </div>
      </form>
    </>
  )
}
