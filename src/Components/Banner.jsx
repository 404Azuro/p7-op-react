import '../Styles/banner.css'

// Composant children au cas où il y aurait plus de 2 bannières
function Banner({children}) { 
    return (
        <div>
            {children}
        </div>
    )
}

export default Banner