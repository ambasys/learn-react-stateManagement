
import Feed from './Feed';
import {useContext} from 'react'
import DataContext from './context/DataContext'
const Home = () => {
    const {searchResults,fetchError,isLoading} =useContext(DataContext);

    return (
        <main className="Home">
            {/* {posts.length ? (
                <Feed posts={posts} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )} */}
            {
                isLoading && <p className='statusMsg'>loading posts...</p>}
                {!isLoading && fetchError && <p className='statusMsg' style={{color:"red"}}>{fetchError}</p>}
                {!isLoading && !fetchError && (searchResults.length ? <Feed posts={searchResults}/>:<p className='statusMsg'>Np posts to display.</p>)}
        </main>
    )
}

export default Home
