document.addEventListener('mousemove', e => {
	Object.assign(document.documentElement, {
		style: `
		--move-x: ${(e.clientX - window.innerWidth / 2) * -.002}deg;
		--move-y: ${(e.clientY - window.innerHeight / 2) * .005}deg;
		`
	})
})