import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import {
  Heading,
  VStack,
  IconButton,
  Box,
  useColorMode,
} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

// import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
const TodoList = dynamic(() => import('../components/TodoList'), { ssr: false })

export default function Home() {
  const initialTodos = [
    {
      id: 1,
      body: 'get bread',
    },
    {
      id: 2,
      body: 'get butter',
    },
  ]

  const isServer = typeof window === 'undefined'

  const [todos, setTodos] = useState(
    () => (!isServer && JSON.parse(localStorage.getItem('todos'))) || []
  )

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id
    })

    setTodos(newTodos)
  }

  function addTodo(todo) {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        isRound='true'
        size='lg'
        alignSelf='flex-end'
        onClick={toggleColorMode}
      />

      <Box>
        <Heading
          m='8'
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
          bgClip='text'
        >
          Todo Application
        </Heading>
      </Box>

      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  )
}
