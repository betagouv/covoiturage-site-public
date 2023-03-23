import axiosConfig from '@/config/axios'
import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/oruga-next/dist/oruga.css'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import type { App } from 'vue'

export default (app: App) => {
  library.add(fas)
  dom.watch()
  axiosConfig()
  app.use(Oruga,{
      iconPack: 'fas'
    }  
  )
  app.config.globalProperties.$oruga = Oruga
}