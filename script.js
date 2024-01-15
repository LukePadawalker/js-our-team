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
    {Name: 'Wayne Barnett', role: 'Founder & CEO', img: 'wayne-barnett-founder-ceo.jpg'},
    {Name: 'Angela Caroll', role: 'Chief Editor', img: 'angela-caroll-chief-editor.jpg'},
    {Name: 'Walter Gordon', role: 'Office Manager', img: 'walter-gordon-office-manager.jpg'},
    {Name: 'Angela Lopez', role: 'Social Media Manager', img: 'angela-lopez-social-media-manager.jpg'},
    {Name: 'Scott Estrada', role: 'Developer', img: 'scott-estrada-developer.jpg'},
    {Name: 'Barbara Ramos', role: 'Graphic Designer', img: 'barbara-ramos-graphic-designer.jpg'}
]

// 

for (let i = 0;i < team.length;i++){
    console.log(team[i].Name,' | ', team[i].role, ' | ', team[i].img);
    const card = document.createElement('div');
    card.classList.add('card');
    const img = document.createElement('img');
    //source image
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body', 'd-flex', 'justify-content-center', 'flex-column', 'align-items-center');
    card.appendChild(img, cardBody);
    const teammate = document.createElement('p');
    const teammateRole = document.createElement('p');
    teammate.classList.add('h4');
    teammateRole.classList.add('card-text');
    cardBody.appendChild(teammate, teammateRole);
    card.appendChild(img, cardBody);
    






}




