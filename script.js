
var specifications =  "The Password must be at least 8 characters long and can contain any mix of character types that you wish. The more variation, the stronger the password!";

alert(specifications);






  function LetThereBePasswords() {




    //checkbox control
    var useUpperCase = 
    document.getElementById("UpperCheck").checked;

    var useLowerCase = 
    document.getElementById("LowerCheck").checked;

    var useNumbers = 
    document.getElementById("NumberCheck").checked;

    var useSpecials = 
    document.getElementById("SpecialCheck").checked;


    //if none of the options are checked, generation is impossible: presents this alart
    if(!useUpperCase && !useLowerCase && !useNumbers && !useSpecials){

        alert("I can't make your password without your help! Please choose at least one of the character types.")
        return;
    }

    //Character Types
    let UpperCase = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let LowerCase =
    "abcdefghijklmnopqrstuvwxyz";
    let Numbers =
    "123456789";
    let Specials =
    "!$%&'()*+,-./:;<=>?@[]^_`{|}~";

    
   

