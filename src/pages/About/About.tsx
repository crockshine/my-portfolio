import {InfoBlock} from "../../components/InfoBlock.tsx";
import './About.css'
export default function About() {
    return(
        <InfoBlock height={`fit-content`} className={`flex flex-col gap-10`}>
            <h1 className={`flex w-full justify-center items-start font-bold text-white`}
                            >Обо мне</h1>

            <div className={`About-me flex  w-full gap-20 font-light`}>
                <p className={`flex-1 text-white`}>
                    Я — <span className={`text-blue-500 font-bold`}>фронтенд разработчик</span> с годом опыта,
                    специализирующийся на создании пользовательских интерфейсов с использованием современных
                    фреймворков, таких как
                    <span className={`text-green-600 font-bold`}> Vue</span> и
                    <span className={`text-blue-500 font-bold`}> React</span>.
                    Меня вдохновляет возможность разрабатывать удобные и интуитивно понятные интерфейсы,
                    которые улучшают пользовательский опыт.
                </p>

                <p className={`flex-1 text-white`}>
                    Кроме работы, я активно участвую в
                    <span className={`text-orange-500 font-bold`}> хакатонах </span>и стремлюсь знакомиться с новыми
                    технологиями.
                    Это позволяет мне расширять свои навыки и оставаться в курсе последних тенденций в мире
                    разработки.
                </p>

                <p className={`flex-1 text-white`}>
                    Я считаю себя<span className={`text-pink-400 font-bold`}> креативным человеком</span>,
                    способным использовать творческий подход к различным
                    задачам.
                    А так-же я умею работать в<span className={`text-blue-500 font-bold`}> команде</span>.
                </p>


            </div>

        </InfoBlock>
    )
}