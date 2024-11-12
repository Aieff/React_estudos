const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event)
        console.log('Ativou')
    }

    const renderDomething = (x) => {
        if(x) {

            return <h1>if is true</h1>

        } else {

            return <h1>if is false</h1>

        }
    }

 return (
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique aqui</button>
        </div>
        <div>
            <button onClick={() => {console.log('clicou!')}}>Clique aqui</button>
        </div>
        {renderDomething(true)}
        {renderDomething(false)}
    </div>
    
 )

}

export default Events