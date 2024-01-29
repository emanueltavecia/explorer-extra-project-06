export default function () {
  const buttonPressAudio = new Audio('./assets/button-press.wav')
  const kitchenTimer = new Audio('./assets/kitchen-timer.mp3')
  const forestAudio = new Audio('./assets/forest.wav')
  const rainAudio = new Audio('./assets/rain.wav')
  const coffeeAudio = new Audio('./assets/coffee.wav')
  const fireplaceAudio = new Audio('./assets/fireplace.wav')

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function resetSounds() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    fireplaceAudio.pause()
  }

  return {
    pressButton,
    timeEnd,
    resetSounds,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireplaceAudio,
  }
}
