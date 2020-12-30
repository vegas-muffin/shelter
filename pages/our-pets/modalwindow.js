const btnsWindows = document.querySelectorAll('.btn-modal-window');
const modalOverlayWindow = document.querySelector('.modals__overlay-windows');
const modalsWindows = document.querySelectorAll('.modals-windows');
const btnClose = document.querySelector('.modal-window__btn-close');

btnsWindows.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalsWindows.forEach((el) => {
			el.classList.remove('modals__windows--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modals__windows--visible');
		modalOverlayWindow.classList.add('modals__windows-overlay--visible');
	});
});

modalOverlayWindow.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlayWindow) {
		modalOverlayWindow.classList.remove('modals__windows-overlay--visible');
		modalsWindows.forEach((el) => {
			el.classList.remove('modals__windows--visible');
		});
	}
});

btnClose.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == btnClose) {
		modalOverlayWindow.classList.remove('modals__windows-overlay--visible');
		modalsWindows.forEach((el) => {
			el.classList.remove('modals__windows--visible');
		});
	}
});