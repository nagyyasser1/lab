const openMenuIcon = document.getElementById('openMenuIcon')
const closeMenuIcon = document.getElementById('closeMenuIcon')
const sideNav = document.getElementById('sideNav')

openMenuIcon.onclick = () => {
  if (openMenuIcon.className === 'fa-solid fa-bars') {
    //open
    openMenuIcon.className = 'fa-solid fa-xmark'

    sideNav.style.right = '0px'
  } else {
    openMenuIcon.className = 'fa-solid fa-bars' //close

    sideNav.style.right = '-400px'
  }
}

closeMenuIcon.onclick = () => {}
