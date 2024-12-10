import Chance from 'chance';

const chance = new Chance();

const tasks = [
  {
    name: "Купить продукты",
    description: "Не забудьте купить молоко, хлеб и овощи.",
  },
  {
    name: "Сделать домашнее задание",
    description: "Завтра контрольная по математике, необходимо подготовиться.",
  },
  {
    name: "Позвонить маме",
    description: "Узнать, как она себя чувствует и не нужна ли ей помощь.",
  },
  {
    name: "Убраться в квартире",
    description: "Привести в порядок все комнаты, убрать пыль и мусор.",
  },
  {
    name: "Записаться к врачу",
    description: "Запланировать визит в поликлинику для ежегодного обследования.",
  },
  {
    name: "Починить кран",
    description: "Кран капает, нужно заменить прокладку.",
  },
  {
    name: "Прочитать книгу",
    description: "Завершить чтение интересной книги о саморазвитии.",
  },
  {
    name: "Подготовить презентацию",
    description: "Собрать материалы и создать слайды к пятничной встрече.",
  },
  {
    name: "Сходить на прогулку",
    description: "Провести время на свежем воздухе в парке или у озера.",
  },
  {
    name: "Посмотреть новый фильм",
    description: "Посмотреть рекомендованный фильм в кино или на стриминге.",
  },
  {
    name: "Погулять с собакой",
    description: "Вывести собаку на длительную прогулку и поиграть с ней.",
  },
  {
    name: "Сделать зарядку",
    description: "Уделить время физическим упражнениям для поддержания формы.",
  },
  {
    name: "Написать письмо",
    description: "Написать другу, узнать, как у него дела и обсудить планы.",
  },
  {
    name: "Организовать встречу с друзьями",
    description: "Запланировать встречу в выходные для совместного отдыха.",
  },
  {
    name: "Проверить почту",
    description: "Убедиться, что нет важных писем или уведомлений.",
  },
  {
    name: "Пойти на рынок",
    description: "Купить свежие фрукты и овощи для приготовления ужина.",
  },
  {
    name: "Сделать стирку",
    description: "Собрать и постирать грязную одежду.",
  },
  {
    name: "Приготовить ужин",
    description: "Приготовить что-то вкусное для всей семьи.",
  },
  {
    name: "Поучаствовать в вебинаре",
    description: "Узнать что-то новое о личностном росте и развитии.",
  },
  {
    name: "Сделать фотографии",
    description: "Сфотографировать природу и окружающий мир.",
  },
  {
    name: "Сходить в спортзал",
    description: "Провести тренировку для поддержания физической формы.",
  },
  {
    name: "Сделать массаж",
    description: "Расслабиться и побаловать себя.",
  },
  {
    name: "Провести время с семьей",
    description: "Поиграть в настольные игры или посмотреть фильм.",
  },
  {
    name: "Изучить новый язык",
    description: "Потратить время на изучение базовых фраз.",
  },
  {
    name: "Сделать запасы воды",
    description: "Купить бутылки с водой на случай ЧС.",
  },
  {
    name: "Сделать распечатку",
    description: "Подготовить все необходимые документы к встрече.",
  },
  {
    name: "Посетить выставку",
    description: "Узнать больше о местной культуре и искусстве.",
  },
  {
    name: "Составить список целей",
    description: "Написать, чего хочу достичь в следующем месяце.",
  },
];


const severities = [
  { level: 1, label: 'Срочно' },
  { level: 2, label: 'Средне' },
  { level: 3, label: 'Не срочно' },
];


export const generateTodos = (count) => {
  return Array.from({ length: count }, () => {
    const task = chance.pickone(tasks);
    const severity = chance.pickone(severities);

    return {
      id: chance.guid(),
      name: task.name,
      severity: severity.level,  
      description: task.description,
      checked: chance.bool(),
      timestamp: new Date().toString(),

    };
  });
};

export const getSeverityLabel = (level) => {
  const severity = severities.find(severity => severity.level === level);
  return severity ? severity.label : 'Неизвестно'; 
};