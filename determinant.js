const det = (arr, cb)=>{
    const calc=(matrix) => {
        if(matrix.length ===2){
        return (matrix[0][0]*matrix[1][1]-matrix[0][1]*matrix[1][0]);
        }
        else if(matrix.length >2){
                let determinant = 0;
                for(let i=0; i<matrix.length; i++){
                    let subArray = [];
                    for(let j=0; j<matrix.length; j++){
                        if(i!==j){
                            subArray.push(matrix[j].slice(1,matrix[j].length));
                        }
                    }
                    if(i%2===0){
                        determinant += matrix[i][0]*calc(subArray);
                    }
                    else{
                        determinant -=  matrix[i][0]*calc(subArray);
                    }
                }
            
            return determinant;
        }
    }



    if(!Array.isArray(arr)){
        return cb(new TypeError('Input an array'));
    }
    else if(!arr.every(el=> Array.isArray(el))) {
        return cb(new TypeError('Array elements not an array'));
    }
    else if(!arr.every(el=>el.every(subel=>typeof subel ==='number'))){
        return cb(new TypeError('All elements of sub arrays should be numbers'));
    }
    else if(!arr.every(el=>Array.isArray(el))){
        return cb(new TypeError('All elements of array should be arrays'));
    }
    else if(!arr.every(el=>el.length===arr.length)){
        return cb(new TypeError('Please input square matrix'));
    }    
    return cb(null, calc(arr));

}

module.exports = { det };