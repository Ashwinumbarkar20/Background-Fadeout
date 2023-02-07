let img1=document.getElementById("imagecontainer");
window.addEventListener("scroll",(e)=>{
    updateimage();
})
function updateimage()
{
    img1.style.opacity=1-window.pageYOffset/800;
    img1.style.backgroundSize=160-window.pageYOffset/12+"%";
}