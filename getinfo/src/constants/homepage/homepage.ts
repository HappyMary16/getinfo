import speedometerImg from '../../assets/images/advantages/speedometer.svg';
import analyticImg from '../../assets/images/advantages/analytic.svg';
import locationImg from '../../assets/images/advantages/location.svg';
import trueFalseImg from '../../assets/images/advantages/trueFalse.svg';
import { StaticImageData } from 'next/image';

export interface IAdvantage {
    id: number,
    title: string,
    description: string,
    image: StaticImageData
}

export interface IGuideSlide {
    title: string,
    list: string[]
}


export const advantages: ReadonlyArray<IAdvantage> = [
    {
        id: 1,
        title: 'Ефективність та швидкість обробки:',
        description: 'Цифрові версії документів скорочують час обробки запитів студентів, автоматично розподіляючи їх між адміністраторами.',
        image: speedometerImg
    },
    {
        id: 2,
        title: 'Зменшення помилок і невірностей:',
        description: 'Система автоматичної обробки документів валідує введену студентами інформацію, що допомагає уникнути помилок та невірних даних.',
        image: analyticImg
    },
    {
        id: 3,
        title: 'Зручність і доступність:',
        description: 'Веб-додаток дозволяє студентам подавати запити та  отримувати відповіді з будь-якого місця, де є Інтернет.',
        image: locationImg
    },
    {
        id: 4,
        title: 'Можливість відслідковування та аналізу:',
        description: 'Система зберігає історію запитів та дій адміністраторів, що допомагає аналізувати статуси запитів та полегшує управління робочим процесом.',
        image: trueFalseImg
    },
]


export const guideSlides: ReadonlyArray<IGuideSlide> = [
    {
        title: 'Заповнення та відправлення заявки або замовлення довідки:',
        list: [
            "Увійдіть на веб-сайт університету та перейдіть на сторінку для подачі заявок та довідок.",
            "Виберіть тип заявки або довідки, яку вам необхідно подати (наприклад, 'Нарахування додаткових балів до стипендіального рейтингу').",
            "Завантажте зразок оформлення заяви та бланк заяви або довідки на свій комп'ютер.",
            "Відкрийте бланк у текстовому або графічному редакторі та заповніть його відповідно до ваших потреб і вимог університету.",
            "Після заповнення бланку, збережіть файл на своєму комп'ютері."
        ]
    },
    {
        title: 'Подача заявки або замовлення довідки на веб-сайті:',
        list: [
            "Поверніться на сторінку для подачі заявок та довідок на веб-сайті університету.",
            "Заповніть всі обов'язкові поля форми, такі як ваше ПІП та група.",
            "Завантажте заповнений бланк заяви або довідки, який ви підготували раніше.",
            'Натисніть кнопку "Відправити", щоб надіслати вашу заявку або довідку.'
        ]
    },
    {
        title: 'Відстеження статусу заявки: ',
        list: [
            "Після відправлення заявки, ви отримаєте листа на вашу електронну пошту з підтвердженням надходження.",
            'Ви також отримаєте статус вашої заявки (наприклад, "виконано", "на розгляді", "відмовлено" або "необхідність редагування") через електронну пошту після обробки дирекцією.',
            "Якщо у вас виникли питання або потрібно внести зміни до заявки, ви маєте змогу листування з адміністраторами системи за допомогою унікального ідентифікаційного номера вашої заявки."
        ]
    }
] 