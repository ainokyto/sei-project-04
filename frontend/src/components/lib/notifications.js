import { notify } from 'react-notify-toast'

const styles = {
  background: '#ffd1dc', text: '#fff'
}

export const toast = message => {
  notify.show(message, 'custom', 3000, styles)
}