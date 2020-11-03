$(document).ready(function () {

    let add_cs_as = $(".ad_cs_as");
    let cls = $(".close");

    function clsi() {
        document.getElementById("form_cs_as").style.display = "none";
        document.getElementById("bgdd").style.display = "none";

    }

    function showcsas() {
        let ssas = document.getElementById("form_cs_as");
        ssas.style.display = "inline-block";
        document.getElementById("bgdd").style.display = "inline-block";
    }

    $(document).on("click", ".ad_cs_as", showcsas);
    $(document).on("click", ".close", clsi);


    cls.on("click", clsi);


    //Shows form

    $("#create_ass").click(function () {
        $("#ass_formCreate").css("display", "inline-block");
        $("#bgdd").css("display", "inline-block");
        $("#submit_created_ass").css("display", "inline-block");
        $("#submit_edited_ass").css("display", "none");

        $("#ass_id").val("");
        $("#ass_title").val("");
        $("#ass_descri").val("");
        $("#sub_til").val("");
        $("#oral_mark").val("");
        $("#total_mark").val("");
    });

    //Closes Form

    $("#close_assCreate").click(function () {
        $("#ass_formCreate").css("display", "none");
        $("#bgdd").css("display", "none");
    });

    ////Deletes ass - works for newly created buttons too

    $(document).on("click", ".ass_delete", function () {
        $(this).parent().parent().remove();
    })

    //Shows Edit Form   and Saves changes when button is clicked

    $(document).on("click", (".ass_edit"), function () {
        $("#ass_formCreate").css("display", "inline-block");
        $("#bgdd").css("display", "inline-block");
        $("#submit_edited_ass").css("display", "inline-block");
        $("#submit_created_ass").css("display", "none");

        let dt = $(this).parent().parent().children();          // gets the data cells of the row that was clicked in an array        

        $("#ass_id").val(dt[0].innerText);
        $("#ass_title").val(dt[1].innerText);
        $("#ass_descri").val(dt[2].innerText);
        $("#sub_til").val(dt[3].innerText);
        $("#oral_mark").val(dt[4].innerText);
        $("#total_mark").val(dt[5].innerText);


        let b = function (e) {

            e.preventDefault();

            let formaaa = document.getElementById("ass_forma");

            let asss = formaaa.checkValidity();
            formaaa.reportValidity();

            if (asss) {
                dt[0].innerText = $("#ass_id").val();
                dt[1].innerText = $("#ass_title").val();
                dt[2].innerText = $("#ass_descri").val();
                dt[3].innerText = $("#sub_til").val();
                dt[4].innerText = $("#oral_mark").val();
                dt[5].innerText = $("#total_mark").val();

                $("#ass_formCreate").css("display", "none");
                $("#bgdd").css("display", "none");
                $(document).off("click", "#submit_edited_ass", b);
            }
        };

        $(document).on("click", "#submit_edited_ass", b);

    });

    //Creates ass

    $("#submit_created_ass").click(function (e) {
        e.preventDefault();

        let forma = document.getElementById("ass_forma");

        let chk_status = forma.checkValidity();
        forma.reportValidity();

        if (chk_status) {

            let id = $("<td>");

            id.text($("#ass_id").val());

            let at = $("<td>");

            at.text($("#ass_title").val());

            let ad = $("<td>");

            ad.text($("#ass_descri").val());

            let st = $("<td>");

            st.text($("#sub_til").val());

            let om = $("<td>");

            om.text($("#oral_mark").val());

            let tm = $("<td>");

            tm.text($("#total_mark").val());

            let srt = $("<td>");
            srt.text("None");    

            let ed = $("<td>");

            ed.html("<p class='ass_edit'>Edit</p><p class='ass_delete'>Delete</p><hr /><button class='ad_cs_as'>Add To Course</button>");

            let row = $("<tr>");

            row.append(id, at, ad, st, om, tm,srt, ed);

            $("#ass_data").append(row);

            $("#ass_formCreate").css("display", "none");
            $("#bgdd").css("display", "none");
        }

    });

});