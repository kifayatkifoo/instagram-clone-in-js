import { createElement } from '../react/index'


export const Ereror = ()=>{


  const  ErrorIcon = createElement('i',{class:"fa fa-frown-o"})  

  const  heading = createElement('h1',null,"404 Error")

    return createElement('div',{class:"error-div"},ErrorIcon,heading)
}   