import {InfoBlock} from "../components/InfoBlock.tsx";
import {data} from "autoprefixer";

export default function Skills() {

    interface ISkill{
        image: string,
        desc: string
    }
    interface ISkills{
        category: string,
        char: ISkill[]
    }

    const skillsData: ISkills[] = [
        {
            category: "Языки",
            char: [
                {
                    image: "/src/assets/html.png",
                    desc: "Могу создавать понятный структурированный код,\n" +
                        "с семантическими тегами, формами, мета-тегами,\n" +
                        "обработчиками отправки данных и многое другое"
                },
                {
                    image: "/src/assets/css.png",
                    desc: "Я имею знания о селекторах и их свойствах,\n" +
                        " а так-же понимаю каскадность и наследование. Используюя технологии CSS могу \n" +
                        "создавать гибкие и адаптивные сайты / веб-приложения. Я так-же хорошо знаком с \n" +
                        "CSS библиотекой - TAILWIND "
                },
                {
                    image: "/src/assets/js.png",
                    desc: "Хорошо понимаю событийно-ориентированное программирование. Умею манипулировать DOM элементами. \n" +
                        "Знаю много различных обработчиков событий. \n" +
                        "Работал с различными структурами данных, \n " +
                        "в том числе ассинхронно (включая доп. библиотеки, например axios).\n" +
                        "Умею работать с данными различными методами массивов / объектов.\n" +
                        "Хорошо знаком с ES6 синтаксисом. "
                },
                {
                    image: "/src/assets/ts.png",
                    desc: "Умею работать с типизацией различных данных (объекты, массивы, DOM-елементы), а так-же писать свои \n" +
                        "типы и интерфейсы. Есть понимание работы дженериков для созданий обобщений. Использовал специфичные конструкции \n," +
                        "например сужение типов или наследование типов и так далее."
                }
            ]

        },
        {
            category: "Мягкие навыки",
            char: [
                {
                    image: "url_to_image_4.png",
                    desc: "Командная работа"
                },
                {
                    image: "url_to_image_5.png",
                    desc: "Управление временем"
                },
                {
                    image: "url_to_image_6.png",
                    desc: "Критическое мышление"
                }
            ]
        },
        {
            category: "Языковые навыки",
            char: [
                {
                    image: "url_to_image_7.png",
                    desc: "Английский язык"
                },
                {
                    image: "url_to_image_8.png",
                    desc: "Французский язык"
                }
            ]
        }
    ]


    return (
        <InfoBlock>
            <div className={`Skills w-full flex flex-col gap-10`}>
                <h1 className={`flex w-full justify-center items-start font-bold text-white`}
                >Мои навыки</h1>
                {skillsData.map((skill, index) =>

                    <section className={`flex flex-col w-full gap-10`}>
                        <h2 className={`flex w-full justify-start items-start font-bold text-white`}
                        >{skill.category}</h2>

                        <div className={`flex justify-between items-center gap-10`}>
                            <div className={`flex flex-wrap gap-5 flex-1`}>

                                {skill.char.map(item =>
                                    <img style={{transform: 'scale(0.85)'}} src={item.image} alt=""/>
                                )}
                            </div>

                            <div className={`font-light  text-white  flex-1`} style={{fontSize: '1.3em'}}>
                                {skillsData[index].char[1].desc}
                            </div>
                        </div>
                    </section>
                )}

                {/*<section className={`flex flex-col w-full gap-10`}>*/}
                {/*                   <span className={`flex w-full justify-start items-start font-bold text-white`}*/}
                {/*                         style={{fontSize: '3em'}}>Языки</span>*/}
                {/*    <div className={`flex justify-between items-center gap-10`}>*/}
                {/*        <div className={`flex flex-wrap gap-5 flex-1`}>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/html.png" alt="html"/>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/css.png" alt="css"/>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/js.png" alt="js"/>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/ts.png" alt="ts"/>*/}
                {/*        </div>*/}

                {/*        <div className={`font-light  text-white  flex-1`} style={{fontSize: '1.3em'}}>*/}
                {/*            Могу создавать понятный структурированный код,*/}
                {/*            с семантическими тегами, формами, мета-тегами,*/}
                {/*            обработчиками отправки данных и многое другое*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}

                {/*<section className={`flex flex-col w-full gap-10`}>*/}
                {/*                   <span className={`flex w-full justify-start items-start font-bold text-white`}*/}
                {/*                         style={{fontSize: '3em'}}>Фреймворки</span>*/}
                {/*    <div className={`flex justify-between items-center gap-10`}>*/}
                {/*        <div className={`flex flex-wrap gap-5 flex-1`}>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/html.png" alt="html"/>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/css.png" alt="css"/>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/js.png" alt="js"/>*/}
                {/*            <img style={{transform: 'scale(0.85)'}} src="/src/assets/ts.png" alt="ts"/>*/}
                {/*        </div>*/}

                {/*        <div className={`font-light  text-white  flex-1`} style={{fontSize: '1.3em'}}>*/}
                {/*            Могу создавать понятный структурированный код,*/}
                {/*            с семантическими тегами, формами, мета-тегами,*/}
                {/*            обработчиками отправки данных и многое другое*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}


            </div>

        </InfoBlock>
    )
}