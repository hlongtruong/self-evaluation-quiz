const controller = {}
controller.gettingAnswer = (data) =>{
    if (data === "1"){
        return 1
    }
    else if (data === "2"){
        return 2
    }
    else if (data === "3"){
        return 3
    }
    else if (data === "4"){
        return 4
    }
    else if (data === "5"){
        return 5
    }
    else{
        return 0
    }
}
