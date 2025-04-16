import { useState } from "react";
import {
  Container,
  Title,
  TextInput,
  Button,
  Checkbox,
  Stack,
} from "@mantine/core";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    if (!value.trim()) return;
    setTodos([...todos, { content: value, isChecked: false }]);
    setValue("");
  };

  const toggleTodo = (index) => {
    const next = [...todos];
    next[index].isChecked = !next[index].isChecked;
    setTodos(next);
  };

  return (
    <Container size="sm" mt="xl">
      <Title order={2} mb="md">
        📝 Mantine Todo List
      </Title>
      <Stack>
        <TextInput
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button onClick={addTodo}>추가</Button>
        <Button color="pink" size="lg" radius="xl" fullWidth>
          Todo 추가!
        </Button>
        {todos.map((todo, index) => (
          <Checkbox
            key={index}
            label={todo.content}
            checked={todo.isChecked}
            onChange={() => toggleTodo(index)}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default App;
