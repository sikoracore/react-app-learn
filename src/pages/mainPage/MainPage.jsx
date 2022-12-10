import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Bars } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import DetailedCard from "../../componets/deteiledCard/DetailedCard";
import Layout from "../../componets/layout/Layout";
import { getPhotos } from "../../redux/action/photos";
import "./MainPage.scss";

const MainPage = () => {
  const photos = useSelector((state) => state.photos.photos);
  const loading = useSelector((state) => state.photos.isPhotosLoading);
  const total = useSelector((state) => state.photos.totalPhotos);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(getPhotos(page));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const nextHandler = () => {
    setPage(page +1)
  }

  return (
    <Layout id={1} nickName="Stesha">
      <div className="mainPageRoot">
        {loading ? (<div className="mainPageLoaderContainer">
          <Bars color="red" width={80} height={80} />
        </div>) :
          <InfiniteScroll
            dataLength={photos.length}
            next={nextHandler}
            hasMore={photos.length < total}
            loader={<div className="mainPageLoaderContainer">
              <Bars color="red" width={15} height={15} />
              </div>}
            endMessage={
              <p className="mainPageLoaderContainer">Постов больше нет</p>
            }
          >
            {photos.map(({ author, imgUrl, id, likes, comments }) => (
              <DetailedCard
                key={id}
                userName={author.nickname}
                userId={author.id}
                avatarUrl={author.avatarUrl}
                imgUrl={imgUrl}
                likes={likes.length}
                isLikeByYou={true}
                comments={comments}
              />
            ))}
          </InfiniteScroll>}
      </div>
    </Layout>
  );
};

export default MainPage;
