import './Person.scss';

export const Person = ({ person }) => {
  const partner = person.sex === 'm' ? 'wife' : 'husband';

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && (
        <p className="Person__age">
          <p>{`I am ${person.age}`}</p>
        </p>
      )}

      <p className="Person__partner">
        {person.isMarried === false ? (
          <p>I am not married</p>
        ) : (
          <p>
            {person.partnerName} is my {partner}
          </p>
        )}
      </p>
    </section>
  );
};
