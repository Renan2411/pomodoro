import { Button, ButtonGroup } from '@mui/material'
import './index.css'
import { useEffect, useState } from 'react'




export default function Relogio() {
    const [tempoTotal, setTempoTotal] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [ativarTimer, setAtivarTimer] = useState(false)


    useEffect(() => {
        setPomodoro()
    }, [])


    function setPomodoro() {
        setMinutos(25)
        setTempoTotal(25)
    }

    function setShortBreak() {
        setMinutos(1)
        setTempoTotal(1)
    }

    function setLongBreak() {
        setMinutos(15)
        setTempoTotal(15)
    }

    function iniciarTimer() {
        setAtivarTimer(true)
    }

    function botaoAtivo(time: any){
        return time == tempoTotal ? 'success' : 'primary'
    }

    function formatarSegundos(segundos: any){
        return segundos < 10 ? `0${segundos}` : segundos
    }

    // function pararTimer(timer: any){
    //     clearInterval(timer)
    // }
    useEffect(() => {
        let timer: any

        if (ativarTimer && minutos === 0 && segundos === 0) {
            setAtivarTimer(false)
        }

        if (ativarTimer) {
            timer = setInterval(() => {
                if (segundos == 0) {
                    setSegundos(60)
                    setMinutos(minutos => minutos - 1)
                }

                setSegundos(segundos => segundos - 1)

            }, 1000)
        } 

        return () => clearInterval(timer)
    }, [ativarTimer, segundos])

    return (
        <div className="flex flex-col justify-center justify-items-center items-center relogio bg-white-500" >

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button color={botaoAtivo(25)}  onClick={setPomodoro}>Pomodoro</Button>
                <Button color={botaoAtivo(1)} onClick={setShortBreak}>Short Break</Button>
                <Button color={botaoAtivo(15)} onClick={setLongBreak}>Long Break</Button>
            </ButtonGroup>

            <span className="timer">{minutos}:{formatarSegundos(segundos)}</span>
            {/* <span className="timer">{timer}</span> */}


            <Button className='w-56' variant="outlined" onClick={iniciarTimer}>{ativarTimer ? 'Stop' : 'Start'}</Button>

        </div>
    )
}