document.querySelectorAll('link').forEach((e => {
	const u = new URL(e.href);
	if(e.rel == "stylesheet" && new URL(u.href, document.baseURI).origin == location.origin){
		fetch(u.href).then(async function(t) {
			const i = await t.text(),
				b = new Blob([i], {type: "text/css"}),
				s = URL.createObjectURL(b);
			e.setAttribute("href", s);
		})
	}
}))
