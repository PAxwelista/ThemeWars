function Card(props) {
  const infos = props.infos.data.map((prop, i) => {
    return (
      <div key={i} className="text-neutral-200 w-full flex justify-between dark:text-neutral-800">
        <span className="font-bold">{prop.label}</span>
        <span>{prop.value}</span>
      </div>
    );
  });

  return (
    <div className="bg-neutral-800 w-full p-10 rounded-lg mt-5 dark:bg-neutral-200">
      <h3 className="text-neutral-200 font-bold mb-5 dark:text-neutral-800 ">{props.infos.title || props.infos.name}</h3>
      {infos}
    </div>
  );
}

export default Card;
