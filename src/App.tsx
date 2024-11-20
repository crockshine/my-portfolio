import './App.css'
import {InfoBlock} from "./components/InfoBlock.tsx";
import Header from "./pages/Header/Header.tsx";
import About from "./pages/About/About.tsx";
import Skills from "./pages/Skills.tsx";
export default function App() {

  return (
      <div className={`Theme w-screen bg-cover h-screen overflow-x-hidden overflow-y-scroll flex justify-center`}
           style={{backgroundColor: '#444040'}}>

          <div className={`Window w-full h-full relative`} style={{maxWidth: '2000px'}}>

              <img src="/src/assets/2.png" alt="UI-block"
                   className={`absolute top-0 left-0 w-2/5 `}
                   style={{transform: 'translateX(-15%) translateY(-14%)'}}/>

              <div className={`Face relative top-0 left-1/2`}
                   style={{transform: 'translateX(-5%) translateY(-15%)'}}>

                  <img src="/src/assets/1.png" alt="" className={`Shape w-3/5`}/>
                  {/*<img src="/src/assets/я.png" alt="" className={`Image absolute bottom-0 Img`}*/}
                  {/*     style={{width: '36%', transform: 'translateX(34%)'}}/>*/}
              </div>

              <div className={`Frame flex flex-col w-full gap-32 h-fit absolute top-0`}>
                  <Header/>
                  <About/>
                  <Skills/>

              </div>
          </div>


      </div>
  )
}


