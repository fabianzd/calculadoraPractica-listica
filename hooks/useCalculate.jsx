import { useState } from 'react'

const Calculate = () => {

    const [resul, setResul] = useState(0)

    const operator = () => {
        setResul(eval(resul));
    }

  return [
      resul,
      setResul,
      operator
  ]
}

export default Calculate