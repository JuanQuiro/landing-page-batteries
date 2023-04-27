import { Inter } from 'next/font/google';
import LayoutBasic from '@/components/LayoutBasic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import { Button, Card, Container, Spacer, Text } from '@nextui-org/react';
import Navbar from '../components/Navbar';
import producto from '../../public/inicio/producto.webp';
import map from '../../public/inicio/map.webp';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <LayoutBasic title="Suministro Venezuela">
      <Navbar />
      <Container>
        <Spacer y={4} />
        <Card>
          <div className="p-5">
            <h1 className="text-left titulo">Suministro Venezuela</h1>
            <Text className="indent-1 py-2 text-left texto">
              ¿Estás buscando pilas y baterías de alta calidad? Suministro
              Venezuela tiene todo lo que necesitas. Ofrecemos una amplia
              variedad de productos, desde pilas AA hasta baterías de 12V.
              Contacta con nosotros :
            </Text>
            <Button
              className="btn bg-pink-700 text-black rounded-3xl hover:bg-green-950 hover:text-white m-3 duration-700"
              size="xs"
              auto
            >
              <Link
                className="text-white text-[0.55rem] sm:text-xs lg:text-sm xl:text-lg 2xl:text-xl"
                href="/contacto"
              >
                Instagram <FaChevronRight className="inline" />
              </Link>
            </Button>
          </div>
        </Card>
        <Spacer y={4} />
        <Card>
          <div className="section">
            <Image
              className="duration-700 hidden xl:block hover:scale-105"
              placeholder="blur"
              src={producto}
              alt="Imagen de nuestros productos"
              width={500}
              height={300}
              
            />
            <div >
              <h2 className="titulo py-2">¿Qué ofrecemos?</h2>
              <Text className="indent-3 texto">
                En Suministro Venezuela, ofrecemos una amplia variedad de
                productos de alta calidad, incluyendo:
              </Text>
              <ul className=" my-2 texto">
                <li className="my-3 texto">
                  Pilas AA, AAA, C, D y 9V <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Baterías de 12V <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Baterías para autos y motos{' '}
                  <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Cargadores de baterías <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Inversores de corriente <FaCheckCircle className="inline" />
                </li>
              </ul>
              <Button
                className="btn text-sm bg-black text-white rounded-3xl hover:bg-green-400 hover:text-black m-3 duration-700"
                size="xs"
                auto
              >
                <Link href="/productos">
                  Nuestros productos{' '}
                  <FaChevronRight className="inline" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
        <Spacer y={4} />
        <Card>
          <div className="section">
            <div className="copy">
              <h2 className="titulo">¿Por qué elegir Suministro Venezuela?</h2>
              <ul className="p-2">
                <li className="my-3 texto">
                  Productos de alta calidad a precios competitivos{' '}
                  <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Amplia selección de productos para satisfacer todas tus
                  necesidades <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Envío rápido y confiable a cualquier parte de Venezuela{' '}
                  <FaCheckCircle className="inline" />
                </li>
                <li className="my-3 texto">
                  Excelente servicio al cliente para ayudarte en todo lo que
                  necesites <FaCheckCircle className="inline" />
                </li>
              </ul>
              <Text className="font-light tracking-wide text-center border-y-2 p-2 my-2 texto">
                En Suministro Venezuela, nuestra prioridad es la satisfacción
                del cliente. Nos esforzamos por ofrecer productos y servicios
                excepcionales para asegurarnos de que nuestros clientes estén
                siempre satisfechos.
              </Text>
            </div>
          </div>
        </Card>
        <Spacer y={4} />
        <Card>
          <div className="section">
            <Image
              src={map}
              alt="Imagen de nuestro equipo"
              width={400}
              height={300}
              className="rounded-3xl mr-2 duration-700 hidden sm:block sm:h-1/4 sm:w-1/4 hover:scale-105"
              placeholder="blur"
            />
            <div className="copy">
              <h2 className="titulo">Conócenos</h2>
              <Text className="texto p-3">
                En Suministro Venezuela, estamos comprometidos en ofrecer los
                mejores productos y servicios posibles para nuestros clientes.
                Nuestro equipo está formado por expertos en baterías y otros
                productos relacionados, y estamos siempre disponibles para
                ayudarte con cualquier pregunta o problema que puedas tener.
              </Text>
              <Button
                className="btn text-sm bg-yellow-500 text-black rounded-3xl hover:bg-green-400 hover:text-black m-3 duration-700"
                size="xs"
                auto
              >
                <Link className="text-[0.55rem] sm:text-xs lg:text-sm xl:text-lg 2xl:text-xl" href="/sobre-nosotros">
                  Aprende más sobre nosotros{' '}
                  <FaChevronRight className="inline" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>
        <Spacer y={4} />
      </Container>
    </LayoutBasic>
  );
}
