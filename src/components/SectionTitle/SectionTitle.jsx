const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="flex flex-col justify-center mx-auto text-center my-8">
      <h1 className="text-5xl font-bold">{heading}</h1>
      <p className="text-lg">{subheading}</p>
    </div>
  );
};

export default SectionTitle;
