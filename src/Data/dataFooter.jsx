const dataFooter = {
    titles: ['Погода', 'Посещаемое', 'Карта Германии', 'Телепрограмма', 'Эфир'],
    weather: {
        src: 'https://ssl.gstatic.com/onebox/weather/64/rain_light.png',
        temp: '+17',
        morningTemp: '+15',
        daytimeTemp: '+20',
        href: '#'
      },
    visited: [
        { boldText: 'Недвижимость', text: ' - о сталинках', href: '#' },
        { boldText: 'Маркет', text: ' -люстры и светильники', href: '#' },
        { boldText: 'Авто.ру', text: ' - привод 4х4 до 500 000', href: '#' },
    ],
    mapOfGermany: { text: 'Расписания', href: '#' },
    tvProgram: [
        { text: '02:00 THT.Best', grayText: 'THT International', href: '#' },
        { text: '02:15 Джинглики', grayText: 'Карусель INT', href: '#' },
        { text: '02:25 Наедине со всеми', grayText: 'Первый', href: '#' },
    ],
    ether: [
        {
            text: 'Управление как искуство',
            grayText: 'Успех',
            href: '#',
            src: 'https://yastatic.net/s3/home/services/block/video_new.svg'
        },
        {
            text: 'Ночь. Мир в это время',
            grayText: 'Earth TV',
            href: '#',
            src: 'https://yastatic.net/s3/home/services/block/video_new.svg'
        },
        {
            text: 'Андрей Возн...',
            grayText: 'Совершенно секретно',
            href: '#',
            src: 'https://yastatic.net/s3/home/services/block/video_new.svg'
        },
    ]

};

export default dataFooter