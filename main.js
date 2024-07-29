const router = document.getElementById("router")
router.addEventListener('mouseenter',()=>{
    //获取滚动条dom
    router.style.overflowY = 'scroll'
    console.log('1111');

})
router.addEventListener('mouseleave',()=>{
    //获取滚动条dom
    router.style.overflowY = 'hidden'

})
function toPage(path){
    document.getElementById('dynamicIframe').src = '/src/components/'+ path + '/index.html';
    
}
