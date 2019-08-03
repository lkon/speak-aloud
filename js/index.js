const text = document.getElementById('text')
const btn = document.getElementById('btn')
const onClick = (ev) => window.responsiveVoice.speak(text.value, 'Greek Female', {rate: 0.7});

btn.addEventListener('click', onClick)