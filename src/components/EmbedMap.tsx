interface IRestaurant {
  name?: string;
}

const EmbedMap: React.FC<IRestaurant> = ({ name }) => {
  const url = `https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${name}"}`;

  return (
    <iframe
      className='iframe'
      title={`Map of ${name} locations`}
      src={url}
      width='200'
      height='200'
    />
  );
};

export default EmbedMap;
