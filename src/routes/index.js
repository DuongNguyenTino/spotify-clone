import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Mv from '../pages/Mv'
import Search from '../pages/Search'
import Top100 from '../pages/Top100'
import Zingchart from '../pages/Zingchart'
import Artist from '../pages/Artist'
import Playlist from '../pages/Playlist'
import DetailsMv from '../pages/DetailsMv'
import CollectionPlaylist from '../pages/Collection/Playlist'
import CollectionArtist from '../pages/Collection/Artist'
import CollectionPodcast from '../pages/Collection/Podcast'
import CollectionAlbum from '../pages/Collection/Album'

function Router() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/mv" element={<Mv />} />
            <Route path="/mv/:id" element={<DetailsMv />} />
            <Route path="/search" element={<Search />}>
                <Route path=":keyword" element={<Search />} />
            </Route>
            <Route path="/artist" element={<Artist />}>
                <Route path=":name" element={<Artist />} />
            </Route>
            <Route path="/top100" element={<Top100 />} />
            <Route path="/zingchart" element={<Zingchart />} />
            <Route path="/playlist" element={<Playlist />}>
                <Route path=":playlistId" element={<Playlist />} />
            </Route>
            <Route path="/collection/playlist" element={<CollectionPlaylist />} />
            <Route path="/collection/artist" element={<CollectionArtist />} />
            <Route path="/collection/podcast" element={<CollectionPodcast />} />
            <Route path="/collection/album" element={<CollectionAlbum />} />
        </Routes>
    )
}

export default Router
