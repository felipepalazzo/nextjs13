// getServerSideProps
const getPerson = async (id: string) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}/`);
  return res.json();
};

export default async function IndividualPost({
  params,
}: {
  params: { id: string };
}) {
  const person = await getPerson(params.id);

  return (
    <>
      <h2>My Blog Post</h2>
      <h3>{person.name}</h3>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        error nulla, inventore consequuntur labore quod provident praesentium
        maiores quae quam repudiandae mollitia sequi enim autem et, eum,
        adipisci animi voluptates.
      </div>
    </>
  );
}
