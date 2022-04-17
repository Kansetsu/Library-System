import '../style/Home.css'
import { TypedText } from '../components/Typed'

export function Home() {
  return (
    <>
      <div className='home'>
        <div className='typed'>
          <TypedText></TypedText>
        </div>
      </div>
    </>
  )
}