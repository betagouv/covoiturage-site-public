import { useProgrammatic } from '@oruga-ui/oruga-next'

export function useNotification(config:object){
  const { oruga } = useProgrammatic()
  oruga.notification.open({
    ...config,
  })
}