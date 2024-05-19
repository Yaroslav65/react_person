import './Person.scss';

const Married = ({ person }) => {
  if (person.isMarried === false) {
    return <p>I am not married</p>;
  }

  if (person.sex === 'f') {
    return <p>{person.partnerName} is my husband</p>;
  }

  return <p>{person.partnerName} is my wife</p>;
};

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">{`My name is ${person.name}`}</h2>
    {person.age !== undefined ? (
      <p className="Person__age">
        <p>{`I am ${person.age}`}</p>
      </p>
    ) : null}
    <p className="Person__partner">
      <Married person={person} />
    </p>
  </section>
);
