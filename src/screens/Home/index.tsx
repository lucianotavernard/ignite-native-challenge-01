import { useEffect, useRef, useState } from 'react'
import {
  FlatList,
  Text,
  View,
  Alert,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import logoImage from '@/assets/logo.png'

import { theme } from '@/styles/theme'

import { Input } from '@/components/Input'
import { Empty } from '@/components/Empty'
import { Task, TaskItem } from '@/components/TaskItem'

import { styles } from './styles'

export function Home() {
  const newTaskInputRef = useRef<TextInput>(null)

  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')

  function handleCreate() {
    try {
      if (newTask === '' && newTask.length <= 5) {
        throw new Error()
      }

      const task = {
        id: String(new Date().getMilliseconds()),
        title: newTask.trim(),
        isCompleted: false
      }

      setTasks((tasks) => [...tasks, task])
      setNewTask('')

      newTaskInputRef.current?.blur()
    } catch (error) {
      Alert.alert('Oops', 'Ocorreu algum erro ao criar a nova tarefa')
    }
  }

  function handleDelete(taskId: string) {
    Alert.alert('Excluir tarefa', 'Desejar excluir essa tarefa?', [
      {
        text: 'Sim',
        style: 'default',
        onPress: () =>
          setTasks((tasks) => tasks.filter((task) => task.id !== taskId))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function handleComplete(taskId: string) {
    setTasks((task) =>
      task.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    )
  }

  useEffect(() => {
    function loadTasks() {
      setTasks([
        {
          id: String(new Date().getMilliseconds()),
          title:
            'Integer urna interdum massa libero auctor neque turpis turpis semper.',
          isCompleted: false
        },
        {
          id: String(new Date().getMilliseconds() + 1),
          title:
            'Integer urna interdum massa libero auctor neque turpis turpis semper.',
          isCompleted: false
        },
        {
          id: String(new Date().getMilliseconds() + 2),
          title:
            'Integer urna interdum massa libero auctor neque turpis turpis semper.',
          isCompleted: false
        },
        {
          id: String(new Date().getMilliseconds() + 3),
          title:
            'Integer urna interdum massa libero auctor neque turpis turpis semper.',
          isCompleted: true
        },
        {
          id: String(new Date().getMilliseconds() + 4),
          title:
            'Integer urna interdum massa libero auctor neque turpis turpis semper.',
          isCompleted: true
        }
      ])
    }

    loadTasks()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} />

        <View style={styles.form}>
          <Input
            inputRef={newTaskInputRef}
            placeholder="Adicione uma nova tarefa"
            onSubmitEditing={handleCreate}
            onChangeText={setNewTask}
            value={newTask}
          />

          <TouchableOpacity style={styles.button} onPress={handleCreate}>
            <MaterialCommunityIcons
              size={22}
              name="plus-circle-outline"
              color={theme.colors.base.gray100}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{0}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{0}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onDelete={() => handleDelete(item.id)}
              onComplete={() => handleComplete(item.id)}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  )
}
