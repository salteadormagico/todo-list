document.addEventListener('DOMContentLoaded', function() {
	const btn = document.getElementById('btn');
	const title = document.getElementById('title');
	const description = document.getElementById('description');
	const table = document.getElementById('table');
	const titleB = document.getElementById('titleB');
	const descriptionB = document.getElementById('descriptionB');
	const alert = document.getElementById('alert');
	let id = 0;

	btn.addEventListener('click', function() {
		if(title.value === "" || description.value === "") {
			alert.classList.remove('d-none');
			alert.innerHTML = 'el título y la descripción son requeridos';
		} else {
			alert.classList.add('d-none');
			const row = table.insertRow();
			row.setAttribute('id', id++);
			row.innerHTML = `
			<td>${title.value}</td>
			<td>${description.value}</td>
			<td class="text-center">
				<input type="checkbox">
			</td>
			<td class="text-right">
				<button class="btn btn-danger mb-1 ml-1">eliminar</button>
			</td>
			`
		titleB.innerHTML = title.value;
		descriptionB.innerHTML = description.value;
		}
	});
});