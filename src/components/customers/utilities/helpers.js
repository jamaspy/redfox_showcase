export const getInitials = (name) => {
  const array = name.split(" ");
  const first = array[0].charAt(0);
  const second = array[1].charAt(0);
  return (
    <p className="mb-0">
      {first} {second}
    </p>
  );
};
