# Notes

# Pure Components

Los componentes puros comprueban los cambios de sus props cada vez que se va a renderizar
Si los props no cambian, no se vuelve a generar el componente
Hay que crearlos al final del arbol cuando se que los props no van a cambiar mucho

# Short circuit

If the first condition is not undefined AND you are passing the object as second condition, it will render it.
Otherwise, it won't render anything

`
{content.image && 
    <img src={{content.image}} alt="content">
}
`

# HOC High Order Component