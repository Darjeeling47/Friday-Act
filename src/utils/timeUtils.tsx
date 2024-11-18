export default function formatTime(timeString: string) {
  return timeString.slice(0, 5).replace(':', '.')
}
