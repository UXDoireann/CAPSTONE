import{handleSubmit} from './js/form.js'
import{dateCount} from './js/date.js'
//import{postDate} from './js/date.js'
//import{post} from './js/date.js'

//Event Listener for Form Submission
document.getElementById('dreams').addEventListener('click', handleSubmit);
document.getElementById('get').addEventListener('click', dateCount);
//document.getElementById('get').addEventListener('click', postDate);
//document.getElementById('get').addEventListener('click', post);


import './styles/card.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'





export{handleSubmit}
export{dateCount}
//export{postDate}
//export{post}