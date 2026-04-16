// Supprimez les caractères en double consécutifs // aaabbbcca  → abca

const value = 'aaabbbcca'

let rep = '' ; 

for(let i = 0 ; i < value.length ; i++ ) {
    
    if(rep[rep.length -1 ] !== value[i]) {
        rep += value[i]  ; 
    }

}

console.log(rep)

