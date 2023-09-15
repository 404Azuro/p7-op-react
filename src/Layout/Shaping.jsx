import React from 'react'
import "../Styles/shaping.css"

// Composant qui gère les marges de gauche et droite + wrappe le contenu enfant
function Shaping({children}) {
    return (
        <div className='shaping'>
            {children}
        </div>
    )
}

export default Shaping