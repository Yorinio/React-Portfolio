
const Hello = () => {
    return (
        <div className="hello">
            <img src={require('./usericon.png')}></img>
            <div className="name">
                <p>Hallo, mijn naam is <b>Yorick</b></p> 
                <p>Ik ben een <b>Software Developer.</b></p>
            </div>
      </div>
    )
}

export default Hello;