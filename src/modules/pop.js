const cardsSection = document.querySelector('.card-grid');

const projectsCard = [
  {
    id: '1',
    image: 'img/desktop1.png',
    tittle: 'Title1',
  },

  {
    id: '2',
    image: 'img/desktop2.png',
    tittle: 'Title 2',
  },

  {
    id: '3',
    image: 'img/desktop3.png',
    tittle: 'Title 3',
  },

];

const createProjects = () => {
  projectsCard.forEach((project) => {
    const card1 = document.createElement('div');
    card1.classList.add('card');
    cardsSection.appendChild(card1);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('project-image');
    card1.appendChild(imgContainer);

    const imgCard = document.createElement('img');
    imgCard.classList.add('image');
    imgCard.setAttribute('src', project.image);
    imgCard.setAttribute('alt', 'my first project');
    imgContainer.appendChild(imgCard);

    const infoCard = document.createElement('div');
    infoCard.classList.add('projects');
    card1.appendChild(infoCard);

    const tittleCard = document.createElement('h2');
    tittleCard.classList.add('project-tittle');
    tittleCard.innerText = project.tittle;
    infoCard.appendChild(tittleCard);

    // We can add the dish detail in here

    const seeProject = document.createElement('button');
    seeProject.classList.add('button');
    seeProject.innerText = 'Comments';
    seeProject.id = project.id;
    infoCard.appendChild(seeProject);
  });
};

createProjects();
