export default function validate(values, selectedTags) {
  const errors = {};

  if (values.title === ' ') {
    errors.title = 'Title is missing!';
  }
  if (values.description === ' ') {
    errors.description = 'Missing Description!';
  }
  if (!selectedTags) {
    errors.tag = 'Missing a Tag!';
  }

  return errors;
}
