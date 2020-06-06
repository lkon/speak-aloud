const text = document.getElementById('text')
const btn = document.getElementById('btn')
const onClick = (ev) => window.responsiveVoice.speak(text.value, 'Greek Female', {rate: 1});

btn.addEventListener('click', onClick)
