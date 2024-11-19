export default function formatTime(timeString?: string) {
  if (timeString) {
    return timeString.slice(0, 5).replace(':', '.')
  }
  return ''
}
