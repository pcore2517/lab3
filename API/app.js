async function поискВакансий() {
    const поисковыйЗапрос = document.getElementById('searchInput').value;

    try {
        const ответ = await axios.get('https://api.hh.ru/vacancies', {
            params: {
                text: поисковыйЗапрос,
                per_page: 40
            }
        });
		
        отображениеРезультатов(ответ.data.items);
    } catch (ошибка) {
        console.error('Ошибка при получении вакансий:', ошибка);
    }
}

function отображениеРезультатов(вакансии) {
    const блокРезультатов = document.getElementById('results');
    блокРезультатов.innerHTML = ''; 

    вакансии.forEach(вакансия => {
        const блокВакансии = document.createElement('div');
        блокВакансии.textContent = вакансия.name; 
        блокРезультатов.appendChild(блокВакансии);
    });
}
