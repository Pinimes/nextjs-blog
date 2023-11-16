import React from 'react'
import Layout from "../components/layout";
import Link from "next/link";

export default function Portfolio() {
  return (
    <Layout>
      <h1>Portfolio</h1>
      <ul>
        <li>
            <Link href="/games/TicTacToe">Tic Tac Toe Game</Link>
        </li>
      </ul>
    </Layout>
  )
}
