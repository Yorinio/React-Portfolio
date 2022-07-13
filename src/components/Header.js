import Button from './Button'

const Header = () => {
  const onClick = () => {
    console.log('Click')
  }
  
  return (
    <header className='header'>
        <h1>Portfolio</h1>
    </header>
  )
}


//CSS IN JS
// const  headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
