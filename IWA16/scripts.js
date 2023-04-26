// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment

  /*destructuring assignment in the createHtml 
  function that extracts the firstName, surname, id, and 
  races properties from the athlete object,*/


 //nwabisa//
 const createHtml = (athlete) => {
    const {firstName, surname, id, races} = athlete;
    const [latestRace] = races.slice(-1); //the slice method is used to get the latest race by extracting the last element of the races array
    const {date, time} = latestRace;
  
    const fragment = document.createDocumentFragment();
  
    const title = document.createElement("h2"); //made h2 to be a string
    title.textContent= id; //Added the textContent
    fragment.appendChild(title);
  
    const list = document.createElement("dl");
    const raceCount = races.length;
  
    const day = new Date (date).getDate();
    const month = MONTHS[new Date (date).getMonth()];
    const year = new Date (date).getFullYear();

    /*createHtml function is called for each athlete using the Object.values method to get an array of the data 
    object's values, and the forEach method to iterate
     over that array and call the createHtml function for each athlete
     (i have called out each athlete using using the object method) */
  
    const [first, second, third, fourth] = time;
    const total = first + second + third + fourth;
  
    const hours = Math.floor(total / 60);
    const minutes = total % 60;
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${raceCount}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}</dd> 
    `;
    /* the template literal string used to create the HTML
     includes expressions to format the date and time data in
      a more syntax appropriate way, using the padStart (the syntax was inccorrect in the initial code)*/
  
    fragment.appendChild(list);
    return fragment;
  };
  const {NM372, SV782} = data.response.data; /*[NM372], [SV782] = data*/

  document.querySelector("[data-athlete='NM372']").appendChild(createHtml(NM372));
  document.querySelector("[data-athlete='SV782']").appendChild(createHtml(SV782));




    
    