import React, {  } from "react"
import Link from 'next/link'

export default function Home () {
  return (
    <div className="mt-10 flex justify-center">
      <div className="bg-zinc-400 rounded-md p-4">
        <h1>Estudos de fetch:</h1>
        <ul>
          <Link href="/products"><li className="font-bold hover:scale-105">Produtos</li></Link>
          <Link href="/todos"><li className="font-bold hover:scale-105">Todos</li></Link>
          <Link href=""><li></li></Link>
          <Link href=""><li></li></Link>
        </ul>
      </div>
    </div>
  )
}