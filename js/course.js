//---------------------------------------------------------------------------------event listeners on edit  delete submit
{
    let submit = document.getElementById("submit_created_course");
    let crsedit = document.getElementsByClassName("course_edit");
    let crsdel = document.getElementsByClassName("course_delete");
    let savechanges = document.getElementById("submit_edited_course");

    submit.addEventListener("click", createCourse);

    let crt = document.getElementById("create_course");
    let close = document.getElementById("close_courseCreate");
    let form = document.getElementById("course_formCreate");
    let bgdd = document.getElementById("bgdd");

    crt.addEventListener("click", showForm);
    close.addEventListener("click", closeForm);


    for (var i = 0; i < crsedit.length; i++) {
        crsedit[i].addEventListener("click", editCourse);
    };
    for (var i = 0; i < crsdel.length; i++) {
        crsdel[i].addEventListener("click", delCourse);
    };


    //-------------------------------------------------------------------------- Open and close form functions

    function showForm() {

        document.getElementById("course_id").value = "";
        document.getElementById("course_title").value = "";
        document.getElementById("course_stream").value = "";
        document.getElementById("full_time").checked = true;
        document.getElementById("start_date").value = "";
        document.getElementById("end_date").value = "";
        savechanges.style.display = "none";
        form.style.display = "inline-block";
        bgdd.style.display = "inline-block";
        submit.style.display = "inline-block";
    };

    function showFormEdit() {
        submit.style.display = "none";
        form.style.display = "inline-block";
        bgdd.style.display = "inline-block";
        savechanges.style.display = "inline-block";

    };


    function closeForm() {
        form.style.display = "none";
        bgdd.style.display = "none";
    };


    //-----------------------------------------------------------------------------selectors for create course
    let forma = document.getElementById("course_forma");

    let courseID = document.getElementById("course_id");
    let courseTitle = document.getElementById("course_title");
    let courseStream = document.getElementById("course_stream");
    let coursefulltime = document.getElementById("full_time");
    let courseparttime = document.getElementById("part_time");
    let courseStartDate = document.getElementById("start_date");
    let courseEndDate = document.getElementById("end_date");
    //-----------------------------------------------------------------------------Create course function on submit    
    function createCourse(e) {

        e.preventDefault();
        let chk_status = forma.checkValidity();
        forma.reportValidity();
        if (chk_status) {

            let courses = document.getElementById("course_data");


            let cid = document.createElement("td");
            cid.innerText = courseID.value;

            let ct = document.createElement("td");
            ct.innerText = courseTitle.value;

            let cs = document.createElement("td");
            cs.innerText = courseStream.value;

            let cty = document.createElement("td");
            if (coursefulltime.checked)
                cty.innerText = coursefulltime.value;
            else
                cty.innerText = courseparttime.value;


            let cstart = document.createElement("td");
            cstart.innerText = courseStartDate.value;

            let cend = document.createElement("td");
            cend.innerText = courseEndDate.value;

            let cst1 = document.createElement("td");
            cst1.innerText = "None";

            let ctr1 = document.createElement("td");
            ctr1.innerText = "None";

            let cas1 = document.createElement("td");
            cas1.innerText = "None";

            let crow = document.createElement("tr");

            let edtbtn = document.createElement("td");
            edtbtn.innerHTML = '<p class="course_edit">Edit</p><p class="course_delete">Delete</p>';
            edtbtn.firstChild.addEventListener("click", editCourse);
            edtbtn.firstChild.nextSibling.addEventListener("click", delCourse);

            crow.append(cid, ct, cs, cty, cstart, cend,cst1,ctr1,cas1, edtbtn);


            courses.appendChild(crow);

            closeForm();
        };
    };


    //--------------------------------------------------------------------------------------------------Edit course    

    function editCourse(e) {

        showFormEdit();

        let fillform = this.parentNode.parentNode.cells;
        document.getElementById("course_id").value = fillform[0].innerText;
        document.getElementById("course_title").value = fillform[1].innerText;
        document.getElementById("course_stream").value = fillform[2].innerText;
        if (fillform[3].innerText == "Full Time")
            document.getElementById("full_time").checked = 1;
        else
            document.getElementById("part_time").checked =1 ;
       
        document.getElementById("start_date").value = fillform[4].innerText;
        document.getElementById("end_date").value = fillform[5].innerText;

        document.getElementById("submit_edited_course").addEventListener("click", save)

        function save(e) {
            e.preventDefault();

            let chk_status = forma.checkValidity();
            forma.reportValidity();

            if (chk_status) {

                fillform[0].innerText = document.getElementById("course_id").value;

                fillform[1].innerText = document.getElementById("course_title").value;

                fillform[2].innerText = document.getElementById("course_stream").value;

                if (document.getElementById("full_time").checked) {                  
                    fillform[3].innerText = document.getElementById("full_time").value;
                }
                else
                    fillform[3].innerText = document.getElementById("part_time").value;

                fillform[4].innerText = document.getElementById("start_date").value;

                fillform[5].innerText = document.getElementById("end_date").value;

                document.getElementById("submit_edited_course").removeEventListener("click", save);

                closeForm();
            }
        }
    }


    //-----------------------------------------------------------------------------------------------Delete course
    
    function delCourse() {
        
        let crrow = this.parentNode.parentNode.rowIndex;

        document.getElementById("course_data").deleteRow(crrow -1);   
    };


}