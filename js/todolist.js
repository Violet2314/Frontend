//导航栏
const more = document.getElementById("more");
const nav = document.querySelector("nav");
const exit = document.getElementById("exit");

more.addEventListener("click",() => {
    nav.classList.add("menu-btn");
})

exit.addEventListener("click",() => {
    nav.classList.remove("menu-btn");
})

//添加task
const add = document.getElementById("add-task-btn");
add.addEventListener("click",() => {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    const taskItem = document.createElement("div");
    if(taskText != ""){
        
        taskItem.classList.add("task", "fade-in");
        
        taskItem.innerHTML = `
            <button class = "complete-btn">Complete</button>
            <span>${taskText}</span>
        `;

        document.querySelector('.unfinish .container').appendChild(taskItem);
        setTimeout(() => taskItem.classList.add("show"), 10);

        taskInput.value = "";
        updatePercent();
        /* 在这里添加克隆逻辑的话，在克隆元素后添加事件监听器时，新创建的任务项没有
        保留原本的点击逻辑。因此当你点击新的 .complete-btn 时，之前的事件处理器被丢失了。 */
    }
})

//finish与unfinish转换
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("complete-btn")) {
        // 处理 Complete 按钮点击
        const taskItem = e.target.closest(".task");//追最近祖宗
        taskItem.classList.add("fade-out");
        taskItem.classList.remove("fade-in");

        setTimeout(() => {
            const finishedTask = taskItem.cloneNode(true);

            finishedTask.classList.remove("fade-out");
            finishedTask.classList.add("fade-in");

            finishedTask.querySelector(".complete-btn").classList.replace("complete-btn", "uncomplete-btn");
            finishedTask.querySelector(".uncomplete-btn").innerText = "UnComplete";

            document.querySelector('.finish .container').appendChild(finishedTask);
            
            setTimeout(() => finishedTask.classList.add("show"), 10);

            taskItem.remove();
            updatePercent();
        }, 500); // 500ms 与 CSS transition 时间保持一致
    };

    if (e.target.classList.contains("uncomplete-btn")) {
        // 处理 UnComplete 按钮点击
        const taskItem = e.target.closest(".task");//追最近祖宗
        taskItem.classList.add("fade-out");
        taskItem.classList.remove("fade-in");

        setTimeout(() => {
            const unfinishedTask = taskItem.cloneNode(true);

            unfinishedTask.classList.remove("fade-out");
            unfinishedTask.classList.add("fade-in");

            unfinishedTask.querySelector(".uncomplete-btn").classList.replace("uncomplete-btn", "complete-btn");
            unfinishedTask.querySelector(".complete-btn").innerText = "Complete";

            document.querySelector('.unfinish .container').appendChild(unfinishedTask);
            
            setTimeout(() => unfinishedTask.classList.add("show"), 10);

            taskItem.remove();
            updatePercent();
        }, 500);
    }
});

//进度条
function updatePercent() {
    const sumtask = document.querySelectorAll('.task').length;
    const finishtask = document.querySelectorAll('.finish .task').length;
    const unfinish = document.querySelectorAll('.unfinish .task').length;
    
    console.log(sumtask);
    console.log(unfinish);
    console.log(finishtask);

    if(sumtask != 0){
        const precent = (finishtask / sumtask) * 100;
        document.querySelector('.progress-bar').style.width = `${precent}%`;
        document.querySelector('.present').innerText = Math.round(precent) + "%";
        changeItem(precent);
    }
}

// 页面加载时自动执行一次
document.addEventListener('DOMContentLoaded', () => {
    updatePercent();  // 页面加载完成后自动执行
});

document.addEventListener('click',(e) => {
    if(e.target.classList.contains('open-unfinish')) {
        e.target.classList.replace('open-unfinish','close-unfinish');
        const parent = e.target.parentElement.parentElement;
        const container = parent.querySelector('.container');
        e.target.src = '../image/icon-kfckfc.svg'
        container.classList.add('collapsed');
    } else if(e.target.classList.contains('close-unfinish')) {
        e.target.classList.replace('close-unfinish','open-unfinish');
        const parent = e.target.parentElement.parentElement;
        const container = parent.querySelector('.container');
        e.target.src = '../image/chevron-down-outline.svg'
        container.classList.remove('collapsed');
    } else if(e.target.classList.contains('open-finish')) {
        e.target.classList.replace('open-finish','close-finish',);
        const parent = e.target.parentElement.parentElement;
        const container = parent.querySelector('.container');
        e.target.src = '../image/icon-kfckfc.svg'
        container.classList.add('collapsed');
    } else if(e.target.classList.contains('close-finish')) {
        e.target.classList.replace('close-finish','open-finish');
        const parent = e.target.parentElement.parentElement;
        const container = parent.querySelector('.container');
        e.target.src = '../image/chevron-down-outline.svg'
        container.classList.remove('collapsed');
    }
})

const tabItem = document.querySelectorAll('#tab-content-item');

function changeItem(precent) {
    removeShow();
    if(precent <= (1/3) * 100){
        document.querySelector('.tab-1').classList.add('shownow');
        document.querySelector('.text-1-2').querySelector('span').innerText = Math.round(precent) + "%";
    } else if(precent <= (2/3) * 100){
        document.querySelector('.tab-2').classList.add('shownow');
        document.querySelector('.text-2-2').querySelector('span').innerText = Math.round(precent) + "%";
    } else{
        document.querySelector('.tab-3').classList.add('shownow');
        document.querySelector('.text-3-2').querySelector('span').innerText = Math.round(precent) + "%";
    }
}

function removeShow() {
    tabItem.forEach(item => {
        item.classList.remove('shownow');
    });
}