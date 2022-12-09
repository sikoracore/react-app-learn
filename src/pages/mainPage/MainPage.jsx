import DetailedCard from "../../componets/deteiledCard/DetailedCard";
import Layout from "../../componets/layout/Layout";

const MainPage = () => {
  return (
    <Layout id={1} nickName='Stesha' >
      <div>main page</div>
      <DetailedCard 
        userName='Stewa'
        userId={1}
        imgUrl='https://doctor-veterinar.ru/media/k2/items/cache/675d28c04794e3c683f4419536c4c15f_L.jpg'
        likes={10}
        isLikeByYou={true}
        comments={[{text: "123123123", nickName: 'Stewa'}, {text: "123123123", nickName: 'Stewa'},{text: "123123123", nickName: 'Stewa'}]}
      />
    </Layout>
  );
};

export default MainPage;
