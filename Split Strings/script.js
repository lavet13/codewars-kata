function solution(str){
    if(str.length) {

      if(str.length % 2 === 0) {
        let result = [],
            characters = "";
        
        for(let i = 0; i < str.split("").length; i++) {
          
          characters += str[i];
          
          if(characters.length === 2) {
            result.push(characters);
            characters = "";
           }
        }
        
        return result;
      } else {
          let result = [],
              characters = "";

          for(let i = 0; i < str.split("").length; i++) {
            
            characters += str[i];
            
            if(i === str.split("").length - 1) {
                characters += "_";
                result.push(characters);
                characters = "";
            } else if(characters.length === 2) {
                result.push(characters);
                characters = "";
            }
          }

          return result;
      }
    } else {
      return [];
    }
 }

 console.log(solution("abcdef")); // ["ab", "cd", "ef"]

 console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"]