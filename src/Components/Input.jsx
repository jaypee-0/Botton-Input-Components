import React from 'react'
import './Input.scss'

const ERROR = ['null', 'error']
const sizes = ['sm', 'md', 'lg']
const disable = ['disabled', 'enabled']
const StartIcon = ['null', 'start-phone']
const EndIcon = ['null', 'ph-lock']
const FULLWIDTH = ['null', 'full']
const Multiline = ['null', 'end-padlock']


const Input = ({error, size, disabled, startIcon, endIcon, fullwidth, multiline}) => {
        const Error = ERROR.includes(error) ? error : ERROR[0];
        const Size = sizes.includes(size) ? size : sizes[1];    
        const Disabled = disable.includes(disabled) ? disabled : disable[1];  
        const StartIcons = StartIcon.includes(startIcon) ? startIcon : StartIcon[0];       
        const EndIcons = EndIcon.includes(endIcon) ? endIcon : EndIcon[0];
        const Fullwidth = FULLWIDTH.includes(fullwidth) ? fullwidth : FULLWIDTH[0];
        const Multilines = Multiline.includes(multiline) ? multiline : Multiline[0];
  return (
    <input className={`inputed ${Error} ${Size} ${Disabled} ${StartIcons} ${EndIcons} ${Fullwidth} ${Multilines}`} placeholder="Placeholder" />
  )
}

export default Input