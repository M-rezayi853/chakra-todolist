import React from 'react'
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  Box,
} from '@chakra-ui/react'
import { FaTrashAlt } from 'react-icons/fa'

const TodoList = ({ todos, deleteTodo }) => {
  return !todos.length ? (
    <Box>
      <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
        No Todos, yay!!!
      </Badge>
    </Box>
  ) : (
    <VStack
      divider={<StackDivider />}
      borderColor='gray.100'
      borderWidth='2px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      alignItems='stretch'
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrashAlt />}
            isRound='true'
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  )
}

export default TodoList
