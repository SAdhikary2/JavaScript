const grade="D";

switch(grade)
{
    case "A":
        console.log('very good');
        break;

    case "B":
        console.log('good !! keep learning');
        break;
    case "c":
        console.log('need improvement !!');
        break;
    case "D":
    case "E":
        console.log('not good');
        break;



    // case "E":
    //     console.log('not good');
    //     break;
    default:
        console.log('invalid grade');
}