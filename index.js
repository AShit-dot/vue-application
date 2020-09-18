const sidebar = document.querySelector('.sidebar'),
      circle = document.querySelector('.navbar__circle');

circle.addEventListener('click', (e) => {
    console.log('df')
    circle.classList.toggle('navbar__circle_active')
    sidebar.classList.toggle('sidebar_active')
})

const places = document.querySelectorAll('.note__item'),
      descriptions = document.querySelectorAll('.note__topic-descr'),
      topics = document.querySelectorAll('.note__topic')

places.forEach((place, a) => {
    descriptions.forEach((description, b) => {
        topics.forEach((topic, c)=> {
            if(a === b && b === c) {
                place.addEventListener('click', function () {
                    topic.classList.toggle('note__topic_active')
                    description.classList.toggle('note__topic-descr_active')
                })
            }
        })
    })
})

