import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from '@/styles/theme'

export type Task = {
  id: string
  title: string
  isCompleted: boolean
}

type TaskItemProps = {
  task: Task
  onDelete: (id: string) => void
  onComplete: (id: string) => void
}

export function TaskItem({ task, onDelete, onComplete }: TaskItemProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onComplete(task.id)}>
        <MaterialCommunityIcons
          name={
            task.isCompleted
              ? 'checkbox-marked-circle-outline'
              : 'checkbox-blank-circle-outline'
          }
          size={22}
          color={
            task.isCompleted
              ? theme.colors.brand.purple
              : theme.colors.brand.blue
          }
        />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={task.isCompleted ? styles.textDone : styles.textCreated}>
          {task.title}
        </Text>
      </View>

      <TouchableOpacity onPress={() => onDelete(task.id)}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={20}
          color={theme.colors.base.gray300}
        />
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 64,
    backgroundColor: theme.colors.base.gray500,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    paddingHorizontal: 12,
    paddingVertical: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.base.gray400
  },
  content: {
    width: '80%',
    height: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: 8
  },
  textDone: {
    fontSize: theme.fontSize.md,
    color: theme.colors.base.gray300,
    textDecorationLine: 'line-through'
  },
  textCreated: {
    fontSize: theme.fontSize.md,
    color: theme.colors.base.gray100,
    textDecorationLine: 'none'
  }
})
