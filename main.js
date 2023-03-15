let arr = [
    {
        title: 'The Matrix',
        rating: 7.5,
        category: 'Action'
    }, {
        title: 'Focus',
        rating: 6.9,
        category: 'Comedy'
    }, {
        title: 'The Lazarus Effect',
        rating: 6.4,
        category: 'Thriller'
    }, {
        title: 'Everly',
        rating: 5.0,
        category: 'Action'
    }, {
        title: 'Maps to the Stars',
        rating: 7.5,
        category: 'Drama'
    },
]

let form = document.forms.main,
    inp = form.mainInp,
    rating = form.rating,
    genre = form.genre,
    inp_list = document.querySelector('.inp_list'),
    noFilm = document.querySelector('.noFilm')

inp.onkeyup = () => {
    let key = inp.value.trim().toLowerCase()
    let filtered = arr.filter(el => el.title.toLowerCase().includes(key))
    reload(filtered, inp_list)
    inpCheck(key, inp_list)
}

selectReload(arr, genre)

function reload(data, place) {
    place.innerHTML = ''
    for (let item of data) {
        let box = document.createElement('div'),
            right = document.createElement('div'),
            genre = document.createElement('div'),
            title = document.createElement('p'),
            rate = document.createElement('p')

        box.classList.add('inp_list__box')
        right.classList.add('right')
        genre.classList.add('genre')
        title.classList.add('title')
        rate.classList.add('rate')

        title.innerHTML = item.title
        rate.innerHTML = item.rating
        genre.innerHTML = item.category

        place.append(box)
        box.append(right, genre)
        right.append(title, rate)
    }
}

function selectReload(data, place) {
    place.innerHTML = ''
    let genres = ['All']
    for (let item of data) {
        let option = document.createElement('option')
        let categ = item.category
        genres.includes(categ) ? null : genres.push(categ)
        genres.filter(el => option.innerHTML = el)
        place.append(option)
    }
}

function inpCheck(txt, place) {
    if (txt === '' || place.innerHTML === '') {
        place.classList.remove('inp_list_act')
    } else {
        place.classList.add('inp_list_act')
    }
}