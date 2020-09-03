const controller = {}
controller.gettingAnswer = async(data) =>{
    if (data < 20){
        return 1
    }
    else if (data >= 20 && data < 40){
        return 2
    }
    else if (data >= 40 && data < 60){
        return 3
    }
    else if (data >= 60 && data < 80){
        return 4
    }
    else if (data >= 80){
        return 5
    }


}
