import { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from "react-redux";
import DetailedCard from "../../componets/deteiledCard/DetailedCard";
import Layout from "../../componets/layout/Layout";
import { getPhotos } from "../../redux/action/photos"
import './MainPage.scss'

const MainPage = () => {
  const photos = useSelector(state => state.photos.photos);
  const loading = useSelector(state => state.photos.isPhotosLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotos());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout id={1} nickName='Stesha'>
      <div className="mainPageRoot">
        <InfiniteScroll
          dataLength={photos.length}
          next={() => console.log('next')}
          hasMore={true}
          loader={'loading'}
          endMessage={
            <p>Постов больше нет</p>
          }
        >
          {loading ? 'loading' : photos.map(({ author, imgUrl, id, likes, comments }) => (
            <DetailedCard 
            key={id}
              userName={author.userName}
              userId={author.id}
              imgUrl={imgUrl}
              likes={likes.length}
              isLikeByYou={true}
              comments={comments}
            />
          ))}
        </InfiniteScroll>
      </div>
    </Layout>
  );
};

export default MainPage;
