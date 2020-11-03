$(document).ready(function () {

    let add_cs_tr = $(".ad_cs_tr");
    let cls = $(".close");

    function clsi() {
        document.getElementById("form_cs_tr").style.display = "none";
        document.getElementById("bgdd").style.display = "none";

    }

    function showcs() {
        let ssas = document.getElementById("form_cs_tr");
        ssas.style.display = "inline-block";
        document.getElementById("bgdd").style.display = "inline-block";
    }

    $(document).on("click", ".ad_cs_tr", showcs);
    $(document).on("click", ".close", clsi);
 

    cls.on("click", clsi);

  
    //Shows form

    $("#create_trainer").click(function () {
        $("#trainer_formCreate").css("display", "inline-block");
        $("#bgdd").css("display", "inline-block");
        $("#submit_created_trainer").css("display", "inline-block");
        $("#submit_edited_trainer").css("display", "none");

        $("#trainer_id").val("");
        $("#trainer_first_name").val("");
        $("#trainer_last_name").val("");
        $("#trainer_subject").val("");
    });

    //Closes Form

    $("#close_trainerCreate").click(function () {
        $("#trainer_formCreate").css("display", "none");
        $("#bgdd").css("display", "none");
    });

    ////Deletes trainer - works for newly created buttons too

    $(document).on("click", ".trainer_delete", function () {
        $(this).parent().parent().remove();
    })

    //Shows Edit Form   and Saves changes when button is clicked

    $(document).on("click", (".trainer_edit"), function () {
        $("#trainer_formCreate").css("display", "inline-block");
        $("#bgdd").css("display", "inline-block");
        $("#submit_edited_trainer").css("display", "inline-block");
        $("#submit_created_trainer").css("display", "none");

        let dt = $(this).parent().parent().children();          // gets the data cells of the row that was clicked in an array        

        $("#trainer_id").val(dt[0].innerText);
        $("#trainer_first_name").val(dt[1].innerText);
        $("#trainer_last_name").val(dt[2].innerText);
        $("#trainer_subject").val(dt[3].innerText);


        let a = function (e) {

            e.preventDefault();

            let formaaa = document.getElementById("trainer_forma");

            let asss=formaaa.checkValidity();
            formaaa.reportValidity();
          
            if (asss) {
                dt[0].innerText = $("#trainer_id").val();
                dt[1].innerText = $("#trainer_first_name").val();
                dt[2].innerText = $("#trainer_last_name").val();
                dt[3].innerText = $("#trainer_subject").val();

                $("#trainer_formCreate").css("display", "none");
                $("#bgdd").css("display", "none");
                $(document).off("click", "#submit_edited_trainer", a);
            }

        };
       
        $(document).on("click", "#submit_edited_trainer", a);   

    
       
        
    }); 


    //Creates Trainer

    $("#submit_created_trainer").click(function (e) {
        e.preventDefault();

        let forma = document.getElementById("trainer_forma");

        let chk_status = forma.checkValidity();
        forma.reportValidity();

        if (chk_status) {

            let id = $("<td>");

            id.text($("#trainer_id").val());

            let fn = $("<td>");

            fn.text($("#trainer_first_name").val());

            let ln = $("<td>");

            ln.text($("#trainer_last_name").val());

            let sj = $("<td>");

            sj.text($("#trainer_subject").val());

            let srt = $("<td>");
            srt.text("None");           

            let ed = $("<td>");           

            ed.html("<p class='trainer_edit'>Edit</p><p class='trainer_delete'>Delete</p><hr /><button class='ad_cs_tr'>Add To Course</button>");
                     
            let row = $("<tr>");

            row.append(id, fn, ln, sj,srt, ed);

            $("#trainer_data").append(row);

            $("#trainer_formCreate").css("display", "none");
            $("#bgdd").css("display", "none");
        }

    });
 
});