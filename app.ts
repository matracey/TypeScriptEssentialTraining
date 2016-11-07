var container = document.getElementById('container');

var todos = [
    {
        id: 123,
        name: "Pick up drycleaning",
        completed: true
    },
    {
        id: 124,
        name: "Iron shirt",
        completed: false
    },
    {
        id: 125,
        name: "Wash hair",
        completed: false
    },
]

var innerHtml: string = "";

for (let t of todos) {
    innerHtml = innerHtml.concat(`
    <div todo='${t.id}' class="list-group-item">
        <i class="${t.completed ? "" : "hidden"} text-success glyphicon glyphicon-ok"></i>
        <span class="name">${t.name}</span>
    </div>
    `);
}

container.innerHTML = innerHtml;