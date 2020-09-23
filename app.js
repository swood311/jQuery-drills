$(document).ready(function () {

    $("#btnSubmit").prop("disabled", true);
    let theDiv = $('<div></div>')
    $('body').append(theDiv);
    let ul = $('<ul></ul>');
    $('body').append(ul)

    // $('#btnSubmit').click(function () {
    //  alert("it worked!")

    $("form").submit(function (event) {
        event.preventDefault()
        let value = $("input[type= 'text']").val()
        /*alert(value);
        let h2 = $('<h2></h2>');
        h2.append(value);
        (theDiv).append(h2)
        h2.hover(function () {
            h2.css({
                backgroundColor: "red",
                borderRadius: "5px"
            })
        },
            function () {
                h2.css({
                    backgroundColor: "white",
                    borderRadius: "5px"
                })
            });
        */

        let li = $('<li></li>');
        li.append(value);
        $(ul).append(li);

        li.click(function () {
            let randomNumber1 = Math.floor(Math.random() * 255);
            let randomNumber2 = Math.floor(Math.random() * 255);
            let randomNumber3 = Math.floor(Math.random() * 255);


            li.css("color", ` rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`)
        });

        li.dblclick(function () {
            li.remove()
        });
    });
    $(document).keyup(function () {
        if ($("input[type = 'text").val() === "") {
            $('#btnSubmit').prop('disabled', true);

        } else {
            $('#btnSubmit').prop('disabled', false);
        }
    });

});