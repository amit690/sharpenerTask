const form=document.querySelector('form');
form.addEventListener('submit',function(event){
    event.preventDefault();
    const userinputs=document.getElementsByTagName('input')
    for (let index = 0; index < userinputs.length; index++) {
        const element = userinputs[index];
        localStorage.setItem(element.name,element.value);
        
    }
})