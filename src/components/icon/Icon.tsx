import React from 'react'
import iconsSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
}

export const Icon = (props: IconPropsType) => {
  return (
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <use xlinkHref={ `${iconsSprite}#${props.iconId}` }/>
</svg>
  )
<<<<<<< HEAD
};
=======
};
>>>>>>> c99aead655c5bc409a2bded12643408f921adc13
