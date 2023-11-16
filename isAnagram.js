var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let obj={};
    for(let i=0; i<s.length; i++){
        
        obj[s[i]] = obj[s[i]] ? obj[s[i]]+1 : 1;
    };


    for(let j=0;j<t.length;j++){
        if(obj[t[j]]){
            obj[t[j]]--;
        }else{
            return false;
        }
    }
    return true;
};
