const DEFAULT_DATA = {
    disciplines: [
        { id: "d1", name: "Вища математика", course: 1, credits: 6 },
        { id: "d2", name: "Програмування", course: 2, credits: 5 },
        { id: "d3", name: "Економетрика", course: 3, credits: 4 },
        { id: "d4", name: "Мікроекономіка", course: 1, credits: 5 },
        { id: "d5", name: "Макроекономіка", course: 2, credits: 5 },
        { id: "d6", name: "Фінанси", course: 3, credits: 4 },
        { id: "d7", name: "Маркетинг", course: 3, credits: 4 },
        { id: "d8", name: "Менеджмент", course: 2, credits: 5 },
        { id: "d9", name: "Бухгалтерський облік", course: 2, credits: 6 },
        { id: "d10", name: "Статистика", course: 1, credits: 5 },
        { id: "d11", name: "Теорія ймовірностей", course: 2, credits: 4 },
        { id: "d12", name: "Бази даних", course: 3, credits: 6 },
        { id: "d13", name: "Веб-розробка", course: 3, credits: 5 },
        { id: "d14", name: "Операційні системи", course: 2, credits: 4 },
        { id: "d15", name: "Комп'ютерні мережі", course: 3, credits: 5 },
        { id: "d16", name: "Філософія", course: 1, credits: 3 },
        { id: "d17", name: "Історія економіки", course: 1, credits: 3 },
        { id: "d18", name: "Державне регулювання", course: 4, credits: 5 },
        { id: "d19", name: "Інвестиційний менеджмент", course: 4, credits: 6 },
        { id: "d20", name: "Страхування", course: 4, credits: 4 }
    ],
    teachers: [
        { id: "t1", name: "Кравець Т.В.", position: "Професор", degree: "д.е.н." },
        { id: "t2", name: "Приходько А.І.", position: "Доцент", degree: "к.ф.-м.н." },
        { id: "t3", name: "Харченко М.О.", position: "Доцент", degree: "к.е.н." },
        { id: "t4", name: "Черних М.Н.", position: "Професор", degree: "к.е.н." },
        { id: "t5", name: "Іваненко П.С.", position: "Асистент", degree: "без ступеня" },
        { id: "t6", name: "Петренко О.В.", position: "Доцент", degree: "к.т.н." },
        { id: "t7", name: "Сидоренко В.Г.", position: "Професор", degree: "д.ф.-м.н." },
        { id: "t8", name: "Коваленко І.П.", position: "Асистент", degree: "без ступеня" },
        { id: "t9", name: "Мельник Т.А.", position: "Доцент", degree: "к.е.н." },
        { id: "t10", name: "Бондаренко Н.В.", position: "Професор", degree: "д.е.н." }
    ],
    groups: [
        { id: "g1", name: "ЕК-11", specialty: "Економіка", course: 1, count: 28, teacherId: "t1", disciplineId: "d4" },
        { id: "g2", name: "ЕК-12", specialty: "Економіка", course: 1, count: 25, teacherId: "t10", disciplineId: "d1" },
        { id: "g3", name: "ЕК-21", specialty: "Економіка", course: 2, count: 30, teacherId: "t2", disciplineId: "d2" },
        { id: "g4", name: "ЕК-22", specialty: "Прикладна економіка", course: 2, count: 27, teacherId: "t3", disciplineId: "d5" },
        { id: "g5", name: "ЕК-31", specialty: "Економіка", course: 3, count: 22, teacherId: "t4", disciplineId: "d3" },
        { id: "g6", name: "КН-11", specialty: "Комп'ютерні науки", course: 1, count: 30, teacherId: "t7", disciplineId: "d1" },
        { id: "g7", name: "КН-21", specialty: "Комп'ютерні науки", course: 2, count: 29, teacherId: "t2", disciplineId: "d2" },
        { id: "g8", name: "КН-31", specialty: "Комп'ютерні науки", course: 3, count: 24, teacherId: "t6", disciplineId: "d12" },
        { id: "g9", name: "МН-11", specialty: "Менеджмент", course: 1, count: 26, teacherId: "t9", disciplineId: "d4" },
        { id: "g10", name: "МН-21", specialty: "Менеджмент", course: 2, count: 25, teacherId: "t3", disciplineId: "d8" },
        { id: "g11", name: "МН-31", specialty: "Менеджмент", course: 3, count: 21, teacherId: "t9", disciplineId: "d7" },
        { id: "g12", name: "ФБ-11", specialty: "Фінанси і банківська справа", course: 1, count: 28, teacherId: "t10", disciplineId: "d10" },
        { id: "g13", name: "ФБ-21", specialty: "Фінанси і банківська справа", course: 2, count: 27, teacherId: "t1", disciplineId: "d9" },
        { id: "g14", name: "ФБ-31", specialty: "Фінанси і банківська справа", course: 3, count: 20, teacherId: "t4", disciplineId: "d6" },
        { id: "g15", name: "ФБ-41", specialty: "Фінанси і банківська справа", course: 4, count: 18, teacherId: "t9", disciplineId: "d19" }
    ]
};

const STORAGE_KEY = "kafedra_app_state_v8";

function loadState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (e) { 
        console.error("Помилка читання localStorage:", e); 
    }
    
    // Якщо сховище не ініціалізоване, записуємо туди початкові дані за замовчуванням
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_DATA));
    return DEFAULT_DATA;
}

let appState = loadState();

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (e) {
        showError("Помилка збереження localStorage.");
    }
}

window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY && event.newValue) {
        appState = JSON.parse(event.newValue);
        renderAll();
    }
});

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(tabId)) {
            btn.classList.add('active');
        }
    });
}

function showError(message) {
    const popup = document.getElementById("errorPopup");
    if (!popup) return;
    popup.innerText = message;
    popup.style.display = "block";
    setTimeout(() => { popup.style.display = "none"; }, 5000);
}

function renderAll() {
    renderDisciplines();
    renderTeachers();
    renderGroups();
    updateDropdowns();
}

function renderDisciplines() {
    const tbody = document.getElementById("disciplinesTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    appState.disciplines.forEach((d) => {
        const groupTeachersIds = appState.groups
            .filter(g => g.disciplineId === d.id && g.teacherId)
            .map(g => g.teacherId);
        
        const uniqueTeacherIds = [...new Set(groupTeachersIds)];
        const realTeachers = appState.teachers.filter(t => uniqueTeacherIds.includes(t.id));

        const teachersHtml = realTeachers.length > 0 
            ? realTeachers.map(t => `<span class="badge">${escapeHtml(t.name)}</span>`).join("")
            : "— (немає реального навантаження)";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="editable" onclick="makeEditable(this, 'disciplines', '${d.id}', 'name')">${escapeHtml(d.name)}</td>
            <td class="editable" onclick="makeEditable(this, 'disciplines', '${d.id}', 'course')">${d.course}</td>
            <td class="editable" onclick="makeEditable(this, 'disciplines', '${d.id}', 'credits')">${d.credits}</td>
            <td>${teachersHtml}</td>
            <td><button onclick="deleteDiscipline('${d.id}')">❌ Видалити</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderTeachers() {
    const tbody = document.getElementById("teachersTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    appState.teachers.forEach((t) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="editable" onclick="makeEditable(this, 'teachers', '${t.id}', 'name')">${escapeHtml(t.name)}</td>
            <td class="editable" onclick="makeEditable(this, 'teachers', '${t.id}', 'position')">${escapeHtml(t.position)}</td>
            <td class="editable" onclick="makeEditable(this, 'teachers', '${t.id}', 'degree')">${escapeHtml(t.degree)}</td>
            <td><button onclick="deleteTeacher('${t.id}')">❌ Видалити</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function renderGroups() {
    const tbody = document.getElementById("groupsTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";
    appState.groups.forEach((g) => {
        const teacher = appState.teachers.find(t => t.id === g.teacherId);
        const teacherName = teacher ? teacher.name : "— (пусто)";

        const discipline = appState.disciplines.find(d => d.id === g.disciplineId);
        const disciplineName = discipline ? discipline.name : "— (пусто)";

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td class="editable" onclick="makeEditable(this, 'groups', '${g.id}', 'name')">${escapeHtml(g.name)}</td>
            <td class="editable" onclick="makeEditable(this, 'groups', '${g.id}', 'specialty')">${escapeHtml(g.specialty)}</td>
            <td class="editable" onclick="makeEditable(this, 'groups', '${g.id}', 'course')">${g.course}</td>
            <td class="editable" onclick="makeEditable(this, 'groups', '${g.id}', 'count')">${g.count}</td>
            <td class="editable" onclick="makeTeacherDropdownEditable(this, '${g.id}')">${escapeHtml(teacherName)}</td>
            <td class="editable" onclick="makeDisciplineDropdownEditable(this, '${g.id}')">${escapeHtml(disciplineName)}</td>
            <td><button onclick="deleteGroup('${g.id}')">❌ Видалити</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function updateDropdowns() {
    const teacherSelect = document.getElementById("gTeacherSelect");
    if (teacherSelect) {
        teacherSelect.innerHTML = '<option value="">-- Не призначати викладача (пусто) --</option>';
        appState.teachers.forEach(t => {
            const opt = document.createElement("option");
            opt.value = t.id;
            opt.innerText = `${t.name} — ${t.position}`;
            teacherSelect.appendChild(opt);
        });
    }

    updateGroupFormDisciplines();
}

function updateGroupFormDisciplines() {
    const courseInput = document.getElementById("gCourse");
    const discSelect = document.getElementById("gDisciplineSelect");
    if (!discSelect) return;

    const currentCourse = parseInt(courseInput ? courseInput.value : 0);
    discSelect.innerHTML = '<option value="">-- Не призначати дисципліну (пусто) --</option>';

    appState.disciplines.forEach(d => {
        if (!currentCourse || d.course === currentCourse) {
            const opt = document.createElement("option");
            opt.value = d.id;
            opt.innerText = `${d.name} (Курс ${d.course})`;
            discSelect.appendChild(opt);
        }
    });
}

function addDiscipline() {
    const name = document.getElementById("dName").value.trim();
    const course = parseInt(document.getElementById("dCourse").value);
    const credits = parseInt(document.getElementById("dCredits").value);
    
    if (!name || isNaN(course) || isNaN(credits)) {
        showError("Заповніть усі поля дисципліни правильно.");
        return;
    }
    
    appState.disciplines.push({ id: 'd_' + Date.now(), name, course, credits });
    saveState();
    renderAll();
    document.getElementById("dName").value = "";
    document.getElementById("dCourse").value = "";
    document.getElementById("dCredits").value = "";
}

function addTeacher() {
    const name = document.getElementById("tName").value.trim();
    const position = document.getElementById("tPosition").value;
    const degree = document.getElementById("tDegree").value.trim();
    
    if (!name || !degree) {
        showError("Заповніть ПІБ та науковий ступінь викладача.");
        return;
    }

    const isDuplicate = appState.teachers.some(t => {
        const sameName = t.name.toLowerCase() === name.toLowerCase();
        const samePosition = t.position === position;
        const sameDegree = t.degree.toLowerCase() === degree.toLowerCase();
        return sameName && samePosition && sameDegree;
    });

    if (isDuplicate) {
        showError("Помилка: Такий викладач вже існує!");
        return;
    }
    
    appState.teachers.push({ id: 't_' + Date.now(), name, position, degree });
    saveState();
    renderAll();
    document.getElementById("tName").value = "";
    document.getElementById("tDegree").value = "";
}

function addGroup() {
    const name = document.getElementById("gName").value.trim();
    const specialty = document.getElementById("gSpecialty").value.trim();
    const course = parseInt(document.getElementById("gCourse").value);
    const count = parseInt(document.getElementById("gCount").value);
    const teacherId = document.getElementById("gTeacherSelect").value;
    const disciplineId = document.getElementById("gDisciplineSelect").value;
    
    if (!name || !specialty || isNaN(course) || isNaN(count)) {
        showError("Заповніть обов'язкові поля групи.");
        return;
    }
    
    appState.groups.push({ 
        id: 'g_' + Date.now(), 
        name, 
        specialty, 
        course, 
        count, 
        teacherId: teacherId || null, 
        disciplineId: disciplineId || null 
    });
    saveState();
    renderAll();
    document.getElementById("gName").value = "";
    document.getElementById("gSpecialty").value = "";
    document.getElementById("gCourse").value = "";
    document.getElementById("gCount").value = "";
}

function deleteDiscipline(id) {
    appState.disciplines = appState.disciplines.filter(d => d.id !== id);
    appState.groups.forEach(g => { if (g.disciplineId === id) g.disciplineId = null; });
    saveState();
    renderAll();
}

function deleteTeacher(id) {
    const isUsedInGroup = appState.groups.some(g => g.teacherId === id);
    if (isUsedInGroup) {
        showError("Помилка: Цей викладач призначений у групу студентів!");
        return;
    }
    appState.teachers = appState.teachers.filter(t => t.id !== id);
    saveState();
    renderAll();
}

function deleteGroup(id) {
    const group = appState.groups.find(g => g.id === id);
    if (group) {
        if (group.teacherId) {
            showError("Помилка видалення: Цій групі призначено викладача.");
            return;
        }
        if (group.disciplineId) {
            showError("Помилка видалення: Цій групі призначено дисципліну.");
            return;
        }
    }
    appState.groups = appState.groups.filter(g => g.id !== id);
    saveState();
    renderAll();
}

function makeEditable(cell, collectionName, itemId, field) {
    if (cell.querySelector("input") || cell.querySelector("select")) return;
    
    const currentValue = cell.innerText;
    cell.innerHTML = `<input type="text" value="${currentValue}" style="width: 90%;">`;
    const input = cell.querySelector("input");
    input.focus();
    
    let isSaved = false;
    const saveChanges = () => {
        if (isSaved) return;
        isSaved = true;
        
        const newValue = input.value.trim();
        if (newValue === "") {
            showError("Поле не може бути порожнім.");
            renderAll();
            return;
        }
        
        const item = appState[collectionName].find(el => el.id === itemId);
        if (item) {
            if (field === 'course' || field === 'credits' || field === 'count') {
                const num = Number(newValue);
                if (isNaN(num)) {
                    showError("Введено не числове значення!");
                    renderAll();
                    return;
                }
                item[field] = num;
            } else {
                item[field] = newValue;
            }
            saveState();
        }
        renderAll();
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") saveChanges();
        else if (e.key === "Escape") renderAll();
    });
    input.addEventListener("blur", saveChanges);
}

function makeTeacherDropdownEditable(cell, groupId) {
    if (cell.querySelector("select") || cell.querySelector("input")) return;

    const group = appState.groups.find(g => g.id === groupId);
    if (!group) return;

    const select = document.createElement("select");
    select.style.width = "95%";

    const emptyOpt = document.createElement("option");
    emptyOpt.value = "";
    emptyOpt.innerText = "-- Пусто --";
    if (!group.teacherId) emptyOpt.selected = true;
    select.appendChild(emptyOpt);

    appState.teachers.forEach(t => {
        const opt = document.createElement("option");
        opt.value = t.id;
        opt.innerText = t.name;
        if (t.id === group.teacherId) opt.selected = true;
        select.appendChild(opt);
    });

    cell.innerHTML = "";
    cell.appendChild(select);
    select.focus();

    let isSaved = false;
    const saveChange = () => {
        if (isSaved) return;
        isSaved = true;
        group.teacherId = select.value || null;
        saveState();
        renderAll();
    };

    select.addEventListener("change", saveChange);
    select.addEventListener("blur", saveChange);
}

function makeDisciplineDropdownEditable(cell, groupId) {
    if (cell.querySelector("select") || cell.querySelector("input")) return;

    const group = appState.groups.find(g => g.id === groupId);
    if (!group) return;

    const select = document.createElement("select");
    select.style.width = "95%";

    const emptyOpt = document.createElement("option");
    emptyOpt.value = "";
    emptyOpt.innerText = "-- Пусто --";
    if (!group.disciplineId) emptyOpt.selected = true;
    select.appendChild(emptyOpt);

    appState.disciplines.forEach(d => {
        if (d.course === group.course) {
            const opt = document.createElement("option");
            opt.value = d.id;
            opt.innerText = d.name;
            if (d.id === group.disciplineId) opt.selected = true;
            select.appendChild(opt);
        }
    });

    cell.innerHTML = "";
    cell.appendChild(select);
    select.focus();

    let isSaved = false;
    const saveChange = () => {
        if (isSaved) return;
        isSaved = true;
        group.disciplineId = select.value || null;
        saveState();
        renderAll();
    };

    select.addEventListener("change", saveChange);
    select.addEventListener("blur", saveChange);
}

function escapeHtml(text) {
    const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
    return text.toString().replace(/[&<>"']/g, function(m) { return map[m]; });
}

renderAll();