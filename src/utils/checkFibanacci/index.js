const fibonacci = (query, count = 1, last = 0) => {
    if(count < query){
       return fibonacci(query, count+last, count);
    };
    if(count === query){
       return true;
    }
    return false;
 };

 export default fibonacci;