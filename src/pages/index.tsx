import { Inter } from 'next/font/google'
import LayoutBasic from '@/components/LayoutBasic'
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LayoutBasic title='Suministro Venezuela'>
     <main>
        <section className="bg-gray-100 py-12">s
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl font-bold mb-4">Todo lo Relaccionado a Pilas y baterias</h1>
                <p className="mb-4">
                  Descubre nuestra selección de artículos relacionados con pilas y baterías. En Suministro Venezuela, ofrecemos una amplia
                  variedad de productos de calidad a precios competitivos. Desde pilas AA hasta baterías recargables, tenemos todo
                  lo que necesitas.
                </p>
                <Link href="/productos">
                  <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    Ver productos
                    <FaChevronRight className="inline-block ml-2" />
                  </p>
                </Link>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <Image src="/pilas.jpg" alt="Pilas y baterías" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">¿Por qué comprar pilas en Suministro Venezuela?</h2>
                <ul className="list-disc pl-4 mb-4">
                  <li>
                    <FaCheckCircle className="inline-block mr-2 text-green-500" />
                    Amplia variedad de productos de calidad
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block mr-2 text-green-500" />
                    Precios competitivos
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block mr-2 text-green-500" />
                    Envío rápido y seguro
                  </li>
                  <li>
                    <FaCheckCircle className="inline-block mr-2 text-green-500" />
                    Atención al cliente excepcional
                  </li>
                </ul>
                <Link href="/productos">
                  <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    Ver productos
                    <FaChevronRight className="inline-block ml-2" />
                  </p>
                </Link>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <Image src="/pilas-2.jpg" alt="Pilas y baterías" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">¿Necesitas ayuda?</h2>
                <p className="mb-4">
                  Si tienes alguna pregunta o necesitas ayuda para encontrar el producto adecuado, no dudes en contactarnos. Nuestro
                  equipo de atención al cliente estará encantado de ayudarte.
                </p>
                <Link href="/contacto">
                  <p className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                    Contáctanos
                    <FaChevronRight className="inline-block ml-2" />
                  </p>
                </Link>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <Image src="/ayuda.jpg" alt="Ayuda" width={600} height={400} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">
            &copy; 2023 Susministro Venezuela. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </LayoutBasic>
  )
}
