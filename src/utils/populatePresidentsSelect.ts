import usPresidents from '../data/presidents'

export default function populatePresidentsSelect() {
  const selectElement = document.getElementById(
    'presidentsSelect'
  ) as HTMLSelectElement
  // Loop through the usPresidents array and create an option element for each president
  usPresidents.forEach((president) => {
    const option = document.createElement('option')
    option.text = president
    option.value = president // You can set the value to some unique identifier if needed
    selectElement.appendChild(option)
  })
}
