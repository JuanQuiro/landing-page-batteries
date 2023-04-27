import {
  Navbar,
  Button,
  Link,
  Text,
  useTheme,
  Input,
  Dropdown,
  Avatar,
} from '@nextui-org/react';
import { Layout } from './LayoutNavbar';
import { SearchIcon } from './SearchIcon';

export default function App() {
  const collapseItems = ['Inicio', 'Producto', 'Contacto'];
  const { isDark } = useTheme();

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          '@xs': {
            w: '12%',
          },
        }}
      >
        <Text className="text-xs lg:text-base" b color="inherit">
          Suministro Venezuela
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        activeColor="success"
        hideIn="xs"
        variant="highlight"
      >
        <Navbar.Link isActive href="#">
          Inicio
        </Navbar.Link>
        <Navbar.Link href="#">Productos</Navbar.Link>
        <Navbar.Link href="#">Contacto</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          '@xs': {
            w: '15%',
            jc: 'center',
          },
        }}
      >
        <Input
          clearable
          contentLeft={
            <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
          }
          contentLeftStyling={false}
          css={{
            w: '100%',
            '@xsMax': {
              mw: '300px',
            },
            '& .nextui-input-content--left': {
              h: '100%',
              ml: '$4',
              dflex: 'center',
            },
          }}
          placeholder="Buscar..."
        />
      </Navbar.Content>
      <Navbar.Collapse className="scrollbar scrollbar-none">
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item} activeColor="success">
            <Link
              color="inherit"
              css={{
                minWidth: '100%',
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
