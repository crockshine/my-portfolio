import {InfoBlock} from "../../components/InfoBlock.tsx";
import './Header.css'
export default function Header(){
    return(
        <InfoBlock className={``}>
            <div className={`Mask-block absolute `}>
                <img src="/src/assets/1.png" alt="" className={`Shape w-full absolute`}/>
                <img src="/src/assets/я.png" alt="" className={`Image absolute`}
                     />
            </div>


            <div className={`Main-title w-full h-full flex flex-col justify-between  `}>

                <h3 className={`Nav-text  flex justify-start font-light text-white`}>
                    <span className={`opacity-20 hover:opacity-50 hover:cursor-pointer`}>Обо мне</span>
                    <span className={`opacity-20 hover:opacity-50 hover:cursor-pointer`}>Мои навыки</span>
                    <span className={`opacity-20 hover:opacity-50 hover:cursor-pointer`}>Мои проекты</span>

                </h3>

                <h1 className={`About font-bold flex flex-col text-white z-20`}>
                    <span className={`opacity-20 font-light text-2`}>Привет) Я</span>
                    <span className={`text-1`}>Михаил Королев</span>
                    <span className={`opacity-20 font-light text-2`}>Frontend разработчик</span>

                </h1>

            </div>

        </InfoBlock>
    )
}