import React, { FC } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

interface Props {
  title?: string;
  children:any
}

const LayoutBasic: FC<Props> = ({ children,title }) => {
  
  return (
    <div className={`${inter.className} `}>
      <Head>
        <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Fernando Herrera" />
            <meta name="description" content={`Información sobre el pokémon ${ title }`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
        

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />


        </Head>
          {children}
    </div>
  )
}

export default LayoutBasic