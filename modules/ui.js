import { signIn, signUp } from "./http"

export function headerCreate(place) {
	place.innerHTML = ''
	place.innerHTML = `
		<div class="left">
			<img src="/public/images/logo.svg" alt="image">
			<img src="/public/icons/menu.svg" alt="image">
		</div>
		<nav>
			<a href="#">Афиша</a>
			<a href="#">Медиа</a>
			<a href="#">Фильмы</a>
			<a href="#">Актёры</a>
			<a href="#">Новости</a>
			<a href="#">Подборки</a>
			<a href="./pages/category.html">Категории</a>
		</nav>
		<div class="right">
			<button>
				<img src="/public/icons/search.svg" alt="icon">
			</button>
			<button class="log" >Войти</button>
		</div>
		<div class="modal hide" data-close id="modal_login" >
        <div class="modal__dialog">
            <div class="modal__content" data-tabs="0" >
                <form action="#" name="signup" >
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">Войти</div>
                    <input required placeholder="Логин, почта или телефон" name="name" type="text" class="modal__input">
                    <input required placeholder="Ваш пароль" name="surname" type="text" class="modal__input">
                    <input required placeholder="Ваш пароль" name="password" type="password" class="modal__input">
                    <button type="submit" class="btn btn_yellow">Войти</button>
					<button class="btn btn_dark" data-reg >Зарегистрироваться</button>
					<a href="#">Восстановить пароль</a>
					<img src="./public/icons/menu.svg" alt="">
                </form>
            </div>
			<div class="modal__content hide" data-tabs="1" >
                <form action="#" name="signin" >
                    <div data-close class="modal__close">&times;</div>
                    <div class="modal__title">Зарегистрироваться</div>
                    <input required placeholder="email" name="email" type="email" class="modal__input">
					<input required placeholder="Придумайте пароль" name="password" type="password" class="modal__input">
					
					
                   	<button class="btn btn_dark" data-log >Войти</button>

					<button type="submit"  class=" btn btn_yellow">Зарегистрироваться</button>
					
                </form>
            </div>
        </div>
    </div>
    `
	let login_btn = document.querySelector('.log')
	let modal = document.querySelector('#modal_login')
	let close_modal = document.querySelectorAll('[data-close]')
	let modal__content = modal.querySelectorAll('.modal__content')
	let data_reg_btn = document.querySelector('[data-reg]')
	let data_log_btn = document.querySelector('[data-log]')
	let signUp_form = document.forms.signup
	let signIn_form = document.forms.signin
	
	signUp_form.onsubmit = (e) => {
		e.preventDefault()

		let user = {}

		let fm = new FormData(signUp_form)

		fm.forEach((value, key) => {
			user[key] = value
		})

		signUp(user)
			.then(res => console.log(res))
	}

	signIn_form.onsubmit = (e) => {
		e.preventDefault()

		let user = {}

		let fm = new FormData(signIn_form)

		fm.forEach((value, key) => {
			user[key] = value
		})

		signIn(user)
			.then(res => console.log(res))
	}

	data_reg_btn.onclick = () => {
		modal__content[1].classList.remove('hide')
		modal__content[0].classList.add('hide')
	}
	data_log_btn.onclick = () => {
		modal__content[0].classList.remove('hide')
		modal__content[1].classList.add('hide')
	}

	login_btn.onclick = () => {
		modal.classList.remove('hide')
	}

	close_modal.forEach(btn => {
		btn.onclick = (e) => {
			let isCloseEleme = e.target.getAttribute('data-close') ?? "there is no data-attribute"

			if(!isCloseEleme) {
				modal.classList.add('hide')
			}
		}
	})

}


export function reload(arr, place) {
    place.innerHTML = ''
    for (let item of arr) {
        place.innerHTML += `
            <div class="movie-card" >
                <div class="image">
                    <img src="${import.meta.env.VITE_BASE_IMG + item.poster_path}" alt="image">
                    <span>${item.vote_average}</span>
					<a href="/pages/movieid.html?id=${item.id}">
                    	<button>Карточка фильма</button>
					</a>
                </div>
                <div class="name__genre">
                    <p>${item.title}</p>
                    <p>${item.genre_ids}</p>
                </div>
            </div>
            `
    }
}