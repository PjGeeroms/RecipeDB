export default function Sort() {
  'ngInject';

  return function(items) {
    return items.slice().reverse();
  };
}
