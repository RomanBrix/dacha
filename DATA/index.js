import React, {Component} from 'react';

export const DATA = [
    [
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'49,90',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/2.png',
            type: 'салат',
            name:'греческий',
            price:'94',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'салат',
            name:'греческий',
            price:'88,20',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/4.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        }
    ],
    //ALCOHOL
    [
        {
            img:'./src/carte/3.png',
            type: 'Водка',
            name:'Воздух',
            price:'120',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'Шампанское',
            name:'Кристал',
            price:'13000',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/4.png',
            type: 'Вино',
            name:'Красное',
            price:'140',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/2.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        }
    ],
    //salads
    [
        {
            img:'./src/carte/2.png',
            type: 'салат',
            name:'салот',
            price:'12230',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/4.png',
            type: 'Шампанское',
            name:'Кристал',
            price:'13000',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'Вино',
            name:'Красное',
            price:'140',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        }
    ],
    //HOT
    [
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'салот',
            price:'12230',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'Шампанское',
            name:'Кристал',
            price:'13000',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/4.png',
            type: 'Вино',
            name:'Красное',
            price:'140',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/2.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        }
    ],
    //snacks
    [
        {
            img:'./src/carte/2.png',
            type: 'закуска',
            name:'снейк',
            price:'1',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/4.png',
            type: 'нарекзка',
            name:'овощная',
            price:'130',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'Вино',
            name:'Красное',
            price:'140',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/1.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        },
        {
            img:'./src/carte/3.png',
            type: 'салат',
            name:'греческий',
            price:'1233.24',
            info:'Греческий салат – это один из самых легких и низкокалорийных салатов, и при этом он исключительно полезный и вкусный!'
        }
    ]
];
export const HOTEL = [
    {
        id: 0,
        img: ['./src/hotel/first.png','./src/hotel/profile_1.png','./src/hotel/profile_2.png','./src/hotel/third.png','./src/hotel/second.png'],
        title: 'Одноместный',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 1,
        img: ['./src/hotel/second.png','./src/hotel/profile_1.png','./src/hotel/profile_2.png','./src/hotel/third.png','./src/hotel/second.png'],
        title: 'Двуместный',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 2,
        img: ['./src/hotel/third.png','./src/hotel/profile_1.png','./src/hotel/profile_2.png','./src/hotel/third.png','./src/hotel/second.png'],
        title: 'Эпик',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
    {
        id: 3,
        img: ['./src/hotel/first.png','./src/hotel/profile_1.png','./src/hotel/profile_2.png','./src/hotel/third.png','./src/hotel/second.png'],
        title: 'Одноместный',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 4,
        img: ['./src/hotel/second.png', './src/hotel/profile_1.png','./src/hotel/profile_2.png','./src/hotel/third.png','./src/hotel/second.png'],
        title: 'Двуместный',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 5,
        img: ['./src/hotel/third.png','./src/hotel/profile_1.png','./src/hotel/profile_2.png','./src/hotel/third.png','./src/hotel/second.png'],
        title: 'Эпик',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
];


export const SAUNA = [
    {
        id: 0,
        img: ['./src/sauna/first.jpg','./src/sauna/dop1.jpg','./src/sauna/dop2.jpg','./src/sauna/dop3.jpg','./src/sauna/dop4.jpg','./src/sauna/dop5.jpg'],
        title: 'Сауна 1',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 1,
        img: ['./src/sauna/second.jpg','./src/sauna/dop2.jpg','./src/sauna/dop4.jpg','./src/sauna/dop1.jpg','./src/sauna/dop3.jpg','./src/sauna/dop5.jpg'],
        title: 'Сауна 2',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 2,
        img: ['./src/sauna/third.jpg','./src/sauna/dop3.jpg','./src/sauna/dop2.jpg','./src/sauna/dop4.jpg','./src/sauna/dop1.jpg','./src/sauna/dop5.jpg'],
        title: 'Сауна 3',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
    {
        id: 3,
        img: ['./src/sauna/third.jpg','./src/sauna/dop4.jpg','./src/sauna/dop3.jpg','./src/sauna/dop2.jpg','./src/sauna/dop1.jpg','./src/sauna/dop5.jpg'],
        title: 'Сауна 4',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 4,
        img: ['./src/sauna/first.jpg','./src/sauna/dop2.jpg','./src/sauna/dop1.jpg','./src/sauna/dop3.jpg','./src/sauna/dop4.jpg','./src/sauna/dop5.jpg'],
        title: 'Сауна 5',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 5,
        img: ['./src/sauna/second.jpg','./src/sauna/dop3.jpg','./src/sauna/dop4.jpg','./src/sauna/dop1.jpg','./src/sauna/dop2.jpg','./src/sauna/dop5.jpg'],
        title: 'Сауна 6',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
];


export const FISHING = [
    {
        id: 0,
        img: ['./src/fishing/first.jpg','./src/fishing/dop1.jpg','./src/fishing/dop2.jpg','./src/fishing/dop3.jpg','./src/fishing/dop4.jpg'],
        title: 'Рыбалка 1',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 1,
        img: ['./src/fishing/second.jpg','./src/fishing/dop2.jpg','./src/fishing/dop4.jpg','./src/fishing/dop1.jpg','./src/fishing/dop3.jpg'],
        title: 'Рыбалка 2',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 2,
        img: ['./src/fishing/third.jpg','./src/fishing/dop3.jpg','./src/fishing/dop2.jpg','./src/fishing/dop4.jpg','./src/fishing/dop1.jpg'],
        title: 'Рыбалка 3',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
    {
        id: 3,
        img: ['./src/fishing/third.jpg','./src/fishing/dop4.jpg','./src/fishing/dop3.jpg','./src/fishing/dop2.jpg','./src/fishing/dop1.jpg'],
        title: 'Рыбалка 4',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 4,
        img: ['./src/fishing/first.jpg','./src/fishing/dop2.jpg','./src/fishing/dop1.jpg','./src/fishing/dop3.jpg','./src/fishing/dop4.jpg'],
        title: 'Рыбалка 5',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 5,
        img: ['./src/fishing/second.jpg','./src/fishing/dop3.jpg','./src/fishing/dop4.jpg','./src/fishing/dop1.jpg','./src/fishing/dop2.jpg'],
        title: 'Рыбалка 6',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
];


export const BANQUETS = [
    {
        id: 0,
        img: ['./src/fishing/first.jpg','./src/fishing/dop1.jpg','./src/fishing/dop2.jpg','./src/fishing/dop3.jpg','./src/fishing/dop4.jpg'],
        title: 'Банкет 1',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 1,
        img: ['./src/banquets/second.jpg','./src/banquets/dop2.jpg','./src/banquets/dop4.jpg','./src/banquets/dop1.jpg','./src/banquets/dop3.jpg'],
        title: 'Банкет 2',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 2,
        img: ['./src/banquets/third.jpg','./src/banquets/dop3.jpg','./src/banquets/dop2.jpg','./src/banquets/dop4.jpg','./src/banquets/dop1.jpg'],
        title: 'Банкет 3',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
    {
        id: 3,
        img: ['./src/banquets/third.jpg','./src/banquets/dop4.jpg','./src/banquets/dop3.jpg','./src/banquets/dop2.jpg','./src/banquets/dop1.jpg'],
        title: 'Банкет 4',
        about: 'Бюджетный одноместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '700'
    },
    {
        id: 4,
        img: ['./src/banquets/first.jpg','./src/banquets/dop2.jpg','./src/banquets/dop1.jpg','./src/banquets/dop3.jpg','./src/banquets/dop4.jpg'],
        title: 'Банкет 5',
        about: 'Бюджетный двуместный номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '850'
    },
    {
        id: 5,
        img: ['./src/banquets/second.jpg','./src/banquets/dop3.jpg','./src/banquets/dop4.jpg','./src/banquets/dop1.jpg','./src/banquets/dop2.jpg'],
        title: 'Банкет 6',
        about: 'Эпик-люкс номер с двухместной кроватью',
        description:'Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад. Номера оснащены кондиционером и телевизором с плоским экраном. В собственной ванной комнате предоставляется фен, бесплатные туалетно-косметические принадлежности и халаты. Из некоторых номеров открывается вид на сад.',
        price: '851'
    },
];