/*  
LOGICA

- creiamo l'array team
- stampiamo in console le info di nome, rolo e la stringa della foto
- stampare nel DOM le stesse informazioni


BONUS
- trasformare la stringa foto in un'immagine
- organizzare i membri in card


INFO
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg
*/




// array

const team = [
    {Name: 'Wayne Barnett', role: 'Founder & CEO', img: '/img/wayne-barnett-founder-ceo.jpg'},
    {Name: 'Angela Caroll', role: 'Chief Editor', img: '/img/angela-caroll-chief-editor.jpg'},
    {Name: 'Walter Gordon', role: 'Office Manager', img: '/img/walter-gordon-office-manager.jpg'},
    {Name: 'Angela Lopez', role: 'Social Media Manager', img: '/img/angela-lopez-social-media-manager.jpg'},
    {Name: 'Scott Estrada', role: 'Developer', img: '/img/scott-estrada-developer.jpg'},
    {Name: 'Barbara Ramos', role: 'Graphic Designer', img: '/img/finished barbara-ramos-graphic-designer.jpg'}
]

const cardContainer = document.getElementById('card-container');
// 

for (let i = 0;i < team.length;i++){
    console.log(team[i].Name,' | ', team[i].role, ' | ', team[i].img);
    // creation of the card
    const card = document.createElement('div');

    //adding the class to the card
    card.classList.add('card', 'm-4');

    // creation of the img container
    const img = document.createElement('img');
    img.src =team[i].img;

    //source image

    //creation of the card body
    const cardBody = document.createElement('div');

    // adding the classes to the cardbody
    cardBody.classList.add('card-body', 'd-flex', 'justify-content-center', 'flex-column', 'align-items-center');

    // creating variables with teammate info
    const teammate = document.createElement('p');
    const teammateRole = document.createElement('p');
    
    // adding teammate info
    teammate.innerText = team[i].Name;
    teammateRole.innerText = team[i].role;


    teammate.classList.add('h4');
    teammateRole.classList.add('card-text');

    // trying to append the created elements
    cardBody.appendChild(teammate);
    cardBody.appendChild(teammateRole);
    card.appendChild(img);
    card.appendChild(cardBody);

    cardContainer.appendChild(card);


}




