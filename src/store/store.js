import {  useQuery } from "react-query";
import img from "../img/news1.jpg";
import ShowcaseImg1 from "../img/showcaseBg1.png";
import ShowcaseImg2 from "../img/showcaseBg2.png";
import ShowcaseImg3 from "../img/showcaseBg3.png";
import { myAxios } from "../utils/myAxios";
export const newsData = [
  {
    id: 1,
    img: img,
    text: "У НАС НОВЫЙ ЛОГОТИП И НОВЫЙ САЙТ!",
    link: "/",
  },
  {
    id: 2,
    img: "https://s3-alpha-sig.figma.com/img/10db/3582/84d8a0182a6c466f3b18f9c47e4f69cb?Expires=1696204800&Signature=TvSxe7IxDEBp0t6yWhL3hGVSmMnQoZZQC30uccfkcns5KxrNOz9b5iCADoUQ--sqOOB7Mp5UGQTRIhXHU8CvGkdXkJxbHI4r-iw3Okl-s0aqz61Lhkob9KDiYtTZnXG7KGa64qts34jbgT5PXKD7-n3HdA-5cKXr9IH1hydeI8urT2xsThu3~zDI7xeFjmXeWUhM0-cN-Ap4oW6WIMGzcR8dAN~PSAo-qLtf2zT8eNOXK6ZtABMaTjZk6nNhBnIrN9gWwlZm1o73hJhdkQzvkfeNg1HOx01xUyEoBTook9S-BdWZ3lnhetnBVbbdAeQFO16f9DwvspCza0SweBUEKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "10 февраля 2020 года",
    text: "ОБНОВЛЕНИЕ ЛИНЕЙКИ АККУМУЛЯТОРОВ VARTRA ",
    link: "/",
  },
  {
    id: 3,
    img: "https://s3-alpha-sig.figma.com/img/10db/3582/84d8a0182a6c466f3b18f9c47e4f69cb?Expires=1696204800&Signature=TvSxe7IxDEBp0t6yWhL3hGVSmMnQoZZQC30uccfkcns5KxrNOz9b5iCADoUQ--sqOOB7Mp5UGQTRIhXHU8CvGkdXkJxbHI4r-iw3Okl-s0aqz61Lhkob9KDiYtTZnXG7KGa64qts34jbgT5PXKD7-n3HdA-5cKXr9IH1hydeI8urT2xsThu3~zDI7xeFjmXeWUhM0-cN-Ap4oW6WIMGzcR8dAN~PSAo-qLtf2zT8eNOXK6ZtABMaTjZk6nNhBnIrN9gWwlZm1o73hJhdkQzvkfeNg1HOx01xUyEoBTook9S-BdWZ3lnhetnBVbbdAeQFO16f9DwvspCza0SweBUEKA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    date: "5 февраля 2020 года",
    text: "БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ СПЕЦИАЛИСТА ТЕПЕРЬ В РЕЖИМЕ ONLINE ",
    link: "/",
  },
];
export const dropData = [
  {
    id: 2,
    title: "КАТАЛОГ",
    focus: false,
    to: "/category",
    data: [
      {
        id: 1,
        text: "АККУМУЛЯТОРЫ",
        to: "/",
        drop:[
          {
            id:1,
            text:"АКБ MAGNUM",
            drop:[
              {
                id:1,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
              {
                id:2,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
              {
                id:3,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
            ]
          },
          {
            id:2,
            text:"АКБ MAGNUM",
            drop:[
              {
                id:1,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
              {
                id:2,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
              {
                id:3,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
            ]
          },
          {
            id:3,
            text:"АКБ MAGNUM",
            drop:[
              {
                id:1,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
              {
                id:2,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
              {
                id:3,
                text:"MAGNUM 60Ah",
                title:"Газовая плита GEFEST 6500-03 0044, черный",
                describe:[
                  {
                    title:"Материал рабочей поверхности",
                    main:"Закаленное стекло"
                  }
                ]
              },
            ]
          },
  
        ]
      },
      {
        id: 2,
        text: "АВТОМАСЛА",
        to: "/",
      },
      {
        id: 3,
        text: "АКСЕССУАРЫ",
        to: "/",
      },
      {
        id: 4,
        text: "АВТОХИМИЯ",
        to: "/",
      },
    ],
  },
  {
    id: 1,
    title: "О НАС",
    focus: false,
    to:"/about",
  },
  {
    id: 4,
    title: "НОВОСТИ",
    focus: false,
    to: "/news",
  },
  {
    id: 5,
    title: "КОНТАКТЫ",
    focus: false,
    to: "/contacts",
    data: [
      {
        id: 2,
        text: "F.A.Q",
        to: "/faq",
      }
    ],
  },
];

export let searchControl = false;
export function handleSearchOpen() {
  searchControl = true;
}
export function handleSearchClose() {
  searchControl = false;
}
export const products = [
  {
    id: 1,
    name: "Гелиевые Аккумуляторы OPTIMA",
    to: "/",
  },
  {
    id: 2,
    name: "Оригинальные Аккумуляторы",
    to: "/",
  },
  {
    id: 3,
    name: "АКБ MAGNUM",
    to: "/",
  },
  {
    id: 4,
    name: "АКБ EDCON",
    to: "/",
  },
  {
    id: 5,
    name: "АКБ AFA",
    to: "/",
  },
  {
    id: 6,
    name: "АКБ BOSCH",
    to: "/",
  },
  {
    id: 7,
    name: "АКБ MUTLU",
    to: "/",
  },
  {
    id: 8,
    name: "ОРИГИНАЛЬНЫЕ АКБ",
    to: "/",
  },
  {
    id: 9,
    name: "ГЕЛИЕВЫЕ АКБ OPTIMA",
    to: "/",
  },
];

export const showcaseData = [
  {
    id: 1,
    bgImg: ShowcaseImg1,
    title: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
    subtitle:
      "Извините, но такой страницы нет на нашем сайте. Возможно вы ввели неправильный адрес.",
  },
  {
    id: 2,
    bgImg: ShowcaseImg2,
    title: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
  {
    id: 3,
    bgImg: ShowcaseImg3,
    title: "БУДЬТЕ НА СВЯЗИ С КОМАНДОЙ PRO AUTO",
    buttonTitle: "ПЕРЕЙТИ В КАТАЛОГ",
  },
];
