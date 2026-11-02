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

function renderAll() {
    renderDisciplines();
    renderTeachers();
    renderGroups();
    updateDropdowns();
}

function renderDisciplines() {
    const tbody = document.getElementById("disciplinesTableBody");
    tbody.innerHTML = "";
    DEFAULT_DATA.disciplines.forEach((d) => {
        tbody.innerHTML += `<tr><td>${d.name}</td><td>${d.course}</td><td>${d.credits}</td></tr>`;
    });
}

function renderTeachers() {
    const tbody = document.getElementById("teachersTableBody");
    tbody.innerHTML = "";
    DEFAULT_DATA.teachers.forEach((t) => {
        tbody.innerHTML += `<tr><td>${t.name}</td><td>${t.position}</td><td>${t.degree}</td></tr>`;
    });
}

function renderGroups() {
    const tbody = document.getElementById("groupsTableBody");
    tbody.innerHTML = "";
    DEFAULT_DATA.groups.forEach((g) => {
        const teacher = DEFAULT_DATA.teachers.find(t => t.id === g.teacherId);
        const discipline = DEFAULT_DATA.disciplines.find(d => d.id === g.disciplineId);
        tbody.innerHTML += `<tr><td>${g.name}</td><td>${g.specialty}</td><td>${g.course}</td><td>${g.count}</td><td>${teacher ? teacher.name : '—'}</td><td>${discipline ? discipline.name : '—'}</td></tr>`;
    });
}

function updateDropdowns() {
    const teacherSelect = document.getElementById("gTeacherSelect");
    if (teacherSelect) {
        teacherSelect.innerHTML = '<option value="">-- Оберіть викладача --</option>';
        DEFAULT_DATA.teachers.forEach(t => {
            teacherSelect.innerHTML += `<option value="${t.id}">${t.name} — ${t.position}</option>`;
        });
    }
    updateGroupFormDisciplines();
}

function updateGroupFormDisciplines() {
    const courseInput = document.getElementById("gCourse");
    const discSelect = document.getElementById("gDisciplineSelect");
    if (!discSelect) return;
    const currentCourse = parseInt(courseInput ? courseInput.value : 0);
    discSelect.innerHTML = '<option value="">-- Оберіть дисципліну --</option>';
    DEFAULT_DATA.disciplines.forEach(d => {
        if (!currentCourse || d.course === currentCourse) {
            discSelect.innerHTML += `<option value="${d.id}">${d.name} (Курс ${d.course})</option>`;
        }
    });
}

function addDiscipline() {
    const name = document.getElementById("dName").value.trim();
    const course = parseInt(document.getElementById("dCourse").value);
    const credits = parseInt(document.getElementById("dCredits").value);
    if (!name || isNaN(course) || isNaN(credits)) { alert("Заповніть поля правильно."); return; }
    DEFAULT_DATA.disciplines.push({ id: 'd_' + Date.now(), name, course, credits });
    renderAll();
}

function addTeacher() {
    const name = document.getElementById("tName").value.trim();
    const position = document.getElementById("tPosition").value;
    const degree = document.getElementById("tDegree").value.trim();
    if (!name || !degree) { alert("Заповніть поля."); return; }
    DEFAULT_DATA.teachers.push({ id: 't_' + Date.now(), name, position, degree });
    renderAll();
}

function addGroup() {
    const name = document.getElementById("gName").value.trim();
    const specialty = document.getElementById("gSpecialty").value.trim();
    const course = parseInt(document.getElementById("gCourse").value);
    const count = parseInt(document.getElementById("gCount").value);
    const teacherId = document.getElementById("gTeacherSelect").value;
    const disciplineId = document.getElementById("gDisciplineSelect").value;
    if (!name || !specialty || isNaN(course) || isNaN(count)) { alert("Заповніть поля."); return; }
    DEFAULT_DATA.groups.push({ id: 'g_' + Date.now(), name, specialty, course, count, teacherId, disciplineId });
    renderAll();
}

renderAll();