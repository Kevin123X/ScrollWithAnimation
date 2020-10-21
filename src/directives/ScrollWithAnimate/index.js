import Vue from 'vue'
export default ()=>{
    const handleSetClassName=(el,binding)=>{
        const {value}=binding
        value.unshift('animate__animated')
        if (el.className.indexOf('animate__animated')<0) {
            el.className+=' '+value.join(' ')
        el.style.animationDelay=`${el.getAttribute('delay')}s`
        }
        
    }
    const handlePositionData=(el,binding)=>{
        const pos =el.getBoundingClientRect()
        const {top}=pos
        const vh=document.documentElement.clientHeight
        if (top<=vh) {
            el.style.visibility='visible'
            handleSetClassName(el,binding)
        }else{
            el.style.visibility='hidden'   
        }
        // const {top,left,right,bottom}=pos
    }
    const handleAddScrollListener=(el,binding)=>{
        handlePositionData(el,binding)
        window.addEventListener('scroll',function () { 
            handlePositionData(el,binding)
           })
    }
    Vue.directive('scroll-animate',{
        inserted:(el,binding)=>{
        el.style.visibility='hidden'
        handleAddScrollListener(el,binding)
        }
    })
};
