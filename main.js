const compTaskList = document.querySelector(".task-completed");
const showCompTask = document.querySelector(".completed-tab");

showCompTask.addEventListener("click", renderTask);
function renderTask() {
    document.querySelector(".fa-chevron-down").classList.toggle("d-none");
    document.querySelector(".fa-chevron-up").classList.toggle("d-none");
    compTaskList.classList.toggle("d-none");
}
