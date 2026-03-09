let schedules = JSON.parse(localStorage.getItem("gymSchedules")) || [];

let editIndex = -1;

function saveData(){
    localStorage.setItem("gymSchedules", JSON.stringify(schedules));
}

function render(){

    let table = document.getElementById("scheduleList");
    table.innerHTML = "";

    for(let i=0;i<schedules.length;i++){

        let s = schedules[i];

        table.innerHTML += `
        <tr>
        <td>${s.name}</td>
        <td>${s.day}</td>
        <td>${s.time}</td>
        <td>${s.duration}</td>

        <td>

        <button class="btn btn-warning btn-sm me-1"
        onclick="editSchedule(${i})">
        Edit
        </button>

        <button class="btn btn-danger btn-sm"
        onclick="deleteSchedule(${i})">
        Hapus
        </button>

        </td>

        </tr>
        `;
    }
}

function addSchedule(){

    let name = document.getElementById("name").value;
    let day = document.getElementById("day").value;
    let time = document.getElementById("time").value;
    let duration = document.getElementById("duration").value;

    if(name=="" || day=="" || time=="" || duration==""){
        alert("Semua data harus diisi");
        return;
    }

    let schedule = {
        name:name,
        day:day,
        time:time,
        duration:duration
    };

    if(editIndex === -1){

        // CREATE
        schedules.push(schedule);

    }else{

        // UPDATE
        schedules[editIndex] = schedule;
        editIndex = -1;

        document.getElementById("submitBtn").innerText = "Tambah Jadwal";
    }

    saveData();
    render();
    clearForm();
}

function editSchedule(index){

    let s = schedules[index];

    document.getElementById("name").value = s.name;
    document.getElementById("day").value = s.day;
    document.getElementById("time").value = s.time;
    document.getElementById("duration").value = s.duration;

    editIndex = index;

    document.getElementById("submitBtn").innerText = "Update Jadwal";
}

function deleteSchedule(index){

    if(confirm("Hapus jadwal ini?")){
        schedules.splice(index,1);
        saveData();
        render();
    }
}

function clearForm(){

    document.getElementById("name").value="";
    document.getElementById("day").value="";
    document.getElementById("time").value="";
    document.getElementById("duration").value="";
}

render();