export interface Project {
    id: number,
    title: string,
    description: string;
    image: string,
    stack: string[]
}

export const projects: Project[] = [
    {
        id: 1,
        title: 'Magento',
        description: 'Многостраничный сайт с слайдерами и анимациями',
        image: '/cards/bg-1.png',
        stack: ['Vue.js', 'Node.js']
    },
    {
        id: 2,
        title: 'Burgur',
        description: 'Полнофункциональный сайт ресторана с корзиной, заказами и т.д.',
        image: '/cards/bg-2.png',
        stack: ['Vue.js', 'Node.js', 'Pinia', 'MongoDB', 'TailwindCSS']
    },
    {
        id: 3,
        title: 'Loseptik',
        description: 'Многостраничник, с формой заявки и плавными анимациями ',
        image: '/cards/bg-3.png',
        stack: ['Vue.js', 'Node.js']
    },
    {
        id: 4,
        title: 'Travila',
        description: 'Многостраничник, с сортивкой отелей и обновлением рекомендаций',
        image: '/cards/bg-4.png',
        stack: ['Vue.js', 'Node.js', 'MongoDB']
    },
    {
        id: 5,
        title: 'Auth System',
        description: 'Система аутентификации с сохранением юзеров в БД',
        image: '/cards/bg-5.png',
        stack: ['Vue.js', 'Node.js', 'MongoDB']
    },
    {
        id: 6,
        title: 'BroykzGPT',
        description: 'Чат-бот в TG mini-apps, встроенная нейросеть через DeepSeek API',
        image: '/cards/bg-6.png',
        stack: ['Vue.js', 'Node.js']
    },
]