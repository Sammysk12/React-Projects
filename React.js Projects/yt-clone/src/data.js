export const API_KEY = `AIzaSyBarYly2X9fQdLx3hUzHP61H_mc66aIoMc`;


export const valueConverter = (value) =>{
    if(value>= 1000000){
        return Math.floor(value/1000000) + "M"
    }
    else if(value >=10000){
        return Math.floor(value/10000) + "K"
    }
    else{
        return value;
    }
}