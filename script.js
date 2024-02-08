function get_result(){

    let roll_no = document.getElementById("rn").value

    // console.log(roll_no)

    roll_no = Number.parseInt(roll_no)
    roll_no += 100

    if(roll_no >= 1 && roll_no <= 400)
    {
        // console.log(roll_no)

        window.open(`https://ums.vnsgu.net/Result/StudentResultDisplay.aspx?HtmlURL=4762,`+roll_no)
    }
    else
    {
        alert(" Please Enter valid Roll Number..... ")
    }

    document.getElementById("rn").innerHTML = " "
}