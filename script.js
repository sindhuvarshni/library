const button = document.querySelector('button')
let resultdiv = document.createElement('div')
resultdiv.id = 'result'
document.getElementById('wrapper').appendChild(resultdiv)

//event listener
button.addEventListener('click',displayStats)
function displayStats(){
    
    const input = document.getElementById("input")
    const Books = input.options[input.selectedIndex].value
    let para;
    
    switch(Books){
        case 'Short story':
            para="A short story is a fictional story which is more than 1,600 words and less than 20,000. One famous example of a short story is Anton Chekhov's 'Gooseberries' written in 1898.<br>The link will be given below</br>"
            break
        case 'Historical fiction':
            para="Historical Fiction is a story that takes readers to a time and place in the past.<br>The link will be given below</br>"
            break
        case 'Horror':
            para=" A feeling of great shock, fear, or disgust People watched in horror as the plane crashed to the ground. With a look of horror, he asked if the doctor thought he had cancer. The thought of being left alone filled her with horror.<br>The link will be given below</br>"
            break
        case 'Poetry':
            para="Poetry is a type of literature that aims to evoke an emotional response in the reader through language chosen and arranged for its meaning, sound, and rhythm.<br>The link will be given below</br>"
            break
        case 'Essay':
            para="Essay, an analytic, interpretative, or critical literary composition usually much shorter and less systematic and formal than a dissertation or thesis and usually dealing with its subject from a limited and often personal point of view.<br>The link will be given below</br>"
            break

    }
    let text = para 
    console.log(text) 
    
    document.getElementById('result').innerHTML = text


}