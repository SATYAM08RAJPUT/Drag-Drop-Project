const todoData = [
    {
        title: "Build UI for onboarding flow",
        status: "1 of 3 completed tasks"
    },
    {
        title: "Build UI for Search",
        status: "1 of 2 completed tasks"
    },
    {
        title: "Build Setting UI",
        status: "1 of 0 completed tasks"
    },
    {
        title: "QA for all Major User",
        status: "1 of 1 completed tasks"
    },
    {
        title: "onboarding flow",
        status: "1 of 3 completed tasks"
    },
]

const inProcessData = [
    {
        title: "Designs setting for Search Page",
        status: "1 of 5 completed tasks"
    },
    {
        title: "Add Account Managemnet Search Point",
        status: "1 of 0 completed tasks"
    },
    {
        title: "Design Onboarding Flow",
        status: "1 of 10 completed tasks"
    },
    {
        title: "Add Search Point",
        status: "1 of 1 completed tasks"
    },
    {
        title: "Add Aunthemntication endpoint",
        status: "1 of 3 completed tasks"
    },
]

const donedata  = [
    {
        title: "conduct 5 wireless Tests",
        status: "1 of 0 compltes"
    },
    {
        title: "Crete wireless Prototypes",
        status: "1 of 1 complete"
    },
    {
        title: "Complte a data wires",
        status: "1 of 4 uncomplete"
    },
    {
        title: "Sign to click",
        status: "1 of 10 complete"
    }
]

class Header{
    constructor(data){
        this.data = data
        var elements = [];
    }
    renderHeader(){
        const headerData =`<div class=head>
        <div class ="left">
        <img src ="https://kanban-task-management-react-tailwind.vercel.app/static/media/logo-mobile.e60c2fbc3dcefa4256e0569ffba5e523.svg" class = "headerImg">
        <h2>Kanban</h2>
        </div>
        <div class="middle">
        <h3 class ="platform">Platform Launch</h3>
        </div>
        <div class ="right">
        <button> <i style="font-size:8px" class="fa">&#xf067;</i> Add New Task</button>
        </div>
        </div>`
        document.getElementById('headerdata').innerHTML = headerData;   
    }

    renderTodoData(todoData){
        const icontodo = `<h3>Todo</h3>`
           const tpldata = todoData.map((item) => {
            return `
            <div class ="data" draggable="true">
            ${item.title}
            <h5>${item.status}</h5>
            </div>`
        }).join('')
    
        const createTododiv = document.createElement('div');
        const takeHtmlId = document.getElementById('todo');
        takeHtmlId.append(createTododiv);
        createTododiv.setAttribute('class','tododid')
        createTododiv.innerHTML = icontodo + tpldata;
    }

    renderinProcess(inProcessData){
        const inproces = `<h3>InProcess</h3>`
        const htnldata = inProcessData.map((item) => {
            return `<div class ="data" draggable="true">
            ${item.title}
            <h5>${item.status}</h5>
            </div>`
        }).join('')
      const createProcessdiv = document.createElement('div');
      const takeTodoId = document.getElementById('todo');
      takeTodoId.append(createProcessdiv);
      createProcessdiv.setAttribute('class','tododid')
      createProcessdiv.innerHTML =inproces + htnldata;
    }

    renderDonedata(donedata){
        const done = `<h3>Done</h3>`
        const donetpl = donedata.map((item) => {
            return `
            <div class ="data" draggable="true">
            ${item.title}
            <h5>${item.status}</h5>
            </div>`
        }).join('')

        const creatediv = document.createElement('div');
        const takeaboveid = document.getElementById('todo');
        console.log(takeaboveid)
        takeaboveid.append(creatediv)
        creatediv.setAttribute('class','tododid');
        creatediv.innerHTML = done + donetpl;  
    }

    renderDragDrop(){
        var elements = [];
        console.log(elements)
        const takeAllClass = document.querySelectorAll(".data");
        console.log(takeAllClass)
        takeAllClass.forEach((item) => {
        item.addEventListener('dragstart',(event) => {
                elements.push(event.target);
                event.target.style.color = "red";
        });
     })
        const seondDiv = document.querySelectorAll(".tododid")
        seondDiv.forEach((item) => {
            item.addEventListener('dragover',(event) => {
                event.preventDefault();    
        });

        item.addEventListener('drop',function(event) {
            console.log(this)
            event.preventDefault();
            this.appendChild(elements.pop());
            console.log(elements)
        })
        });
    }

    init(){
        this.renderHeader()
        this.renderTodoData(todoData);
        this.renderinProcess(inProcessData);
        this.renderDonedata(donedata);
        this.renderDragDrop();

    }
}

const newheder = new Header()
newheder.init()

