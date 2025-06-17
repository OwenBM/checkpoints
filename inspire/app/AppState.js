import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  // /**@type {import('./models/Example.js').Example[]} */
  // examples = []
  indentity = null
  weather = []
  image = ''
  author = ''
  tempButtonClicks = 1
  todoName = []
  todo = []

}

export const AppState = createObservableProxy(new ObservableAppState())