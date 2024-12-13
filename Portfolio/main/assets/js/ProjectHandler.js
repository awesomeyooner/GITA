class ProjectHandler{
    #widgets = [];

    constructor(){

    }
    
    loadFile(path){

        fetch(path)
            .then(response => response.json())
            .then(data => this.#widgets = data)
            .catch(error => console.log(error))

        this.loadWidgets();
    }

    populateWidgets(widgets){
        this.#widgets = widgets;
        this.loadWidgets();
    }

    loadWidgets(){
        try{
            const container = document.getElementById('widgetContainer');
            container.innerHTML = '';

            this.#widgets.forEach((widget, index) => {
                const widgetElement = document.createElement('div');
                widgetElement.classList.add('widget');

                /*
                    {
                    "header": "Project",
                    "image": "assets/projects/GITA3/Avatar/avatar.png",
                    "link": "https://classroom.google.com/u/1/c/NjkxNzExOTA3MDA1",
                    "description": "This is my avatar!"
                    }
                */ 

                widgetElement.innerHTML = `
                    <a href="${widget.link}">
                        <img src="${widget.image}" alt="${widget.header}">
                        <h1>${widget.header}</h1>
                        <h2>${widget.date}</h2>
                        <p>${widget.description}</p>
                    </a>
                `;

                container.appendChild(widgetElement);
            })
        }

        catch(error){
            console.log(error);
        }
    }
}