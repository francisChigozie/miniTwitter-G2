import { FlexboxGrid, Item, Col, Avatar, Icon } from "rsuite"

export default function Home({ twitts, users }) {

    return (
        <div className="show-grid">
            <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item className='sidebar' style={{ height: '100vh', backgroundColor: '#ddd' }} componentClass={Col} colspan={24} md={6}>
                    
                    <h1 className='logo'>G2</h1>

                </FlexboxGrid.Item>
                <FlexboxGrid.Item className='main' style={{ height: '100vh' }} componentClass={Col} colspan={24} md={12}>


                   


                    {twitts.map(i => {
                        return <div className='mainTwitt'>
                            <Avatar>
                                <Icon icon="user" />
                                <p>{i.user_id}</p>
                            </Avatar>

                            <p className='twittBody'>{i.text}</p>
                        </div>
                    })}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item className='rightbar' style={{ height: '100vh', backgroundColor: '#ddd' }} componentClass={Col} colspan={24} md={6} smHidden>
                    colspan={24} md={6} smHidden
                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}