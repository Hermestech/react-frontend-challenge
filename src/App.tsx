import { useState } from 'react'
import LoginRegister from './components/organisms/login-register/login-register'

function App() {
  const [count, setCount] = useState(0)

  return (
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
<img src="/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
  <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"/>
  <LoginRegister />
</div>
  )
}

export default App
