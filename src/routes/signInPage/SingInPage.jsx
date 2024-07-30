import './signInPage.css'
import { SignIn } from "@clerk/clerk-react"

const SingInPage = () => {
  return (
    <div className='singInPage'>
      <SignIn path="/sign-in" signUpUrl='/sign-up' />
    </div>
  )
}

export default SingInPage