document.addEventListener('DOMContentLoaded', () => {
  clickHandler()
})


function clickHandler(){

document.addEventListener('click', event =>{
  const {target} = event;
  if(target.matches(".accordion__button")){
      accordion(target)
  }
})
}
function accordion(item) {
  
  const $accordionItems = document.querySelectorAll(".accordion__item");
  if(item.closest(".accordion__item").classList.contains("active")){
    item.closest(".accordion__item").classList.remove("active")  
  }
  else{
    $accordionItems.forEach(element => {
      element.classList.remove("active");
    });
    const height = getHeight(item);
    console.log(height)
    item.closest(".accordion__item").classList.add("active")
  }

}
function getHeight(item) {
  item.style.display="block"
  const height = item.scrollHeight + 'px';
  item.style.display = '';
  return height
}