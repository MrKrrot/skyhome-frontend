import { Header, Sidebar } from '@components'
import { Directory } from '@components'

const Home = () => {
    return (
        <>
            <Header />
            <Sidebar />
            <div>
                <Directory name='Carpeta' files={5} />
                <Directory name='Imagenes' files={0} />
                <Directory name='Videos' files={1} />
            </div>
        </>
    )
}

export default Home
