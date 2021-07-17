import {
    FlexboxGrid, Item, Col, Avatar, Icon,
    InputGroup, Input
} from "rsuite"
import { Link } from "react-router-dom"

export default function Home({ twitts, users }) {

    return (
        <div className="show-grid">
            <FlexboxGrid justify="space-around">
                <FlexboxGrid.Item className='sidebar' style={{ height: '100vh', backgroundColor: '#ddd' }} componentClass={Col} colspan={24} md={6}>

                    <h1 className='logo'>G2</h1>

                    <ul>
                        <li>
                            <Link to="/"># Home</Link>
                        </li>
                        <li>
                            <Link to="/explore"># Explore</Link>
                        </li>
                        <li>
                            <Link to="/messages"># Messages</Link>
                        </li>
                        <li>
                            <Link to="/user"># Users</Link>
                        </li>
                        <li>
                            <Link to="/back-end"># Back-end Code</Link>
                        </li>
                        <li>
                            <Link to="/front-end"># Front-end Code</Link>
                        </li>
                    </ul>

                </FlexboxGrid.Item>
                <FlexboxGrid.Item className='main' style={{ height: '100vh' }} componentClass={Col} colspan={24} md={12}>
                <div className="twitt-box">
                        <input
                            type='text'
                            className='twitt-bar'
                            placeholder='Twitt...'
                            // onChange={}
                            // value={}
                            // onKeyPress={}
                        />
                    </div>
                    {twitts.map(i => {
                        return <div className='mainTwitt'>
                            <Avatar>
                                <Icon icon="user" />
                                
                            </Avatar>
                            <p style={{display: 'inline'}}>{'  '}{i.user_id}</p>
                            

                            <p className='twittBody'>{i.text}{' '}<Link to={`/${i.user_id}`}></Link></p>
                        </div>
                    })}
                </FlexboxGrid.Item>
                <FlexboxGrid.Item className='rightbar' style={{ height: '100vh', backgroundColor: '#ddd' }} componentClass={Col} colspan={24} md={6} smHidden>

                    <div className="search-box">
                        <input
                            type='text'
                            className='search-bar'
                            placeholder='Search...'
                            // onChange={}
                            // value={}
                            // onKeyPress={}
                        />
                    </div>


                </FlexboxGrid.Item>
            </FlexboxGrid>
        </div>
    )
}