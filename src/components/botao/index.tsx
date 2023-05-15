import { Button } from "@mui/material";

export default function Botao({cor, label, eventClick, variant = 'contained', classe = ''}){

    function handleClick(){
        eventClick()
    }

    return (
        <>
            <Button className={classe} color={cor} onClick={handleClick} variant={variant}>{label}</Button>
        </>
    )

}