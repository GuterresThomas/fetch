import React, {  } from "react"
import Link from 'next/link'

export default function Home () {
  return (
    <div>
      <div>
        <h1>Estudos de fetch:</h1>
        <ul>
          <Link href="/products"><li>Produtos</li></Link>
          <Link href=""><li></li></Link>
          <Link href=""><li></li></Link>
          <Link href=""><li></li></Link>
        </ul>
      </div>
    </div>
  )
}