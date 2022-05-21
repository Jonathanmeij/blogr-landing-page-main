const mobileDropdownButton = document.getElementsByClassName('hamburger')
const dropdownButton = document.getElementsByClassName('dropdownButton')



// mobileDropdownButton.onclick = () => {
//     dropdown[0].classList.toggle('show')
// }

document.addEventListener("click", toggleDropdown);

function toggleDropdown(event) {
    const dropdown = document.getElementsByClassName('dropdownContent')

    if (event.target.classList.contains('hamburger')){
        dropdown[0].classList.toggle('show');
        mobileDropdownButton[0].classList.toggle('hidden')
        mobileDropdownButton[1].classList.toggle('hidden')
    } else if(event.target.classList.length == 0) {
        dropdown[0].classList.remove('show');
        mobileDropdownButton[0].classList.remove('hidden')
        mobileDropdownButton[1].classList.add('hidden')
    }
}    

console.log(dropdownButton)


for (let index = 0; index < dropdownButton.length; index++) {
    dropdownButton[index].addEventListener('click', function toggleSecondDropdown(event) {
        const className = this.classList[1]
        const div = document.getElementsByClassName(className)[1]
        div.classList.toggle('showA')
    })
}
