import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";

const Cat: NextPage = (props) => {
  console.log({ props });
  return <div>Category</div>;
};
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { params } = ctx;
  return {
    props: { params },
  };
};
export default Cat;
