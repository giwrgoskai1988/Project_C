$(document).ready(function () {


    let add_cs_st = $(".ad_cs_st");
    let clss = $(".close");

    function clsie() {
        document.getElementById("form_cs_st").style.display = "none";
        document.getElementById("bgdd").style.display = "none";

    }

    function showcsst() {
        let ssas = document.getElementById("form_cs_st");
        ssas.style.display = "inline-block";
        document.getElementById("bgdd").style.display = "inline-block";
    }

    $(document).on("click", ".ad_cs_st", showcsst);
    $(document).on("click", ".close", clsie);



    //Shows form

    $("#create_student").click(function () {
        $("#student_formCreate").css("display", "inline-block");
        $("#bgdd").css("display", "inline-block");
        $("#submit_created_student").css("display", "inline-block");
        $("#submit_edited_student").css("display", "none");

        $("#student_id").val("");
        $("#student_first_name").val("");
        $("#student_last_name").val("");
        $("#date_of_birth").val("");
        $("#tuition_fees").val("");
    });


    let add_as = document.getElementsByClassName("ad_as");
    let cls = document.getElementsByClassName("close");


    function clsi() {
        document.getElementById("form_sta").style.display = "none";
        document.getElementById("bgdd").style.display = "none";

    }

    function showas() {
        let ssas = document.getElementById("form_sta");
        ssas.style.display = "inline-block";
        document.getElementById("bgdd").style.display = "inline-block";
    }

    for (var i = 0; i < cls.length; i++) {
        cls[i].addEventListener("click", clsi);
    };

    for (var i = 0; i < add_as.length; i++) {
        add_as[i].addEventListener("click", showas);
    };

    //Closes Form

    $("#close_studentCreate").click(function () {
        $("#student_formCreate").css("display", "none");
        $("#bgdd").css("display", "none");
    });

    ////Deletes student - works for newly created buttons too

    $(document).on("click", ".student_delete", function () {
        $(this).parent().parent().remove();
    })

    //Shows Edit Form   and Saves changes when button is clicked

    $(document).on("click", (".student_edit"), function () {
        $("#student_formCreate").css("display", "inline-block");
        $("#bgdd").css("display", "inline-block");
        $("#submit_edited_student").css("display", "inline-block");
        $("#submit_created_student").css("display", "none");

        let dt = $(this).parent().parent().children();          // gets the data cells of the row that was clicked in an array        

        $("#student_id").val(dt[0].innerText);
        $("#student_first_name").val(dt[1].innerText);
        $("#student_last_name").val(dt[2].innerText);
        $("#date_of_birth").val(dt[3].innerText);
        $("#tuition_fees").val(dt[4].innerText);


        let b = function (e) {

            e.preventDefault();

            let formaaa = document.getElementById("student_forma");

            let asss = formaaa.checkValidity();
            formaaa.reportValidity();

            if (asss) {
                dt[0].innerText = $("#student_id").val();
                dt[1].innerText = $("#student_first_name").val();
                dt[2].innerText = $("#student_last_name").val();
                dt[3].innerText = $("#date_of_birth").val();
                dt[4].innerText = $("#tuition_fees").val();

                $("#student_formCreate").css("display", "none");
                $("#bgdd").css("display", "none");
                $(document).off("click", "#submit_edited_student", b);
            }

        }; 

        $(document).on("click", "#submit_edited_student", b);

    });

    //Creates Student

    $("#submit_created_student").click(function (e) {
        e.preventDefault();

        let forma = document.getElementById("student_forma");

        let chk_status = forma.checkValidity();
        forma.reportValidity();

        if (chk_status) {

            let id = $("<td>");

            id.text($("#student_id").val());

            let fn = $("<td>");

            fn.text($("#student_first_name").val());

            let ln = $("<td>");

            ln.text($("#student_last_name").val());

            let dt = $("<td>");

            dt.text($("#date_of_birth").val());

            let tf = $("<td>");

            tf.text($("#tuition_fees").val());

            let tf2 = $("<td>");

            tf2.text("None");
            let tf3 = $("<td>");

            tf3.text("None");

            let ed = $("<td>");

            ed.html("<p class='student_edit'>Edit</p><p class='student_delete'>Delete</p><button class='ad_cs_st'>Add To Course</button>");

            let row = $("<tr>");

            row.append(id, fn, ln, dt, tf,tf2,tf3, ed);

            $("#student_data").append(row);

            $("#student_formCreate").css("display", "none");
            $("#bgdd").css("display", "none");
        }

    });

});