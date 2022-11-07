import Card from 'react-bootstrap/Card';
import { Images } from '../assets/images';
import { Songs } from '../assets/songs';

function MusicList() {
    const data = [
        {
            song: Songs.kesariya,
            image: Images.kesariya,
            title: 'Kesariya',
            description: 'Kesariya Mp3 audio in 320Kbps from Brahmastra Bollywood Songs 2022 year',
        },
        {
            song: Songs.amiJeTomar,
            image: Images.bhoolBhulaiyya,
            title: 'Ami je Tomar',
            description: 'Ami je Tomar Mp3 audio in 320Kbps from Bhool Bhulaiyya Bollywood Songs 2022 year',
        },
        {
            song: Songs.meriJaan,
            image: Images.meriJaan,
            title: 'Meri Jaan',
            description: 'Meri Jaan Mp3 audio in 320Kbps from Gangubai Bollywood Songs 2022 year',
        },
        {
            song: Songs.ooBolega,
            image: Images.ooBolega,
            title: 'oo Bolega',
            description: 'oo Bolega Mp3 audio in 320Kbps from Pushpa Bollywood Songs 2022 year',
        },
        {
            song: Songs.sultanKgf,
            image: Images.sultanKgf,
            title: 'Sultan',
            description: 'Sultan Mp3 audio in 320Kbps from KGF 2 Bollywood Songs 2022 year',
        }
    ];

    function AudioPlayer({ item }) {
        return (
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <audio
                        controls
                        style={{ width: '-webkit-fill-available' }}
                        src={item.song}>
                            <a href={item.song}>
                                Download audio
                            </a>
                    </audio>
                </Card.Body>
            </Card>  
        )
    }

    return (
        <div className='container d-flex mt-4'>
            {data.map((item, index) => {
                return (
                    <AudioPlayer
                        item={item}
                        key={item.image}
                    />
                )
            })
            }
        </div>
    );
}

export default MusicList;