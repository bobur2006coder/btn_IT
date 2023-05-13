let showModalBtn = document.querySelector(".show-modal");
let bottomSheet = document.querySelector('.bottom-sheet');
let sheetOverlay = bottomSheet.querySelector('.sheet-overlay');
let dragIcon = bottomSheet.querySelector('.drag-icon');
let sheetContent = bottomSheet.querySelector('.content');

let showBottomsheet=()=>{
bottomSheet.classList.add("show");
updateSheetHeight(50);
}
let isdragging = false,startY,startHaight;

let hideBottomSheet =()=>{
    bottomSheet.classList.remove('show')
}
let  updateSheetHeight = (height)=>{
    sheetContent.style.height=`${height}vh`
}


let dragStart =(e)=>{
    isdragging=true;
    startY=e.pageY;
    startHaight=parseInt(sheetContent.style.height)
   
}
let dragging =(e) => {
    if(!isdragging)return;
    const delta = startY-e.pageY;
    const newHeight = startHaight+delta/window.innerHeight*100;
    updateSheetHeight(newHeight)
    // sheetContent.style.height=`${e.pageY}vh`
//   console.log(e.pageY);
}

let dragStop =()=>{
    isdragging=false;
}

document.addEventListener("mousedown", dragStop);
dragIcon.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragging);

showModalBtn.addEventListener('click',showBottomsheet)
sheetOverlay.addEventListener('click',hideBottomSheet)
