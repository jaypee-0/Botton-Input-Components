import React from 'react'
import './Button.scss'

const Variants = ['default', 'outline', 'text']
const sizes = ['sm', 'md', 'lg']
const colors = ['default-color', 'outline', 'text', 'primary', 'secondary', 'danger']
const disable = ['disabled', 'enabled']
const shadow = ['disableshadow', 'disableshadowNull']

const Buttons = ({variant, size, color, disabled, disabledShadow, startIcon, endIcon}) => {
        const Variant = Variants.includes(variant) ? variant : Variants[0];
        const Size = sizes.includes(size) ? size : sizes[1];    
        const Color = colors.includes(color) ? color : colors[0];  
        const Disabled = disable.includes(disabled) ? disabled : disable[1];  
        const Shadow = shadow.includes(disabledShadow) ? disabledShadow : shadow[1];
  return (
    <button className={`btnn ${Variant} ${Size} ${Color} ${Disabled} ${Shadow}`}>Default</button>
  )
}

export default Buttons