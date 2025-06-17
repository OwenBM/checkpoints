import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  jotCount = 0
  activeJot = null



  jots = [
    new Jot('Karl', 'Karl came down with lumbago last fall, were going to have to leave him behind', '4/8/1893', 'today',),
    new Jot('Football', 'i heard football is pretty cool, ill have to try it sometime...', '6/23/2019', 'today'),
    new Jot('i dont even know anymore', 'AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', '6/4/2025', 'today'),
  ]






  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}



export const AppState = createObservableProxy(new ObservableAppState())