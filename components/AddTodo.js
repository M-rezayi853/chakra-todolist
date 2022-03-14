import React, { useState } from 'react'
import { Input, Button, useToast, Box } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState('')

  const toast = useToast()

  function handleSubmit(e) {
    e.preventDefault()

    if (!content) {
      return toast({
        title: 'No content!',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
    }

    const todo = {
      id: nanoid(),
      body: content,
    }

    addTodo(todo)
    setContent('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
    >
      <Box
        mt='8'
        d={{
          sm: 'grid',
          md: 'grid',
          lg: 'flex',
          xl: 'flex',
          base: 'grid',
        }}
        justifyContent={{
          sm: '',
          md: '',
          lg: 'center',
          xl: 'center',
          base: '',
        }}
        width={{
          sm: '80vw',
          md: '80vw',
          lg: 'auto',
          xl: 'auto',
          base: '90vw',
        }}
      >
        <Input
          variant='filled'
          placeholder='learing programming...'
          width={{
            sm: '100%',
            md: '100%',
            lg: '18rem',
            xl: '18rem',
            base: '100%',
          }}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          colorScheme='pink'
          px='8'
          type='submit'
          width={{
            sm: '100%',
            md: 'auto',
            lg: 'auto',
            xl: 'auto',
            base: '100%',
          }}
          mt={{
            sm: '2',
            md: '2',
            lg: '0',
            xl: '0',
            base: '2',
          }}
          ml={{
            sm: '0',
            md: '0',
            lg: '2',
            xl: '2',
            base: '0',
          }}
        >
          Add Todo
        </Button>
      </Box>
    </form>
  )
}

export default AddTodo
