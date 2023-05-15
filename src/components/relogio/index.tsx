import { Box, Button, ButtonGroup } from '@mui/material'
import './index.css'
import { useEffect, useState } from 'react'
import Botao from '../botao'
import FormModal from '../modal'
import DeleteIcon from '@mui/icons-material/Delete';


export default function Relogio() {
    const [tempoTotal, setTempoTotal] = useState(0)
    const [minutos, setMinutos] = useState(0)
    const [segundos, setSegundos] = useState(0)
    const [ativarTimer, setAtivarTimer] = useState(false)

    const [tempoPomodoro, setTempoPomodoro] = useState(25)
    const [tempoShortBreak, setTempoShortBreak] = useState(5)
    const [tempoLongBreak, setTempoLongBreak] = useState(15)

   const [openModal, setOpenModal] = useState(false) 
  

    let timer;

    useEffect(() => {
        setPomodoro()
    }, [])
 

    function abrirModal(){
        setOpenModal(true)
    }

    function setPomodoro() {
        setMinutos(tempoPomodoro)
        setTempoTotal(tempoPomodoro)
    }

    function setShortBreak() {
        setMinutos(tempoShortBreak)
        setTempoTotal(tempoShortBreak)
    }

    function setLongBreak() {
        setMinutos(tempoLongBreak)
        setTempoTotal(tempoLongBreak)
    }

    function handleClickButtonStart() {
        // return ativarTimer ? iniciarTimer
    }

    function iniciarTimer() {
        setAtivarTimer(true)
    }

    function pararTimer() {
        clearInterval(timer)
        setAtivarTimer(false)
    }

    function botaoAtivo(time: any) {
        return time == tempoTotal ? 'success' : 'primary'
    }

    function formatarSegundos(segundos: any) {
        return segundos < 10 ? `0${segundos}` : segundos
    }

    useEffect(() => {
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
        // return () => pararTimer
    }, [ativarTimer, segundos])

    return (
        <div className="bg-gray-300 p-3 flex flex-col justify-center justify-items-center items-center relogio bg-white-500" >

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Botao cor={botaoAtivo(25)} eventClick={setPomodoro} label={"Pomodo"}></Botao>
                <Botao cor={botaoAtivo(1)} eventClick={setShortBreak} label={"Short Break"}></Botao>
                <Botao cor={botaoAtivo(15)} eventClick={setLongBreak} label={"Long Break"}></Botao>
            </ButtonGroup>

            <Button onClick={abrirModal}>Open modal</Button>


            <svg data-testid="DeleteIcon"></svg>


            <span className="timer text-white">{minutos}:{formatarSegundos(segundos)}</span>

            <Botao classe='w-56 bg-white' eventClick={ativarTimer ? pararTimer : iniciarTimer} label={ativarTimer ? 'Stop' : 'Start'}></Botao>

            
            <FormModal open={openModal} eventClose={setOpenModal}></FormModal>


        </div>
    )
}