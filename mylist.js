var but = document.getElementById("addNewItem");
var io = document.getElementById("io-field");
var con = document.getElementById("order-list");

but.addEventListener('click', ()=>{
	if(io.value.trim() != ""){
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo-item-container");
		
		const newTodo = document.createElement("li");
		newTodo.classList.add("todo-text");
		newTodo.innerText = io.value;
		todoDiv.appendChild(newTodo);

		const trashBut = document.createElement("button");
		trashBut.innerText = "delete";
		trashBut.classList.add("but-del");
		todoDiv.appendChild(trashBut);

		trashBut.addEventListener('click', ()=>{
			const par = trashBut.parentElement;
			par.parentElement.removeChild(par);
		});

		con.appendChild(todoDiv);
		io.value = "";
	}
});