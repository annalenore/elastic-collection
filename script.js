const DoorList = document.getElementById('door-list')

function renderDoor(door, i) {
  // Create .door element
  const doorElement = document.createElement('div')

  doorElement.classList.add('door')
  doorElement.classList.add(`door-${i}`)

  console.log(doorElement)
  console.log(door.door_illustration)

  // Create the inner HTML content
  const doorHTML = `
    <a href="maps_title.html?title=${door_number}">
      <img src="${door_illustration}">
    </a>
    <ul>
      <li>Door Number: ${door_number}</li>
      <li>Time: ${arrival_time}</li>
      <li>Address: ${added_address}</li>
      <li>Have I been there before?: ${been_there_yes_no}</li>
      <li>Who lives there?: ${people_that_live_there}</li>
      <li>Photo: ${door_image}</li>
    </ul>
  `

  // Set the inner HTML content of the doorElement
  doorElement.innerHTML = doorHTML

  // Add to the list #door-list
  doorList.appendChild(doorElement)
}

// Start App!
// door.forEach(function(door) {
//  
// })

fetch('data.json')
    .then((data) => data.json())
    



